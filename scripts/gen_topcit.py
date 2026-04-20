#!/usr/bin/env python3
"""TOPCIT 공부 페이지 생성기 - 카드뷰 + 트리뷰 + 마인드맵"""

import json, math
from pathlib import Path

PINK    = "#d4789c"
PINK_L  = "#fdf0f5"
LAVEN   = "#8b6bae"
LAVEN_L = "#f3eefa"

SUBJECTS = [
    {"id": "01", "title": "소프트웨어 개발",   "emoji": "💻"},
    {"id": "02", "title": "데이터 이해와 활용", "emoji": "🗄️"},
    {"id": "03", "title": "시스템 & 네트워크", "emoji": "🖥️"},
    {"id": "04", "title": "정보보안",           "emoji": "🔒"},
    {"id": "05", "title": "IT 비즈니스와 윤리", "emoji": "💼"},
    {"id": "06", "title": "커뮤니케이션 & PM",  "emoji": "📋"},
]

# v2 우선, 없으면 v1 사용
JSON_V2  = Path(__file__).parent.parent.parent / "cert-study" / "topcit_json_v2"
JSON_V1  = Path(__file__).parent.parent.parent / "cert-study" / "topcit_json"
OUT_DIR  = Path(__file__).parent.parent / "public" / "topcit"


def esc(s: str) -> str:
    return (s.replace("\\", "\\\\")
             .replace("'", "\\'")
             .replace('"', '\\"')
             .replace("\n", " ")
             .replace("\r", ""))


def load_data(subj_id: str) -> tuple[dict, bool]:
    """v2 JSON 로드 (없으면 v1 변환). (data, is_v2) 반환"""
    v2_path = JSON_V2 / f"topcit_{subj_id}.json"
    if v2_path.exists():
        with open(v2_path, encoding="utf-8") as f:
            return json.load(f), True

    v1_path = JSON_V1 / f"topcit_{subj_id}.json"
    if not v1_path.exists():
        return None, False

    with open(v1_path, encoding="utf-8") as f:
        old = json.load(f)

    # v1 → v2 인메모리 변환
    from collections import defaultdict
    chapter_order = [ch["title"] for ch in old.get("chapters", [])]
    ch_secs = defaultdict(list)
    for sec in old.get("sections", []):
        ch_secs[sec.get("chapter", "기타")].append(sec)

    chapters = []
    for ch_title in dict.fromkeys(chapter_order):
        secs = []
        for sec in ch_secs.get(ch_title, []):
            concepts = [
                {
                    "title":       sub.get("title", ""),
                    "keywords":    sec.get("keywords", []),
                    "background":  sub.get("background", ""),
                    "explanation": sub.get("explanation", ""),
                    "mnemonic":    sub.get("mnemonic", ""),
                }
                for sub in sec.get("subsections", [])
            ]
            if concepts:
                secs.append({"title": sec.get("title", ""), "concepts": concepts})
        if secs:
            chapters.append({"title": ch_title, "sections": secs})

    return {"id": old["id"], "title": old["title"], "chapters": chapters}, False


# ── 카드 뷰 ─────────────────────────────────────────────

def card_html(con: dict) -> str:
    title   = con.get("title", "")
    mn      = con.get("mnemonic", "")
    preview = mn[:38] + "…" if len(mn) > 38 else mn
    key     = esc(title)
    return (
        f'<div class="card" data-key="{key}" '
        f"onclick=\"openModal('{key}','{esc(con.get('background',''))}'"
        f",'{esc(con.get('explanation',''))}','{esc(mn)}')\">"
        f'<div class="card-done-badge">✓ 완료</div>'
        f'<div class="card-title">{title}</div>'
        f'<div class="card-preview">🧠 {preview}</div>'
        f"</div>"
    )


def card_view_html(data: dict) -> str:
    chapters = data["chapters"]
    ch_names = [ch["title"] for ch in chapters]

    tab_html = '<button class="tab active" onclick="filterTab(this,\'all\')">전체</button>\n'
    for i, name in enumerate(ch_names):
        tab_html += f'<button class="tab" onclick="filterTab(this,\'{i}\')">{name[:18]}</button>\n'

    sections_html = ""
    for ci, ch in enumerate(chapters):
        for sec in ch["sections"]:
            cards = "".join(card_html(c) for c in sec["concepts"])
            if not cards:
                continue
            sections_html += (
                f'<div class="section-group" data-chapter="{ci}">'
                f'<div class="section-label">{sec["title"]}</div>'
                f'<div class="card-grid">{cards}</div>'
                f"</div>\n"
            )

    return f'''<div class="tabs" id="tab-bar">
{tab_html}</div>
<div id="card-content">
{sections_html}
</div>'''


# ── 트리 뷰 ─────────────────────────────────────────────

def tree_view_html(data: dict) -> str:
    items = ""
    for ch in data["chapters"]:
        sec_html = ""
        for sec in ch["sections"]:
            con_html = ""
            for con in sec["concepts"]:
                has = bool(con.get("background"))
                dot = f'<span class="tree-dot {"has" if has else "empty"}"></span>'
                con_html += (
                    f'<div class="tree-con" '
                    f"onclick=\"openModal('{esc(con['title'])}','{esc(con.get('background',''))}'"
                    f",'{esc(con.get('explanation',''))}','{esc(con.get('mnemonic',''))}')\">"
                    f"{dot}<span>{con['title']}</span>"
                    f"</div>"
                )
            sec_html += (
                f'<div class="tree-sec-wrap">'
                f'<div class="tree-sec" onclick="toggleNode(this)">'
                f'<span class="tree-arr">▶</span>{sec["title"]}'
                f'<span class="tree-count">{len(sec["concepts"])}</span>'
                f'</div>'
                f'<div class="tree-sec-body">{con_html}</div>'
                f'</div>'
            )
        items += (
            f'<div class="tree-ch-wrap">'
            f'<div class="tree-ch" onclick="toggleNode(this)">'
            f'<span class="tree-arr">▶</span>{ch["title"]}'
            f'<span class="tree-count">{sum(len(s["concepts"]) for s in ch["sections"])}</span>'
            f'</div>'
            f'<div class="tree-ch-body">{sec_html}</div>'
            f'</div>'
        )
    return f'<div class="tree-root" id="tree-content">{items}</div>'


# ── 피쉬본 뷰 ───────────────────────────────────────────

def fishbone_html(data: dict, subj_title: str) -> str:
    branches = ""
    for i, ch in enumerate(data["chapters"]):
        side = "left" if i % 2 == 0 else "right"
        total = sum(len(s["concepts"]) for s in ch["sections"])
        ch_id = f"fb_ch{i}"

        sec_blocks = ""
        for j, s in enumerate(ch["sections"]):
            sec_id = f"fb_sec{i}_{j}"
            concepts_html = "".join(
                f'<span class="fb-con" onclick="openModal(\'{esc(c["title"])}\',\'{esc(c.get("background",""))}\',\'{esc(c.get("explanation",""))}\',\'{esc(c.get("mnemonic",""))}\')">{c["title"]}</span>'
                for c in s["concepts"]
            )
            sec_blocks += (
                f'<div class="fb-sec-block">'
                f'<div class="fb-sec" onclick="fbToggle(\'{sec_id}\')">'
                f'<span class="fb-arr">▶</span>{s["title"]} <em>{len(s["concepts"])}</em>'
                f'</div>'
                f'<div class="fb-con-list" id="{sec_id}">{concepts_html}</div>'
                f'</div>'
            )

        branches += (
            f'<div class="fb-branch {side}">'
            f'<div class="fb-inner">'
            f'<div class="fb-ch" onclick="fbToggle(\'{ch_id}\')">'
            f'<span class="fb-arr">▶</span>{ch["title"]}'
            f'<span class="fb-cnt">{total}개</span>'
            f'</div>'
            f'<div class="fb-sec-blocks" id="{ch_id}">{sec_blocks}</div>'
            f'</div>'
            f'<div class="fb-connector"></div>'
            f'</div>'
        )

    return (
        f'<div class="fb-wrap" id="fb-content">'
        f'<div class="fb-title">{subj_title}</div>'
        f'<div class="fb-spine">{branches}</div>'
        f'<div class="fb-tail">▼</div>'
        f'</div>'
    )


# ── 전체 과목 페이지 ─────────────────────────────────────

def subject_page(subj: dict, data: dict) -> str:
    total = sum(len(s["concepts"]) for ch in data["chapters"] for s in ch["sections"])
    return f'''<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>TOPCIT {subj["id"]} {subj["title"]}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Jua&family=Gowun+Dodum&display=swap" rel="stylesheet">
<style>
*{{box-sizing:border-box;margin:0;padding:0}}
body{{font-family:"Gowun Dodum","Apple SD Gothic Neo",sans-serif;background:#fdf8fb;color:#1a1a2e;min-height:100vh}}

/* 헤더 */
.header{{background:{PINK};color:#fff;padding:.85rem 1.25rem;display:flex;align-items:center;gap:.75rem;position:sticky;top:0;z-index:20;box-shadow:0 2px 10px rgba(212,120,156,.3)}}
.header-back{{color:#fff;text-decoration:none;font-size:1.1rem;opacity:.8}}
.header-back:hover{{opacity:1}}
.header h1{{font-size:1rem;font-weight:700;flex:1;font-family:"Jua",sans-serif}}
.header-cnt{{font-size:.75rem;opacity:.7;white-space:nowrap}}

/* 뷰 토글 */
.view-toggle{{display:flex;gap:0;padding:.7rem 1.25rem .3rem;}}
.vtab{{padding:.35rem .9rem;font-size:.78rem;font-weight:600;cursor:pointer;border:1.5px solid {PINK};background:#fff;color:{PINK};transition:all .15s}}
.vtab:first-child{{border-radius:.5rem 0 0 .5rem}}
.vtab:last-child{{border-radius:0 .5rem .5rem 0}}
.vtab.active{{background:{PINK};color:#fff}}

/* ── 피쉬본 뷰 ── */
.fb-wrap{{display:none;padding:.5rem 1rem 2rem}}
.fb-wrap.show{{display:block}}
.fb-title{{text-align:center;background:{PINK};color:#fff;border-radius:.75rem;padding:.6rem 1rem;font-size:.92rem;font-weight:800;margin-bottom:0}}
.fb-spine{{position:relative;padding:.4rem 0 .5rem}}
.fb-spine::before{{content:'';position:absolute;left:50%;transform:translateX(-50%);top:0;bottom:0;width:3px;background:linear-gradient({PINK},{LAVEN});border-radius:2px;z-index:0}}
.fb-branch{{display:flex;align-items:flex-start;margin:.9rem 0;position:relative;z-index:1}}
.fb-branch.left{{flex-direction:row-reverse;padding-right:calc(50% + 10px)}}
.fb-branch.left .fb-inner{{align-items:flex-end;text-align:right}}
.fb-branch.right{{padding-left:calc(50% + 10px)}}
.fb-branch.right .fb-inner{{align-items:flex-start;text-align:left}}
.fb-connector{{position:absolute;top:14px;height:2px;width:calc(50% - 16px);opacity:.3}}
.fb-branch.left .fb-connector{{right:calc(50% + 3px);background:{PINK}}}
.fb-branch.right .fb-connector{{left:calc(50% + 3px);background:{LAVEN}}}
.fb-inner{{display:flex;flex-direction:column;gap:.4rem;width:100%}}
.fb-ch{{display:inline-flex;align-items:center;gap:.3rem;flex-wrap:wrap;background:{PINK};color:#fff;border-radius:.5rem;padding:.36rem .7rem;font-size:.78rem;font-weight:700;cursor:pointer;user-select:none;transition:opacity .15s}}
.fb-branch.right .fb-ch{{background:{LAVEN}}}
.fb-ch:hover{{opacity:.85}}
.fb-arr{{font-size:.52rem;transition:transform .2s;flex-shrink:0}}
.fb-cnt{{font-size:.62rem;opacity:.7;font-weight:400}}
.fb-sec-blocks{{display:none;flex-direction:column;gap:.4rem;width:100%;padding:.2rem 0}}
.fb-sec-blocks.open{{display:flex}}
.fb-branch.left .fb-sec-blocks{{align-items:flex-end}}
.fb-sec-block{{display:flex;flex-direction:column;gap:.18rem;width:100%}}
.fb-branch.left .fb-sec-block{{align-items:flex-end}}
.fb-sec{{display:inline-flex;align-items:center;gap:.22rem;flex-wrap:wrap;background:#fff;border:1.5px solid #f0c6d8;border-radius:.4rem;padding:.2rem .52rem;font-size:.7rem;color:#555;font-weight:600;cursor:pointer;user-select:none;transition:background .15s}}
.fb-branch.right .fb-sec{{border-color:{LAVEN_L}}}
.fb-sec:hover{{background:{PINK_L}}}
.fb-branch.right .fb-sec:hover{{background:{LAVEN_L}}}
.fb-sec em{{font-style:normal;color:#ccc;font-size:.6rem;font-weight:400}}
.fb-con-list{{display:none;flex-wrap:wrap;gap:.18rem;padding:.08rem 0}}
.fb-con-list.open{{display:flex}}
.fb-branch.left .fb-con-list{{justify-content:flex-end}}
.fb-con{{background:#f9f1f6;border:1px solid #f0d8ea;border-radius:1rem;padding:.12rem .4rem;font-size:.62rem;color:#888;cursor:pointer;white-space:nowrap;transition:all .15s}}
.fb-branch.right .fb-con{{background:#f5f1fa;border-color:#e2d5f5}}
.fb-con:hover{{background:{PINK};color:#fff;border-color:{PINK}}}
.fb-branch.right .fb-con:hover{{background:{LAVEN};color:#fff;border-color:{LAVEN}}}
.fb-tail{{text-align:center;color:{PINK};opacity:.3;margin-top:.3rem;font-size:.9rem}}

/* 검색 */
.search-wrap{{padding:.5rem 1.25rem}}
.search{{width:100%;padding:.55rem 1rem;border:2px solid #f0c6d8;border-radius:2rem;font-size:.88rem;outline:none;transition:border .2s;background:#fff}}
.search:focus{{border-color:{PINK}}}

/* 챕터 탭 (카드뷰) */
.tabs{{display:flex;gap:.35rem;padding:.4rem 1.25rem .5rem;overflow-x:auto;scrollbar-width:none}}
.tabs::-webkit-scrollbar{{display:none}}
.tab{{flex-shrink:0;padding:.28rem .75rem;border-radius:2rem;border:1.5px solid {PINK};background:#fff;color:{PINK};font-size:.74rem;font-weight:600;cursor:pointer;white-space:nowrap;transition:all .15s}}
.tab.active,.tab:hover{{background:{PINK};color:#fff}}

/* 카드 그리드 */
.section-group{{padding:.3rem 1.25rem .8rem}}
.section-group.hidden{{display:none}}
.section-label{{font-size:.68rem;font-weight:700;color:{LAVEN};text-transform:uppercase;letter-spacing:.05em;padding:.35rem 0 .3rem;border-bottom:2px solid {LAVEN_L};margin-bottom:.5rem}}
.card-grid{{display:grid;grid-template-columns:repeat(2,1fr);gap:.5rem}}
@media(min-width:540px){{.card-grid{{grid-template-columns:repeat(3,1fr)}}}}
@media(min-width:900px){{.card-grid{{grid-template-columns:repeat(4,1fr)}}}}
@media(min-width:1200px){{.card-grid{{grid-template-columns:repeat(5,1fr)}}}}
.card{{background:#fff;border-radius:.65rem;padding:.7rem;cursor:pointer;border:1.5px solid #f0e0ea;transition:all .18s;box-shadow:0 1px 3px rgba(0,0,0,.04);position:relative}}
.card:hover{{border-color:{PINK};box-shadow:0 4px 14px rgba(212,120,156,.18);transform:translateY(-2px)}}
.card.done{{background:#f0faf4;border-color:#5cb87a!important;box-shadow:0 1px 4px rgba(92,184,122,.2)}}
.card.done .card-title{{color:#2d7a4f}}
.card-done-badge{{position:absolute;top:.4rem;right:.4rem;font-size:.65rem;background:#5cb87a;color:#fff;border-radius:1rem;padding:.1rem .4rem;display:none}}
.card.done .card-done-badge{{display:block}}
.card-title{{font-size:.78rem;font-weight:700;color:#1a1a2e;margin-bottom:.3rem;line-height:1.35;font-family:"Jua",sans-serif}}
.card-preview{{font-size:.68rem;color:#999;line-height:1.4}}
.card.hidden-card{{display:none!important}}

/* ── 트리 뷰 ── */
.tree-root{{padding:.5rem 1.25rem 2rem;display:none}}
.tree-root.show{{display:block}}

/* 챕터 */
.tree-ch-wrap{{margin-bottom:.5rem}}
.tree-ch{{display:flex;align-items:center;gap:.5rem;padding:.6rem .9rem;background:{PINK};color:#fff;border-radius:.6rem;cursor:pointer;font-size:.85rem;font-weight:700;user-select:none;transition:opacity .15s}}
.tree-ch:hover{{opacity:.88}}
.tree-ch-body{{display:none;padding:.4rem 0 .4rem 1.2rem;border-left:3px solid {PINK};margin-left:1rem}}
.tree-ch-body.open{{display:block}}

/* 섹션 */
.tree-sec-wrap{{margin-bottom:.3rem}}
.tree-sec{{display:flex;align-items:center;gap:.5rem;padding:.45rem .8rem;background:{LAVEN_L};border:1.5px solid {LAVEN};border-radius:.5rem;cursor:pointer;font-size:.8rem;font-weight:600;color:{LAVEN};user-select:none;transition:background .15s}}
.tree-sec:hover{{background:#e8e0f5}}
.tree-sec-body{{display:none;padding:.3rem 0 .3rem 1rem;border-left:2px solid {LAVEN_L};margin-left:.9rem}}
.tree-sec-body.open{{display:block}}

/* 개념 노드 */
.tree-con{{display:flex;align-items:center;gap:.5rem;padding:.3rem .6rem;border-radius:.4rem;cursor:pointer;font-size:.76rem;color:#444;transition:all .15s}}
.tree-con:hover{{background:{PINK_L};color:{PINK};font-weight:600}}

/* 화살표 */
.tree-arr{{font-size:.6rem;transition:transform .2s;display:inline-block;width:.8rem;flex-shrink:0}}
.open > .tree-arr, .open + * > .tree-arr{{transform:rotate(90deg)}}

/* 개념 dot (enriched 여부) */
.tree-dot{{width:7px;height:7px;border-radius:50%;flex-shrink:0}}
.tree-dot.has{{background:{PINK}}}
.tree-dot.empty{{background:#ddd}}

/* 개수 뱃지 */
.tree-count{{margin-left:auto;font-size:.68rem;opacity:.65;font-weight:400}}

/* 모달 */
.overlay{{display:none;position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:100;padding:1rem;align-items:flex-end;justify-content:center}}
.overlay.open{{display:flex}}
@media(min-width:640px){{.overlay{{align-items:center}}}}
.modal{{background:#fff;border-radius:1rem 1rem 0 0;width:100%;max-width:560px;max-height:88vh;overflow-y:auto;box-shadow:0 -8px 40px rgba(0,0,0,.18)}}
@media(min-width:640px){{.modal{{border-radius:1rem;max-height:85vh}}}}
.modal-header{{background:{PINK};color:#fff;padding:.9rem 1.25rem;border-radius:1rem 1rem 0 0;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0}}
.modal-header h2{{font-size:.95rem;font-weight:700;line-height:1.3;font-family:"Jua",sans-serif}}
.modal-close{{background:none;border:none;color:#fff;font-size:1.4rem;cursor:pointer;opacity:.8;line-height:1}}
.modal-close:hover{{opacity:1}}
.modal-body{{padding:1.1rem;display:flex;flex-direction:column;gap:.9rem}}
.sec-bg{{background:{PINK_L};border-left:4px solid {PINK};border-radius:0 .5rem .5rem 0;padding:.8rem 1rem}}
.sec-expl{{background:{LAVEN_L};border-left:4px solid {LAVEN};border-radius:0 .5rem .5rem 0;padding:.8rem 1rem}}
.sec-mn{{background:{LAVEN};color:#fff;border-radius:.75rem;padding:.95rem 1.2rem}}
.sec-label{{font-size:.64rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;margin-bottom:.4rem}}
.sec-bg .sec-label{{color:{PINK}}}
.sec-expl .sec-label{{color:{LAVEN}}}
.sec-mn .sec-label{{color:rgba(255,255,255,.75)}}
.sec-bg p,.sec-expl p{{font-size:.85rem;line-height:1.7;color:#333}}
.sec-mn p{{font-size:.92rem;line-height:1.6;font-weight:600}}
.kw{{background:#ffe566;border-radius:3px;padding:0 2px;font-weight:700}}
.kw::before{{content:"★ ";font-size:.75em;color:{PINK}}}
.modal-footer{{padding:.9rem 1.25rem;border-top:1px solid #f5e8f0;display:flex;align-items:center;justify-content:center}}
.done-check-label{{display:flex;align-items:center;gap:.5rem;cursor:pointer;font-size:.9rem;color:#555;font-family:"Gowun Dodum",sans-serif;user-select:none}}
.done-check-label input{{width:1.1rem;height:1.1rem;accent-color:#5cb87a;cursor:pointer}}
.done-check-label.checked{{color:#2d7a4f;font-weight:700}}
.no-data{{font-size:.82rem;color:#bbb;font-style:italic}}
</style>
</head>
<body>

<div class="header">
  <a href="/topcit/" class="header-back">←</a>
  <span style="font-size:1.2rem">{subj["emoji"]}</span>
  <h1>TOPCIT {subj["id"]} &nbsp;{subj["title"]}</h1>
  <span class="header-cnt">{total}개 개념</span>
</div>

<div class="view-toggle">
  <button class="vtab active" onclick="switchView('card', this)">🃏 카드</button>
  <button class="vtab" onclick="switchView('fb', this)">🌳 트리</button>
</div>

<div class="search-wrap">
  <input class="search" type="text" placeholder="🔍  개념 검색..." oninput="applyFilters()">
</div>

{card_view_html(data)}

{fishbone_html(data, subj["emoji"] + " " + subj["title"])}

<!-- 모달 -->
<div class="overlay" id="overlay" onclick="overlayClick(event)">
  <div class="modal">
    <div class="modal-header">
      <h2 id="m-title"></h2>
      <button class="modal-close" onclick="closeModal()">✕</button>
    </div>
    <div class="modal-body">
      <div class="sec-bg">
        <div class="sec-label">💡 왜 생겼어?</div>
        <p id="m-bg"></p>
      </div>
      <div class="sec-expl">
        <div class="sec-label">📖 무슨 뜻이야?</div>
        <p id="m-expl"></p>
      </div>
      <div class="sec-mn">
        <div class="sec-label">🧠 이렇게 외워!</div>
        <p id="m-mn"></p>
      </div>
    </div>
    <div class="modal-footer">
      <label class="done-check-label" id="done-label">
        <input type="checkbox" id="done-check" onchange="toggleDone(this)">
        학습 완료 ✅
      </label>
    </div>
  </div>
</div>

<script>
let curTab = 'all';
let curView = 'card';

// ── 뷰 전환 ──
function switchView(view, btn) {{
  curView = view;
  document.querySelectorAll('.vtab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');

  const cardEls = ['tab-bar','card-content'];
  const treeEl  = document.getElementById('tree-content');
  const search  = document.querySelector('.search');

  const fbEl = document.getElementById('fb-content');
  cardEls.forEach(id => document.getElementById(id).style.display = view==='card' ? '' : 'none');
  if (fbEl) fbEl.classList.toggle('show', view==='fb');
  search.placeholder = '🔍  개념 검색...';
  search.style.display = view==='fb' ? 'none' : '';
}}

// ── 트리 토글 ──
function toggleNode(el) {{
  const body = el.nextElementSibling;
  const arr  = el.querySelector('.tree-arr');
  const isOpen = body.classList.toggle('open');
  arr.style.transform = isOpen ? 'rotate(90deg)' : '';
}}

// ── 카드뷰 필터 ──
function filterTab(btn, ch) {{
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  curTab = ch;
  applyFilters();
}}

function applyFilters() {{
  const q = document.querySelector('.search').value.toLowerCase();

  if (curView === 'tree') {{
    filterTree(q);
    return;
  }}

  document.querySelectorAll('.section-group').forEach(grp => {{
    const chOk = curTab === 'all' || grp.dataset.chapter === curTab;
    grp.classList.toggle('hidden', !chOk);
    if (chOk) {{
      let any = false;
      grp.querySelectorAll('.card').forEach(c => {{
        const show = !q || c.textContent.toLowerCase().includes(q);
        c.classList.toggle('hidden-card', !show);
        if (show) any = true;
      }});
      if (q) grp.classList.toggle('hidden', !any);
    }}
  }});
}}

function filterTree(q) {{
  document.querySelectorAll('.tree-con').forEach(con => {{
    const show = !q || con.textContent.toLowerCase().includes(q);
    con.style.display = show ? '' : 'none';
    if (show && q) {{
      // 부모 열기
      let p = con.parentElement;
      while (p && !p.classList.contains('tree-root')) {{
        if (p.classList.contains('tree-sec-body') || p.classList.contains('tree-ch-body')) {{
          p.classList.add('open');
          const hdr = p.previousElementSibling;
          if (hdr) {{
            const arr = hdr.querySelector('.tree-arr');
            if (arr) arr.style.transform = 'rotate(90deg)';
          }}
        }}
        p = p.parentElement;
      }}
    }}
  }});
}}

// ── 피쉬본 토글 ──
function fbToggle(id) {{
  const el  = document.getElementById(id);
  const open = el.classList.toggle('open');
  const arr  = el.previousElementSibling.querySelector('.fb-arr');
  if (arr) arr.style.transform = open ? 'rotate(90deg)' : '';
}}

// ── 학습 완료 API ──
let doneKeys = new Set();
let curKey = '';

async function loadDone() {{
  try {{
    const res = await fetch('/api/progress');
    const keys = await res.json();
    doneKeys = new Set(keys);
    document.querySelectorAll('.card[data-key]').forEach(card => {{
      if (doneKeys.has(card.dataset.key)) card.classList.add('done');
    }});
  }} catch(e) {{ console.warn('progress load failed', e); }}
}}

async function toggleDone(cb) {{
  const done = cb.checked;
  const label = document.getElementById('done-label');
  label.classList.toggle('checked', done);
  const card = document.querySelector(`.card[data-key="${{curKey}}"]`);
  if (card) card.classList.toggle('done', done);
  if (done) doneKeys.add(curKey); else doneKeys.delete(curKey);
  try {{
    await fetch('/api/progress', {{
      method: 'POST',
      headers: {{'Content-Type': 'application/json'}},
      body: JSON.stringify({{ key: curKey, done }})
    }});
  }} catch(e) {{ console.warn('progress save failed', e); }}
}}

// ── **텍스트** → 형광펜+별표 변환 ──
function formatText(text) {{
  if (!text) return '(준비 중)';
  return text.replace(/\*\*(.+?)\*\*/g, '<span class="kw">$1</span>');
}}

// ── 모달 ──
function openModal(key, bg, expl, mn) {{
  curKey = key;
  document.getElementById('m-title').textContent = key;
  document.getElementById('m-bg').innerHTML    = formatText(bg);
  document.getElementById('m-expl').innerHTML  = formatText(expl);
  document.getElementById('m-mn').innerHTML    = formatText(mn);
  const isDone = doneKeys.has(key);
  document.getElementById('done-check').checked = isDone;
  document.getElementById('done-label').classList.toggle('checked', isDone);
  document.getElementById('overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}}
function closeModal() {{
  document.getElementById('overlay').classList.remove('open');
  document.body.style.overflow = '';
}}
function overlayClick(e) {{
  if (e.target === document.getElementById('overlay')) closeModal();
}}
document.addEventListener('keydown', e => {{ if (e.key === 'Escape') closeModal(); }});
loadDone();
</script>
</body>
</html>'''


# ── 인덱스 페이지 ────────────────────────────────────────

def index_page() -> str:
    cards = "".join(
        f'<a href="/topcit/{s["id"]}/" class="subj-card">'
        f'<div class="subj-emoji">{s["emoji"]}</div>'
        f'<div class="subj-num">영역 {s["id"]}</div>'
        f'<div class="subj-title">{s["title"]}</div>'
        f'<div class="subj-arrow">→</div>'
        f'</a>\n'
        for s in SUBJECTS
    )
    return f'''<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>TOPCIT 공부</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Jua&family=Gowun+Dodum&display=swap" rel="stylesheet">
<style>
*{{box-sizing:border-box;margin:0;padding:0}}
body{{font-family:"Gowun Dodum","Apple SD Gothic Neo",sans-serif;background:#fdf8fb;min-height:100vh;display:flex;flex-direction:column;align-items:center;padding:3rem 1.25rem}}
h1{{font-size:1.7rem;font-weight:800;color:#1a1a2e;margin-bottom:.35rem;font-family:"Jua",sans-serif}}
.sub{{color:#bbb;font-size:.88rem;margin-bottom:2.5rem}}
.grid{{display:grid;grid-template-columns:repeat(2,1fr);gap:1rem;width:100%;max-width:720px}}
@media(min-width:600px){{.grid{{grid-template-columns:repeat(3,1fr)}}}}
.subj-card{{background:#fff;border-radius:1rem;padding:1.5rem 1.25rem;text-decoration:none;border:2px solid #f0e0ea;transition:all .18s;display:flex;flex-direction:column;gap:.25rem}}
.subj-card:hover{{border-color:{PINK};background:{PINK_L};transform:translateY(-3px);box-shadow:0 8px 24px rgba(212,120,156,.18)}}
.subj-emoji{{font-size:2rem;margin-bottom:.2rem}}
.subj-num{{font-size:.7rem;font-weight:700;color:{LAVEN};text-transform:uppercase;letter-spacing:.07em}}
.subj-title{{font-size:.98rem;font-weight:700;color:#1a1a2e;line-height:1.35}}
.subj-arrow{{font-size:.95rem;color:{PINK};margin-top:.4rem}}
</style>
</head>
<body>
<h1>📚 TOPCIT 공부</h1>
<p class="sub">영역을 선택하세요</p>
<div class="grid">{cards}</div>
</body>
</html>'''


# ── 메인 ────────────────────────────────────────────────

if __name__ == "__main__":
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    (OUT_DIR / "index.html").write_text(index_page(), encoding="utf-8")
    print("✓ index.html")

    for subj in SUBJECTS:
        data, is_v2 = load_data(subj["id"])
        if data is None:
            print(f'[스킵] {subj["id"]} JSON 없음')
            continue

        out_dir = OUT_DIR / subj["id"]
        out_dir.mkdir(parents=True, exist_ok=True)
        (out_dir / "index.html").write_text(subject_page(subj, data), encoding="utf-8")

        total = sum(len(s["concepts"]) for ch in data["chapters"] for s in ch["sections"])
        src   = "v2" if is_v2 else "v1→변환"
        print(f'✓ {subj["id"]}/index.html  ({total}개 개념, {src})')
