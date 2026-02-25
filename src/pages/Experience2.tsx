export default function Experience2() {
  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '1rem',
    padding: '2rem',
    boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
  };

  return (
    <div style={{ minHeight: '100vh', paddingTop: '5rem', paddingBottom: '5rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#334155', marginBottom: '1rem' }}>CodeInsight</h1>
          <p style={{ color: '#78716c', fontSize: '1.125rem', marginBottom: '1rem' }}>C 언어 메모리 시각화 학습 플랫폼</p>
          <div style={{ width: '5rem', height: '4px', backgroundColor: '#e891b9', margin: '0 auto' }}></div>
        </div>

        {/* Content Area */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={cardStyle}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#334155', marginBottom: '1rem' }}>프로젝트 개요</h2>
            <p style={{ color: '#78716c', lineHeight: '1.8' }}></p>
          </div>
          <div style={cardStyle}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#334155', marginBottom: '1rem' }}>기술 스택</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}></div>
          </div>
          <div style={cardStyle}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#334155', marginBottom: '1rem' }}>주요 기능</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}></div>
          </div>
          <div style={cardStyle}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#334155', marginBottom: '1rem' }}>주요 성과</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}></div>
          </div>
          <div style={cardStyle}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#334155', marginBottom: '1rem' }}>Links</h2>
            <div style={{ display: 'flex', gap: '1rem' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
