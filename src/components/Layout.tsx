import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useTrackContent } from "../data/track";

export default function Layout() {
  const content = useTrackContent();

  // 탭 제목과 검색 결과 설명은 보고 있는 트랙을 따라간다 —
  // 기획 지원서에 링크를 적었는데 탭에 "풀스택 개발자"가 뜨면 어긋난다.
  useEffect(() => {
    document.title = `김소정 | ${content.role}`;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", content.heroSummary);
  }, [content]);

  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
