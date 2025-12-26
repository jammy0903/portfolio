import { experience, education } from "../data/profile";

export default function Experience() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Experience</h1>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <div className="bg-slate-800/50 rounded-2xl p-8">
            {/* Company Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white">{experience.company}</h2>
                <p className="text-slate-400">{experience.companyDesc}</p>
              </div>
              <div className="mt-2 md:mt-0 md:text-right">
                <p className="text-blue-400 font-medium">{experience.position}</p>
                <p className="text-slate-500">{experience.period} ({experience.duration})</p>
              </div>
            </div>

            {/* Project Info */}
            <div className="bg-slate-900/50 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-white mb-2">{experience.project}</h3>
              <p className="text-slate-400 mb-4">{experience.role}</p>
              <p className="text-slate-500 text-sm">{experience.scale}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {experience.techStack.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-slate-700 text-slate-300 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <h3 className="text-lg font-semibold text-white mb-4">주요 성과</h3>
            <div className="space-y-6">
              {experience.achievements.map((achievement, index) => (
                <div key={index} className="border-l-2 border-blue-500 pl-4">
                  <h4 className="text-white font-medium mb-2">{achievement.title}</h4>
                  <div className="space-y-1 text-sm">
                    <p className="text-slate-400">
                      <span className="text-slate-500">문제:</span> {achievement.problem}
                    </p>
                    <p className="text-slate-400">
                      <span className="text-slate-500">해결:</span> {achievement.solution}
                    </p>
                    <p className="text-green-400">
                      <span className="text-slate-500">결과:</span> {achievement.result}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* News */}
            <div className="mt-8 pt-6 border-t border-slate-700">
              <h4 className="text-sm uppercase tracking-wider text-slate-500 mb-3">언론 보도</h4>
              <div className="flex flex-wrap gap-3">
                {experience.news.map((news) => (
                  <a
                    key={news.title}
                    href={news.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg text-sm transition-colors"
                  >
                    📰 {news.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Education & Training</h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{edu.school}</h3>
                    <p className="text-slate-400">{edu.major}</p>
                  </div>
                  <div className="mt-2 md:mt-0 md:text-right">
                    <p className="text-slate-500">{edu.period}</p>
                    <span className="inline-block px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded text-sm">
                      {edu.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
