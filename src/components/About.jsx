function About() {
  return (
    <section id="about" style={{ padding: '96px 120px', borderTop: '1px solid rgba(255,255,255,0.05)', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '32px', letterSpacing: '0.05em', color: '#e6edf3', whiteSpace: 'nowrap' }}>About Me</h2>
        <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }} />
      </div>

      <div style={{ display: 'flex', gap: '64px', alignItems: 'flex-start' }}>

        {/* Left — text */}
        <div style={{ flex: 1, maxWidth: '560px' }}>
          <p style={{ color: '#8892a4', fontSize: '17px', lineHeight: 1.8, marginBottom: '20px' }}>
            Hello! I'm a software engineer specializing in backend systems, full-stack development, 
            and AI/ML applications. I pick up new technologies fast and thrive in collaborative, 
            agile environments where the problems are hard and the stakes are real.
          </p>
          <p style={{ color: '#8892a4', fontSize: '17px', lineHeight: 1.8, marginBottom: '20px' }}>
            I completed my M.Sc. in Computer Science at Concordia University, Montreal, Canada — where 
            my research was published at an IEEE conference. I enjoy working at the intersection of 
            engineering and intelligence, building systems that are both scalable and smart.
          </p>

          <p style={{ color: '#8892a4', fontSize: '17px', lineHeight: 1.8, marginBottom: '20px' }}>
            Outside of work, I explore emerging technologies, contribute to open source, 
            and continuously push myself to grow as an engineer.{' '}
          </p>

          <p style={{ color: '#e6edf3', fontSize: '15px', marginBottom: '16px', fontFamily: 'JetBrains Mono, monospace' }}>
            Here are a few technologies I've been working with:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 32px' }}>
            {['AI Agents', 'Spring Boot', 'LangChain', 'Flask', 'RAG', 'Docker', 'AWS', 'Kubernetes',].map(tech => (
              <div key={tech} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#8892a4', fontFamily: 'JetBrains Mono, monospace', fontSize: '13px' }}>
                <span style={{ color: '#8b5cf6', fontSize: '11px' }}>▶</span>
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Right — photo */}
        <div style={{ flexShrink: 0, position: 'relative' }}>
          <div style={{ width: '260px', height: '320px', overflow: 'hidden', border: '2px solid rgba(139,92,246,0.4)', transform: 'rotate(3deg)', boxShadow: '0 25px 50px rgba(0,0,0,0.5)', position: 'relative' }}>
            <img
              src="/Zarin Tasnim Convo.png"
              alt="Zarin Tasnim"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(139,92,246,0.4)', mixBlendMode: 'color'}} />
          </div>
          <div style={{ position: 'absolute', bottom: '-16px', right: '-16px', width: '260px', height: '320px', border: '2px solid rgba(139,92,246,0.2)', transform: 'rotate(3deg)', zIndex: -1 }} />
        </div>

      </div>
    </section>
  )
}

export default About