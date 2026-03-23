import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C#', 'C++', 'PHP','SQL', 'Bash']
  },
  {
    title: 'Backend & APIs',
    skills: ['FastAPI', 'Flask', 'JWT Authentication', 'Spring Boot', 'Django', 'REST APIs']
  },
  {
    title: 'AI & ML',
    skills: ['PyTorch', 'TensorFlow', 'scikit-learn', 'LangChain', 'RAG', 'AI Agents', 'Pandas', 'NumPy', 'LLM', 'OpenAI API']
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'SQLite', 'Redis', 'MongoDB']
  },
  {
    title: 'Frontend',
    skills: ['React','Next.js', 'HTML5', 'CSS3', 'Tailwind CSS']
  },
  {
    title: 'Tools & Cloud',
    skills: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'Git/GitHub', 'GitHub Actions', 'Linux', 'Windows', 'pytest']
  }
]

const floatingIcons = [
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', x: '8%', y: '10%', duration: 6 },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', x: '85%', y: '8%', duration: 7 },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', x: '92%', y: '40%', duration: 5 },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', x: '5%', y: '55%', duration: 8 },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', x: '88%', y: '70%', duration: 6 },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg', x: '10%', y: '80%', duration: 7 },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', x: '78%', y: '25%', duration: 9 },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', x: '15%', y: '30%', duration: 5 },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', x: '50%', y: '5%', duration: 8 },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', x: '70%', y: '88%', duration: 6 },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', x: '30%', y: '90%', duration: 7 },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', x: '60%', y: '78%', duration: 5 },
]

function Skills() {
  return (
    <section id="skills" style={{ padding: '96px 120px', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden', maxWidth: '1200px', margin: '0 auto' }}>

      {/* Floating background icons */}
      {floatingIcons.map((item, i) => (
        <motion.img
          key={i}
          src={item.icon}
          alt=""
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: item.duration, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
          style={{
            position: 'absolute', left: item.x, top: item.y,
            width: '40px', height: '40px', opacity: 0.12,
            pointerEvents: 'none', zIndex: 0
          }}
        />
      ))}

      {/* Heading */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '48px', position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '32px', letterSpacing: '0.05em', color: '#e6edf3', whiteSpace: 'nowrap' }}>Tech Stack</h2>
        <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }} />
      </div>

      {/* Skill grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', position: 'relative', zIndex: 1 }}>
        {skillCategories.map((cat) => (
          <motion.div
            key={cat.title}
            whileHover={{ borderColor: 'rgba(139,92,246,0.4)', y: -4 }}
            transition={{ duration: 0.2 }}
            style={{ padding: '24px', border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)' }}
          >
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8b5cf6', marginBottom: '16px' }}>
              {cat.title}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {cat.skills.map(skill => (
                <motion.span
                  key={skill}
                  whileHover={{ color: '#8b5cf6', borderColor: 'rgba(139,92,246,0.4)' }}
                  style={{ padding: '4px 12px', border: '1px solid rgba(255,255,255,0.1)', color: '#8892a4', fontSize: '13px', fontFamily: 'JetBrains Mono, monospace', cursor: 'default', transition: 'all 0.2s' }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default Skills