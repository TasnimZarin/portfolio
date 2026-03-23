import { motion } from 'framer-motion'

const education = [
  {
    period: '2021 — 2025',
    degree: 'M.Sc. Computer Science',
    school: 'Concordia University',
    location: 'Montreal, Canada',
    desc: 'Specialized in machine learning, backend systems, and in network and distributed computing. Conducted research resulting in a peer-reviewed IEEE publication.',
    courses: ['Thesis', 'Research', 'Machine Learning', 'Artificial Intelligence', 'Cloud Networking & Service Provisioning', 'Comparative Study of Programming Languages'],
  },
  {
    period: '2016 — 2020',
    degree: 'B.Sc. Computer Science & Engineering',
    school: 'BRAC University',
    location: 'Dhaka, Bangladesh',
    desc: 'Specialized in neural networks with a solid foundation in algorithms, data structures, object-oriented programming, databases, and software engineering. Built strong fundamentals in Java and Python.',
    courses: ['Thesis', 'Artificial Intelligence', 'Neural Network', 'Data Structures', 'Algorithms', 'Database Systems', 'System Analysis and Design', 'Software Engineering', 'Computer Architecture'],
  },
]

function Education() {
  return (
    <section id="education" style={{ padding: '96px 120px', borderTop: '1px solid rgba(255,255,255,0.05)', maxWidth: '1200px', margin: '0 auto' }}>

      <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '32px', letterSpacing: '0.05em', color: '#e6edf3', whiteSpace: 'nowrap' }}>Education</h2>
        <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {education.map((edu, index) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ borderColor: 'rgba(139,92,246,0.4)' }}
            style={{ padding: '32px', border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)' }}
          >
            {/* Top row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div>
                <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '26px', letterSpacing: '0.05em', color: '#e6edf3', marginBottom: '6px' }}>
                  {edu.degree}
                </h3>
                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '13px', color: '#8b5cf6', marginBottom: '4px' }}>
                  {edu.school}
                </p>
                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: '#8892a4' }}>
                  {edu.location}
                </p>
              </div>

              {/* Year badge */}
              <span style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: '13px',
                color: '#8b5cf6', border: '1px solid rgba(139,92,246,0.4)',
                padding: '6px 16px', borderRadius: '999px', whiteSpace: 'nowrap'
              }}>
                {edu.period}
              </span>
            </div>

            {/* Description */}
            <p style={{ color: '#8892a4', fontSize: '15px', lineHeight: 1.7, marginBottom: '20px', maxWidth: '700px' }}>
              {edu.desc}
            </p>

            {/* Courses — slide in */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {edu.courses.map((course, i) => (
                <motion.span
                  key={course}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                  whileHover={{ color: '#8b5cf6', borderColor: 'rgba(139,92,246,0.4)' }}
                  style={{
                    padding: '4px 14px', border: '1px solid rgba(255,255,255,0.1)',
                    color: '#8892a4', fontSize: '12px',
                    fontFamily: 'JetBrains Mono, monospace', cursor: 'default',
                    transition: 'all 0.2s'
                  }}
                >
                  {course}
                </motion.span>
              ))}
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default Education