"""
TOPCIT HTML 생성기 — 엑셀 스타일 라이트모드 / 모바일 최적화
"""
import json, os

SUBJECTS = {
    '01': {'title': '소프트웨어 개발',        'icon': '💻', 'color': '#1F5C99'},
    '02': {'title': '데이터 이해와 활용',      'icon': '🗄️', 'color': '#217346'},
    '03': {'title': '시스템 아키텍처',         'icon': '🏗️', 'color': '#7B3FA6'},
    '04': {'title': '정보보안',                'icon': '🔒', 'color': '#C55A11'},
    '05': {'title': 'IT 비즈니스와 윤리',      'icon': '📊', 'color': '#2E74B5'},
    '06': {'title': '테크니컬 커뮤니케이션',    'icon': '📋', 'color': '#375623'},
}

def esc(s):
    return str(s).replace('&','&amp;').replace('<','&lt;').replace('>','&gt;').replace('"','&quot;')

CSS = """
*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent}
html{font-size:15px}
body{
  font-family:'맑은 고딕','Malgun Gothic','Noto Sans KR',-apple-system,sans-serif;
  background:#F2F2F2;
  color:#1a1a1a;
  line-height:1.5;
  min-height:100vh;
  padding-bottom:72px;
}

/* 엑셀 상단 리본 */
.ribbon{
  position:sticky;top:0;z-index:100;
  background:var(--accent);
  border-bottom:3px solid var(--accent-dark);
  padding:0 12px;
  display:flex;align-items:center;gap:10px;
  height:48px;
}
.ribbon-back{
  background:rgba(255,255,255,0.15);
  border:1px solid rgba(255,255,255,0.3);
  color:#fff;padding:6px 12px;border-radius:3px;
  font-size:13px;text-decoration:none;
  display:flex;align-items:center;gap:5px;white-space:nowrap;
}
.ribbon-back:active{background:rgba(255,255,255,0.25)}
.ribbon-title{
  font-size:14px;font-weight:700;color:#fff;
  flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
}

/* 시트 탭 영역 (상단 메타 정보) */
.sheet-info{
  background:#fff;
  border-bottom:2px solid #D9D9D9;
  padding:14px 12px 12px;
}
.sheet-badge{
  display:inline-flex;align-items:center;gap:6px;
  background:var(--accent);color:#fff;
  padding:3px 10px;border-radius:2px;
  font-size:12px;font-weight:700;
  margin-bottom:10px;letter-spacing:0.03em;
}
.sheet-info h1{
  font-size:20px;font-weight:700;
  color:var(--accent-dark);
  margin-bottom:4px;
}
.sheet-info p{font-size:13px;color:#666}

/* 통계 행 (엑셀 셀처럼) */
.stat-row{
  display:grid;grid-template-columns:repeat(4,1fr);
  border:1px solid #D9D9D9;
  border-top:none;
  background:#fff;
}
.stat-cell{
  padding:10px 8px;text-align:center;
  border-right:1px solid #D9D9D9;
}
.stat-cell:last-child{border-right:none}
.stat-num{font-size:20px;font-weight:700;color:var(--accent)}
.stat-label{font-size:11px;color:#888;margin-top:1px}

/* 검색 바 */
.search-bar{
  background:#fff;border-bottom:1px solid #D9D9D9;
  padding:8px 12px;display:flex;align-items:center;gap:8px;
}
.search-bar label{font-size:12px;color:#888;white-space:nowrap;font-weight:600}
.search{
  flex:1;background:#fff;
  border:1px solid #BFBFBF;
  padding:7px 10px;font-size:14px;
  color:#1a1a1a;outline:none;
  border-radius:2px;
  font-family:inherit;
}
.search:focus{border-color:var(--accent);box-shadow:0 0 0 2px rgba(var(--accent-rgb),.15)}

/* 섹션 테이블 */
.tbl-wrap{padding:0}
.tbl-header{
  background:var(--accent);color:#fff;
  padding:8px 12px;
  display:grid;grid-template-columns:40px 1fr 28px;
  align-items:center;gap:8px;
  font-size:12px;font-weight:700;letter-spacing:0.04em;
  border-bottom:1px solid var(--accent-dark);
  position:sticky;top:48px;z-index:40;
}

/* 섹션 행 */
.row{
  background:#fff;
  border-bottom:1px solid #E8E8E8;
}
.row:nth-child(even) .row-hd{background:#F8F8F8}
.row-hd{
  display:grid;grid-template-columns:40px 1fr 28px;
  align-items:center;gap:8px;
  padding:13px 12px;
  cursor:pointer;
  min-height:52px;
}
.row-hd:active{background:#EDF3FB!important}
.row-num{
  font-size:11px;font-weight:800;
  color:var(--accent);
  background:rgba(var(--accent-rgb),.1);
  border:1px solid rgba(var(--accent-rgb),.25);
  padding:2px 4px;border-radius:2px;
  text-align:center;font-family:monospace;
}
.row-title{font-size:14px;font-weight:600;line-height:1.35;color:#1a1a1a}
.row-ch{font-size:11px;color:#999;margin-top:2px}
.arr{font-size:10px;color:#BFBFBF;transition:transform .15s;text-align:center}
.row.open .arr{transform:rotate(180deg)}

/* 펼침 영역 */
.row-body{display:none;background:#FAFAFA;border-top:1px solid #E8E8E8;padding:14px 12px}
.row.open .row-body{display:block}

/* 키워드 */
.kw-wrap{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:12px}
.kw{
  background:#fff;border:1px solid #D9D9D9;
  color:#555;padding:3px 9px;border-radius:2px;
  font-size:12px;font-family:inherit;
}

/* 출제 포인트 */
.quiz{
  background:#fff;
  border:1px solid #D9D9D9;
  border-left:4px solid var(--accent);
  padding:10px 12px;margin-bottom:12px;
  border-radius:0 2px 2px 0;
}
.quiz h4{
  font-size:11px;color:var(--accent);font-weight:800;
  text-transform:uppercase;letter-spacing:.05em;margin-bottom:6px;
}
.quiz li{font-size:12px;color:#444;margin-left:14px;margin-bottom:3px}

/* 세부항목 */
.subs{display:flex;flex-direction:column;gap:8px}
.sub{
  background:#fff;
  border:1px solid #D9D9D9;
  border-radius:2px;padding:12px;
}
.sub-mk{
  display:inline-block;
  background:var(--accent);color:#fff;
  padding:1px 7px;border-radius:1px;
  font-size:11px;font-weight:700;
  margin-bottom:5px;letter-spacing:.03em;
}
.sub-t{font-size:13px;font-weight:700;margin-bottom:5px;line-height:1.4;color:#1a1a1a}
.sub-c{font-size:12px;color:#555;margin-bottom:6px;line-height:1.6}
.bul{list-style:none;border-top:1px solid #F0F0F0;padding-top:6px}
.bul li{
  font-size:12px;color:#444;
  padding:3px 0 3px 12px;
  position:relative;
  border-bottom:1px dotted #F0F0F0;
}
.bul li:last-child{border-bottom:none}
.bul li::before{content:'▸';position:absolute;left:0;color:var(--accent);font-size:11px;top:4px}

/* 하단 시트 탭 네비 */
.sheet-tabs{
  position:fixed;bottom:0;left:0;right:0;z-index:100;
  background:#F0F0F0;
  border-top:2px solid #D9D9D9;
  display:flex;overflow-x:auto;
  -ms-overflow-style:none;scrollbar-width:none;
  padding:0 4px;
  gap:2px;
  align-items:flex-end;
  height:48px;
}
.sheet-tabs::-webkit-scrollbar{display:none}
.tab{
  flex-shrink:0;
  display:flex;align-items:center;gap:4px;
  padding:6px 10px;
  background:#DCDCDC;
  border:1px solid #BFBFBF;border-bottom:none;
  border-radius:3px 3px 0 0;
  font-size:12px;color:#555;
  text-decoration:none;
  height:36px;
  transition:background .1s;
  white-space:nowrap;
}
.tab:active,.tab.active{
  background:#fff;color:var(--active-color,#1a1a1a);
  font-weight:700;border-color:#BFBFBF;
  height:40px;
}
.tab .ic{font-size:14px}

/* 인덱스 */
.idx-header{
  background:var(--accent);color:#fff;
  padding:20px 16px;
  border-bottom:3px solid var(--accent-dark);
}
.idx-header h1{font-size:22px;font-weight:700;margin-bottom:4px}
.idx-header p{font-size:13px;opacity:.85}
.idx-grid{
  display:grid;grid-template-columns:1fr 1fr;
  gap:0;
  border-left:1px solid #D9D9D9;
  border-top:1px solid #D9D9D9;
}
.idx-card{
  background:#fff;
  border-right:1px solid #D9D9D9;
  border-bottom:1px solid #D9D9D9;
  padding:18px 14px;
  text-decoration:none;color:inherit;
  display:block;
}
.idx-card:active{background:#EDF3FB}
.idx-card .ic{font-size:26px;margin-bottom:8px}
.idx-card .n{font-size:11px;font-weight:800;color:var(--card-c);margin-bottom:4px}
.idx-card h2{font-size:14px;font-weight:700;margin-bottom:4px;line-height:1.3;color:#1a1a1a}
.idx-card .m{font-size:12px;color:#888}
.idx-card .bar{height:3px;background:var(--card-c);border-radius:0;margin-top:10px}

@media(min-width:600px){
  .idx-grid{grid-template-columns:repeat(3,1fr)}
  .sheet-info h1{font-size:24px}
}
@media(min-width:900px){
  body{max-width:900px;margin:0 auto}
  .sheet-tabs{max-width:900px;left:50%;transform:translateX(-50%)}
  .ribbon{max-width:900px;left:50%;transform:translateX(-50%);position:sticky}
}
"""

JS = """
// 아코디언
document.querySelectorAll('.row-hd').forEach(h=>{
  h.addEventListener('click',()=>{
    h.closest('.row').classList.toggle('open');
  });
});

// 검색
const si=document.getElementById('search');
if(si){
  si.addEventListener('input',()=>{
    const v=si.value.trim().toLowerCase();
    document.querySelectorAll('.row').forEach(r=>{
      if(r.classList.contains('tbl-header-row')) return;
      const t=(r.querySelector('.row-title')?.textContent||'').toLowerCase();
      const c=(r.querySelector('.row-ch')?.textContent||'').toLowerCase();
      const b=(r.querySelector('.row-body')?.textContent||'').toLowerCase();
      const show=!v||t.includes(v)||c.includes(v)||b.includes(v);
      r.style.display=show?'':'none';
      if(v&&show) r.classList.add('open');
      else if(!v) r.classList.remove('open');
    });
  });
}
"""

def hex_to_rgb(h):
    h = h.lstrip('#')
    return ','.join(str(int(h[i:i+2],16)) for i in (0,2,4))

def darken(h):
    h = h.lstrip('#')
    r,g,b = (int(h[i:i+2],16) for i in (0,2,4))
    return '#{:02x}{:02x}{:02x}'.format(max(0,r-30),max(0,g-30),max(0,b-30))

def sheet_tabs(current):
    tabs = ''
    for n, info in sorted(SUBJECTS.items()):
        active = 'active' if n == current else ''
        style = f'--active-color:{info["color"]}' if n == current else ''
        tabs += f'<a class="tab {active}" href="/topcit/{n}/" style="{style}">'
        tabs += f'<span class="ic">{info["icon"]}</span>{n}</a>'
    return f'<nav class="sheet-tabs">{tabs}</nav>'

def render_subject(num, data, info):
    color = info['color']
    dark = darken(color)
    rgb = hex_to_rgb(color)
    secs = data['sections']
    sec_n = len(secs)
    sub_n = sum(len(s['subsections']) for s in secs)
    kw_n  = sum(len(s['keywords']) for s in secs)
    qp_n  = sum(len(s['quiz_points']) for s in secs)

    rows = ''
    for sec in secs:
        kws = ''.join(f'<span class="kw">{esc(k)}</span>' for k in sec.get('keywords',[])[:8])
        kw_html = f'<div class="kw-wrap">{kws}</div>' if kws else ''

        qps = ''.join(f'<li>{esc(q)}</li>' for q in sec.get('quiz_points',[]))
        qp_html = f'<div class="quiz"><h4>📌 출제 포인트</h4><ul>{qps}</ul></div>' if qps else ''

        subs_html = ''
        for sub in sec.get('subsections', []):
            c = f'<p class="sub-c">{esc(sub["content"][:200])}</p>' if sub.get('content') else ''
            b = ''.join(f'<li>{esc(x)}</li>' for x in sub.get('bullets',[])[:5])
            bul = f'<ul class="bul">{b}</ul>' if b else ''
            subs_html += f'''<div class="sub">
  <span class="sub-mk">{esc(sub["marker"])}</span>
  <div class="sub-t">{esc(sub["title"])}</div>
  {c}{bul}
</div>'''

        ch = sec.get('chapter','')
        ch_html = f'<div class="row-ch">{esc(ch)}</div>' if ch else ''

        rows += f'''<div class="row">
<div class="row-hd">
  <div class="row-num">{esc(sec["num"])}</div>
  <div><div class="row-title">{esc(sec["title"])}</div>{ch_html}</div>
  <div class="arr">▼</div>
</div>
<div class="row-body">
  {kw_html}{qp_html}
  <div class="subs">{subs_html}</div>
</div>
</div>'''

    return f'''<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1">
<meta name="theme-color" content="{color}">
<title>TOPCIT {num} - {info["title"]}</title>
<style>
:root{{--accent:{color};--accent-dark:{dark};--accent-rgb:{rgb}}}
{CSS}
</style>
</head>
<body>

<div class="ribbon">
  <a class="ribbon-back" href="/topcit">◀ 목록</a>
  <div class="ribbon-title">{info["icon"]} {num}. {info["title"]}</div>
</div>

<div class="sheet-info">
  <div class="sheet-badge">기술영역 {num}</div>
  <h1>{info["title"]}</h1>
  <p>TOPCIT 에센스 핵심 정리</p>
</div>
<div class="stat-row">
  <div class="stat-cell"><div class="stat-num">{sec_n}</div><div class="stat-label">소단원</div></div>
  <div class="stat-cell"><div class="stat-num">{sub_n}</div><div class="stat-label">세부항목</div></div>
  <div class="stat-cell"><div class="stat-num">{kw_n}</div><div class="stat-label">키워드</div></div>
  <div class="stat-cell"><div class="stat-num">{qp_n}</div><div class="stat-label">출제포인트</div></div>
</div>

<div class="search-bar">
  <label>🔍 검색</label>
  <input id="search" class="search" type="search" placeholder="소단원명 검색..." autocomplete="off">
</div>

<div class="tbl-wrap">
  <div class="tbl-header">
    <div>NO</div><div>소단원</div><div></div>
  </div>
  {rows}
</div>

{sheet_tabs(num)}
<script>{JS}</script>
</body>
</html>'''

def render_index():
    color = '#1F5C99'
    dark  = darken(color)
    cards = ''
    for num, info in sorted(SUBJECTS.items()):
        p = f'/home/jammy/projects/cert-study/topcit_json/topcit_{num}.json'
        if not os.path.exists(p): continue
        d = json.load(open(p))
        sec_n = len(d['sections'])
        c = info['color']
        cards += f'''<a class="idx-card" href="/topcit/{num}/" style="--card-c:{c}">
  <div class="ic">{info["icon"]}</div>
  <div class="n">{num}</div>
  <h2>{info["title"]}</h2>
  <div class="m">소단원 {sec_n}개</div>
  <div class="bar"></div>
</a>'''

    tabs = sheet_tabs(None)
    return f'''<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1">
<meta name="theme-color" content="{color}">
<title>TOPCIT 에센스 정리</title>
<style>:root{{--accent:{color};--accent-dark:{dark};--accent-rgb:31,92,153}}{CSS}</style>
</head>
<body>
<div class="idx-header" style="background:{color};border-bottom:3px solid {dark}">
  <a href="/" style="color:rgba(255,255,255,.7);font-size:13px;text-decoration:none">← 포트폴리오</a>
  <h1 style="margin-top:10px">📚 TOPCIT 에센스</h1>
  <p>6개 기술영역 핵심 개념 정리</p>
</div>
<div class="idx-grid">{cards}</div>
{tabs}
</body>
</html>'''

if __name__ == '__main__':
    base = '/home/jammy/projects/portf/public/topcit'
    jsn  = '/home/jammy/projects/cert-study/topcit_json'

    # /topcit/ → index.html
    os.makedirs(base, exist_ok=True)
    with open(f'{base}/index.html','w',encoding='utf-8') as f:
        f.write(render_index())
    print('topcit/index.html')

    # /topcit/01/ → 01/index.html  (깔끔한 경로)
    for num, info in SUBJECTS.items():
        p = f'{jsn}/topcit_{num}.json'
        if not os.path.exists(p): continue
        d = json.load(open(p))
        html = render_subject(num, d, info)
        folder = f'{base}/{num}'
        os.makedirs(folder, exist_ok=True)
        with open(f'{folder}/index.html','w',encoding='utf-8') as f:
            f.write(html)
        print(f'topcit/{num}/index.html ({len(d["sections"])}섹션, {len(html.encode())//1024}KB)')

    print('완료!')
