import { motion } from 'framer-motion'
import { SiGithub } from 'react-icons/si'
import { FaExternalLinkAlt } from 'react-icons/fa'

function Publications() {
  return (
    <section id="publications" style={{ padding: '96px 120px', borderTop: '1px solid rgba(255,255,255,0.05)', maxWidth: '1200px', margin: '0 auto' }}>

      {/* Heading */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '32px', letterSpacing: '0.05em', color: '#e6edf3', whiteSpace: 'nowrap' }}>Publications</h2>
        <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }} />
      </div>

      {/* Publication Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ borderColor: 'rgba(139,92,246,0.4)' }}
        style={{ padding: '36px', border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)', transition: 'all 0.2s' }}
      >

        {/* Top row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '24px', marginBottom: '16px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '20px', fontWeight: '600', color: '#e6edf3', lineHeight: 1.4, marginBottom: '8px' }}>
              An Ontology-Based Model for In-Network Computing Components Description and Discovery
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: '#8b5cf6' }}>
                IEEE CNSM 2024
              </span>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: '#8892a4' }}>
                Prague, Czech Republic
              </span>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: '#8892a4' }}>
                Oct 28–31, 2024
              </span>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: '#8892a4' }}>
                DOI: 10.23919/CNSM62983.2024.10814634
              </span>
            </div>
          </div>

          {/* IEEE Link */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a
                href="https://ieeexplore.ieee.org/document/10814634"
                target="_blank"
                style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 18px', border: '1px solid rgba(139,92,246,0.4)', color: '#8b5cf6', textDecoration: 'none', fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', transition: 'all 0.2s', whiteSpace: 'nowrap' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#8b5cf6'; e.currentTarget.style.color = 'white' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#8b5cf6' }}
            >
                <FaExternalLinkAlt size={11} />
                View on IEEE
            </a>
            <a
                href="https://github.com/TasnimZarin/INC-Components-Description-Discovery"
                target="_blank"
                style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 18px', border: '1px solid rgba(139,92,246,0.4)', color: '#8b5cf6', textDecoration: 'none', fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', transition: 'all 0.2s', whiteSpace: 'nowrap' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#8b5cf6'; e.currentTarget.style.color = 'white' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#8b5cf6' }}
            >
                <SiGithub size={11} />
                View on GitHub
            </a>
            </div>
        </div>
        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', marginBottom: '20px' }} />

        {/* Bullet points */}
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
          {[
            'Proposed a novel architecture for describing and discovering In-Network Computing (INC) components — enabling computation directly within network devices like switches and smart NICs to reduce latency and cloud dependency',
            'Introduced INCO (In-Network Computing Ontology) and a semantic matchmaking algorithm that automatically identifies the most appropriate INC components based on user requests and preferences',
            'Validated through experimental simulations demonstrating stability and effectiveness across query complexity and retrieved instances — tailored for Holographic-Type Communication applications',
          ].map((point, i) => (
            <li key={i} style={{ display: 'flex', gap: '12px', color: '#8892a4', fontSize: '15px', lineHeight: 1.7 }}>
              <span style={{ color: '#8b5cf6', flexShrink: 0, marginTop: '2px' }}>▶</span>
              {point}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {['In-Network Computing', 'Ontology', 'Semantic Matchmaking', 'Network Management', 'Holographic Communication', 'Knowledge Representation', 'OWL', 'SWRL/SQWL', 'Java', 'Python'].map(tag => (
            <span key={tag} style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: '12px',
              padding: '4px 12px',
              background: 'rgba(139,92,246,0.1)',
              border: '1px solid rgba(139,92,246,0.2)',
              color: '#8b5cf6',
              borderRadius: '999px'
            }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Publication Card 2 */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.1 }}
  whileHover={{ borderColor: 'rgba(139,92,246,0.4)' }}
  style={{ padding: '36px', border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)', transition: 'all 0.2s', marginTop: '24px' }}
>
  {/* Top row */}
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '24px', marginBottom: '16px', flexWrap: 'wrap' }}>
    <div style={{ flex: 1 }}>
      <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '20px', fontWeight: '600', color: '#e6edf3', lineHeight: 1.4, marginBottom: '8px' }}>
        Demonstration of an In-Network Computing Enabled Architecture for Holographic Streaming
      </h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: '#8b5cf6' }}>
          IEEE NFV-SDN 2022
        </span>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: '#8892a4' }}>
          Phoenix, AZ, USA
        </span>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: '#8892a4' }}>
          Nov 14–16, 2022
        </span>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: '#8892a4' }}>
          DOI: 10.1109/NFV-SDN56302.2022.9974722
        </span>
      </div>
    </div>

    {/* IEEE Link */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <a
        href="https://ieeexplore.ieee.org/document/9974722"
        target="_blank"
        style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 18px', border: '1px solid rgba(139,92,246,0.4)', color: '#8b5cf6', textDecoration: 'none', fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', transition: 'all 0.2s', whiteSpace: 'nowrap' }}
        onMouseEnter={e => { e.currentTarget.style.background = '#8b5cf6'; e.currentTarget.style.color = 'white' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#8b5cf6' }}
      >
        <FaExternalLinkAlt size={11} />
        View on IEEE
      </a>
        <a
            href="https://github.com/zakariaAitHmitti/360degreeVideoWithINC"
            target="_blank"
            style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 18px', border: '1px solid rgba(139,92,246,0.4)', color: '#8b5cf6', textDecoration: 'none', fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', transition: 'all 0.2s', whiteSpace: 'nowrap' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#8b5cf6'; e.currentTarget.style.color = 'white' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#8b5cf6' }}
            >
            <SiGithub size={11} />
            View on GitHub
    </a>
    </div>
  </div>

  {/* Divider */}
  <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', marginBottom: '20px' }} />

  {/* Bullet points */}
  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
    {[
    'Demonstrated an INC-enabled network architecture that outperforms traditional networks in ultra-low latency and high bandwidth — specifically designed for holographic streaming applications',
    'Validated INC as a promising paradigm for next-generation infrastructure by showcasing how distributing computing workloads across the network eliminates dependency on external servers',
    ].map((point, i) => (
      <li key={i} style={{ display: 'flex', gap: '12px', color: '#8892a4', fontSize: '15px', lineHeight: 1.7 }}>
        <span style={{ color: '#8b5cf6', flexShrink: 0, marginTop: '2px' }}>▶</span>
        {point}
      </li>
    ))}
  </ul>

  {/* Tags */}
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
    {['Network Functions Virtualization', 'Virtual Network Functions', 'Low Latency', 'High Bandwidth', 'Network Architecture', 'C++', 'Python', 'JavaScript', 'P4'].map(tag => (
      <span key={tag} style={{
        fontFamily: 'JetBrains Mono, monospace', fontSize: '12px',
        padding: '4px 12px',
        background: 'rgba(139,92,246,0.1)',
        border: '1px solid rgba(139,92,246,0.2)',
        color: '#8b5cf6',
        borderRadius: '999px'
      }}>
        {tag}
      </span>
    ))}
  </div>

</motion.div>

      </motion.div>

    </section>
  )
}

export default Publications