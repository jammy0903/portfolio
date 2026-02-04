export default function Experience2() {
  const cardStyle = {
    backgroundColor: 'rgba(30, 41, 59, 0.5)',
    borderRadius: '1rem',
    padding: '2rem',
  };

  return (
    <div style={{ minHeight: '100vh', paddingTop: '5rem', paddingBottom: '5rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>CodeInsight</h1>
          <p style={{ color: '#94a3b8', fontSize: '1.125rem', marginBottom: '1rem' }}>C 언어 메모리 시각화 학습 플랫폼</p>
          <div style={{ width: '5rem', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto' }}></div>
        </div>

        {/* Content Area */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

          {/* Project Overview */}
          <div style={cardStyle}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>프로젝트 개요</h2>
            <p style={{ color: '#94a3b8', lineHeight: '1.8' }}>
              {/* 여기에 프로젝트 설명 */}
            </p>
          </div>

          {/* Tech Stack */}
          <div style={cardStyle}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>기술 스택</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {/* 여기에 기술 스택 배지 */}
            </div>
          </div>

          {/* Key Features */}
          <div style={cardStyle}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>주요 기능</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* 여기에 주요 기능 목록 */}
            </div>
          </div>

          {/* Achievements */}
          <div style={cardStyle}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>주요 성과</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* 여기에 성과 목록 */}
            </div>
          </div>

          {/* Links */}
          <div style={cardStyle}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>Links</h2>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {/* 여기에 GitHub, Demo 링크 */}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
