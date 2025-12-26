import { profile, skills } from "../data/profile";

export default function About() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* Profile Section */}
        <div className="bg-slate-800/50 rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Info */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-2">
                {profile.name}
                <span className="text-slate-400 text-lg ml-2">({profile.nameEn})</span>
              </h2>
              <p className="text-blue-400 font-medium mb-4">{profile.title}</p>

              <div className="space-y-2 text-slate-300 mb-6">
                <p className="flex items-center gap-2">
                  <span className="text-slate-500">📍</span> {profile.location}
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-slate-500">📧</span> {profile.email}
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-slate-500">🐙</span>
                  <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    github.com/jammy0903
                  </a>
                </p>
              </div>

              <p className="text-slate-300 leading-relaxed whitespace-pre-line">
                {profile.summary}
              </p>
            </div>
          </div>
        </div>

        {/* Core Strengths */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Core Strengths</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-semibold text-white mb-2">실시간 데이터 최적화</h3>
              <p className="text-slate-400 text-sm">
                WebSocket 배치 매니저 설계, 우선순위 큐 구현으로 렌더링 부하 80% 감소
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6">
              <div className="text-3xl mb-3">🔧</div>
              <h3 className="text-lg font-semibold text-white mb-2">레거시 리팩토링</h3>
              <p className="text-slate-400 text-sm">
                문서 없는 코드 분석, Context 분리, CRA→Vite 전환으로 빌드 12배 개선
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6">
              <div className="text-3xl mb-3">🎨</div>
              <h3 className="text-lg font-semibold text-white mb-2">UI/UX 설계</h3>
              <p className="text-slate-400 text-sm">
                Figma 와이어프레임, 반응형 웹 구현으로 고객사 재계약 기여
              </p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Skills</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm uppercase tracking-wider text-slate-500 mb-3">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-blue-500/20 text-blue-400 rounded-lg text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-wider text-slate-500 mb-3">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-green-500/20 text-green-400 rounded-lg text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-wider text-slate-500 mb-3">Infrastructure</h3>
              <div className="flex flex-wrap gap-2">
                {skills.infra.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-purple-500/20 text-purple-400 rounded-lg text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-wider text-slate-500 mb-3">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-orange-500/20 text-orange-400 rounded-lg text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
