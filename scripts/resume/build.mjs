/**
 * 이력서 PDF 생성기
 *
 * scripts/resume/resume.html 을 Chrome(CDP)으로 렌더해 PDF 두 벌을 만든다.
 *   - 공개용: 사이트에서 다운로드된다. 생년월일·연락처·상세주소를 뺀다.
 *   - 제출용: 지원서에 첨부한다. 전체 정보를 담는다. (*.pdf 이므로 커밋되지 않는다)
 *
 * 사용법: Chrome을 원격 디버깅 포트로 띄운 뒤
 *   node scripts/resume/build.mjs [--port 9223]
 */
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(DIR, "../..");
const portArg = process.argv.indexOf("--port");
const CDP_PORT = portArg > -1 ? Number(process.argv[portArg + 1]) : 9223;

const OUTPUTS = [
  { variant: "public", out: path.join(ROOT, "public/resume/kim-sojeong-resume.pdf") },
  { variant: "full", out: path.join(ROOT, "이력서_김소정_제출용.pdf") },
];

const cdpGet = (p) =>
  new Promise((res, rej) => {
    http
      .get({ host: "127.0.0.1", port: CDP_PORT, path: p, headers: { Host: "localhost" } }, (r) => {
        let d = "";
        r.on("data", (c) => (d += c));
        r.on("end", () => res(JSON.parse(d)));
      })
      .on("error", rej);
  });

// 폰트(Google Fonts)를 쓰므로 file:// 대신 http 로 띄운다
function serve() {
  const server = http.createServer((req, res) => {
    const name = (req.url || "/").split("?")[0] === "/" ? "resume.html" : decodeURIComponent(req.url.slice(1));
    const file = path.join(DIR, path.basename(name));
    fs.readFile(file, (err, buf) => {
      if (err) return res.writeHead(404).end("not found");
      res.writeHead(200, { "content-type": name.endsWith(".html") ? "text/html; charset=utf-8" : "application/octet-stream" });
      res.end(buf);
    });
  });
  return new Promise((r) => server.listen(0, "127.0.0.1", () => r(server)));
}

const main = async () => {
  const server = await serve();
  const { port } = server.address();
  const url = `http://localhost:${port}/`;

  const target = (await cdpGet("/json/list")).find((t) => t.type === "page");
  if (!target) throw new Error("열려 있는 페이지가 없습니다. Chrome을 먼저 띄우세요.");

  const ws = new WebSocket(target.webSocketDebuggerUrl.replace(/^ws:\/\/[^/]+/, `ws://127.0.0.1:${CDP_PORT}`));
  ws.addEventListener("error", () => {
    throw new Error("CDP 연결 실패");
  });
  let id = 0;
  const waiting = new Map();
  const send = (method, params = {}) =>
    new Promise((r) => {
      const i = ++id;
      waiting.set(i, r);
      ws.send(JSON.stringify({ id: i, method, params }));
    });
  ws.addEventListener("message", (e) => {
    const m = JSON.parse(e.data);
    if (m.id && waiting.has(m.id)) {
      waiting.get(m.id)(m.result);
      waiting.delete(m.id);
    }
  });
  await new Promise((r) => ws.addEventListener("open", r));
  await send("Page.enable");

  for (const { variant, out } of OUTPUTS) {
    await send("Page.navigate", { url });
    await new Promise((r) => setTimeout(r, 2500));
    await send("Runtime.evaluate", {
      awaitPromise: true,
      returnByValue: true,
      expression: `(async () => {
        await document.fonts.ready;
        const isPublic = ${variant === "public"};
        document.querySelectorAll('[data-private]').forEach(el => { el.hidden = isPublic; });
        document.querySelectorAll('[data-private-inline]').forEach(el => { el.hidden = isPublic; });
        document.querySelectorAll('[data-public-inline]').forEach(el => { el.hidden = !isPublic; });
        return 1;
      })()`,
    });
    const { data } = await send("Page.printToPDF", {
      printBackground: true,
      preferCSSPageSize: true,
      displayHeaderFooter: false,
    });
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, Buffer.from(data, "base64"));
    console.log(`${variant.padEnd(6)} → ${path.relative(ROOT, out)}  (${Math.round(fs.statSync(out).size / 1024)} KB)`);
  }

  ws.close();
  server.close();
  process.exit(0); // keep-alive 커넥션이 남아 프로세스가 안 끝나는 것을 막는다
};

main().catch((e) => {
  console.error("실패:", e.message);
  process.exit(1);
});
