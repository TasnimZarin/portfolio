import { SiGithub } from 'react-icons/si'
import { HiMail } from 'react-icons/hi'
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'

function Contact() {
  return (
    <>
      <section id="contact" style={{ padding: '96px 120px', borderTop: '1px solid rgba(255,255,255,0.05)', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>

        {/* Heading */}
        <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '32px', letterSpacing: '0.05em', color: '#e6edf3', marginBottom: '24px' }}>
          LET'S WORK TOGETHER
        </h2>

        {/* Message */}
        <p style={{ color: '#8892a4', fontSize: '17px', lineHeight: 1.8, maxWidth: '560px', margin: '0 auto 48px auto' }}>
          I'm currently open to full-time opportunities in AI/ML and software engineering. 
          Whether you have a role in mind or just want to connect — my inbox is always open.
        </p>

        {/* Emails */}
        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '15px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8b5cf6', marginBottom: '20px' }}>
         Get In Touch
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', marginBottom: '48px' }}>
          {['ztasnim411@gmail.com', 'zarintasnim587@gmail.com'].map(email => (
            <a
              key={email}
              href={`mailto:${email}`}
              style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#8892a4', textDecoration: 'none', fontFamily: 'JetBrains Mono, monospace', fontSize: '15px', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#8b5cf6'; e.currentTarget.style.paddingLeft = '8px' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#8892a4'; e.currentTarget.style.paddingLeft = '0px' }}
            >
              <HiMail size={18} />
              {email}
              <span>↗</span>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div style={{ width: '64px', height: '1px', background: 'rgba(139,92,246,0.4)', margin: '0 auto 40px auto' }} />

        {/* Social icons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '32px' }}>
          {[
            { href: 'https://github.com/TasnimZarin', icon: <SiGithub size={24} /> },
            { href: 'https://www.linkedin.com/in/zarin-tasnim-6b548830a/', icon: <FaLinkedin size={24} /> },
            { href: 'https://www.instagram.com/zaraining10', icon: <FaInstagram size={24} /> },
            { href: 'https://www.facebook.com/share/185zZqz5HM/', icon: <FaFacebook size={24} /> },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              style={{ color: '#8892a4', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#8b5cf6'; e.currentTarget.style.transform = 'translateY(-4px)' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#8892a4'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              {s.icon}
            </a>
          ))}
        </div>

      </section>

      {/* Footer */}
      <footer style={{ padding: '24px 120px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <a 
          href="https://github.com/TasnimZarin/portfolio" 
          target="_blank"
          style={{ fontFamily: 'JetBrains Mono, monospace', color: '#8892a4', fontSize: '12px', letterSpacing: '0.1em', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.color = '#8b5cf6'}
          onMouseLeave={e => e.currentTarget.style.color = '#8892a4'}
        >
          © 2026 ZARIN TASNIM — Designed & Built with ❤️
        </a>
      </footer>
    </>
  )
}

export default Contact