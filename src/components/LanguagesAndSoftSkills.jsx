import { motion } from 'framer-motion'

function LanguagesAndSoftSkills() {
  return (
    <section id="languages" style={{ padding: '96px 120px', borderTop: '1px solid rgba(255,255,255,0.05)', maxWidth: '1200px', margin: '0 auto' }}>

      <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '32px', letterSpacing: '0.05em', color: '#e6edf3', whiteSpace: 'nowrap' }}>Beyond the Code</h2>
        <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }} />
      </div>

      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
      <motion.div
        whileHover={{ borderColor: 'rgba(139,92,246,0.4)', y: -4 }}
        transition={{ duration: 0.2 }}
        style={{ flex: 1, minWidth: '280px', padding: '32px', border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)' }}
      >
        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8b5cf6', marginBottom: '24px' }}>🏅 Certifications</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {[
              { name: 'Deep Learning Specialization', url: 'https://www.coursera.org/account/accomplishments/specialization/XEN65FK6TUG5' },
              { name: 'COVID-19 Data Analysis Using Python', url: 'https://www.coursera.org/account/accomplishments/verify/BF69TW2RT2TW' },
              { name: 'Python for Everybody', url: 'https://www.coursera.org/account/accomplishments/specialization/C2NZM6V22HDZ' },
              { name: 'AWS Cloud Practitioner — In Progress', url: null },
            ].map(cert => (
            <motion.a
              key={cert.name}
              href={cert.url ? cert.url : undefined}
              target={cert.url ? '_blank' : undefined}
              whileHover={{ color: '#8b5cf6', borderColor: 'rgba(139,92,246,0.4)' }}
              style={{
                padding: '6px 14px',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#8892a4',
                fontSize: '13px',
                fontFamily: 'JetBrains Mono, monospace',
                cursor: cert.url ? 'pointer' : 'default',
                transition: 'all 0.2s',
                textDecoration: 'none',
                display: 'inline-flex'
              }}
            >
              {cert.name} {cert.url ? '↗' : ''}
            </motion.a>
          ))}
        </div>
      </motion.div>
        {/* Languages */}
        <motion.div
          whileHover={{ borderColor: 'rgba(139,92,246,0.4)', y: -4 }}
          transition={{ duration: 0.2 }}
          style={{ flex: 1, padding: '32px', border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)' }}
        >
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8b5cf6', marginBottom: '24px' }}>🌐 Languages</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {['English — Fluent', 'French — Intermediate', 'Chinese — Basic', 'Spanish — Learning', 'Japanese — Learning', 'Bengali — Fluent'].map(lang => (
                <motion.span
                  key={lang}
                  whileHover={{ color: '#8b5cf6', borderColor: 'rgba(139,92,246,0.4)' }}
                  style={{ padding: '6px 14px', border: '1px solid rgba(255,255,255,0.1)', color: '#8892a4', fontSize: '13px', fontFamily: 'JetBrains Mono, monospace', cursor: 'default', transition: 'all 0.2s' }}
                >
                  {lang}
                </motion.span>
              ))}
            </div>

        </motion.div>

        {/* Soft Skills */}
        <motion.div
          whileHover={{ borderColor: 'rgba(139,92,246,0.4)', y: -4 }}
          transition={{ duration: 0.2 }}
          style={{ flex: 1, padding: '32px', border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)' }}
        >
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8b5cf6', marginBottom: '24px' }}>🧠 Soft Skills</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {['Attention to Detail', 'Fast Learner', 'Team Collaboration', 'Agile/Scrum', 'Critical Thinking', 'Problem Solving', 'Adaptability'].map(skill => (
              <motion.span
                key={skill}
                whileHover={{ color: '#8b5cf6', borderColor: 'rgba(139,92,246,0.4)' }}
                style={{ padding: '6px 14px', border: '1px solid rgba(255,255,255,0.1)', color: '#8892a4', fontSize: '13px', fontFamily: 'JetBrains Mono, monospace', cursor: 'default', transition: 'all 0.2s' }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Leadership & Volunteering */}
      <motion.div
        whileHover={{ borderColor: 'rgba(139,92,246,0.4)', y: -4 }}
        transition={{ duration: 0.2 }}
        style={{ flex: 1, minWidth: '280px', padding: '32px', border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)' }}
      >
        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8b5cf6', marginBottom: '24px' }}>🌟 Leadership & Volunteering</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <p style={{ color: '#e6edf3', fontSize: '14px', fontWeight: '600', marginBottom: '4px' }}>Information Coordinator</p>
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: '#8b5cf6', marginBottom: '6px' }}>BRAC NGO · Dhaka, Bangladesh · 2018–2019</p>
            <p style={{ color: '#8892a4', fontSize: '13px', lineHeight: 1.7 }}>Organized and analyzed data to support team operations, demonstrating accuracy, organization, and attention to detail.</p>
          </div>
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }} />
          <div>
            <p style={{ color: '#e6edf3', fontSize: '14px', fontWeight: '600', marginBottom: '4px' }}>Team Leader</p>
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: '#8b5cf6', marginBottom: '6px' }}>Woman Guide Association · Dhaka, Bangladesh · 2017–2018</p>
            <p style={{ color: '#8892a4', fontSize: '13px', lineHeight: 1.7 }}>Led and motivated members during community programs, showing strong leadership, teamwork, and communication.</p>
          </div>
        </div>
      </motion.div>

      </div>
    </section>
  )
}

export default LanguagesAndSoftSkills