import { motion } from 'framer-motion'

const activities = [
  {
    category: 'Sports',
    emoji: '🥋',
    items: ['Martial Arts', 'Badminton', 'Golf', 'Parade Training'],
    description: 'Developing strong discipline, teamwork, and energy in fast-paced environments.'
  },
  {
    category: 'Creative Pursuits',
    emoji: '🎨',
    items: ['Painting', 'Baking', 'Crafting'],
    description: 'Enhancing attention to detail, creativity, and enjoyment in creating positive experiences for others.'
  }
]

function ExtraCurricular() {
  return (
    <section id="extra-curricular" style={{ padding: '96px 120px', borderTop: '1px solid rgba(255,255,255,0.05)', maxWidth: '1200px', margin: '0 auto' }}>

      <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '32px', letterSpacing: '0.05em', color: '#e6edf3', whiteSpace: 'nowrap' }}>Extra Curricular</h2>
        <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }} />
      </div>

      <div style={{ display: 'flex', gap: '24px' }}>
        {activities.map((activity) => (
          <motion.div
            key={activity.category}
            whileHover={{ borderColor: 'rgba(139,92,246,0.4)', y: -4 }}
            transition={{ duration: 0.2 }}
            style={{ flex: 1, padding: '32px', border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <span style={{ fontSize: '28px' }}>{activity.emoji}</span>
              <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8b5cf6' }}>{activity.category}</p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
              {activity.items.map(item => (
                <span key={item} style={{ padding: '4px 12px', border: '1px solid rgba(139,92,246,0.3)', color: '#8892a4', fontSize: '13px', fontFamily: 'JetBrains Mono, monospace' }}>
                  {item}
                </span>
              ))}
            </div>
            <p style={{ color: '#8892a4', fontSize: '14px', lineHeight: 1.7 }}>{activity.description}</p>
          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default ExtraCurricular