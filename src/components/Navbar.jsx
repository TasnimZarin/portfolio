import { useState } from 'react'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: '🤓 About', href: '#about' },
  { label: '👩🏻‍💻 Experience', href: '#experience' },
  { label: '🛠 Skills', href: '#skills' },
  { label: '🚀 Projects', href: '#projects' },
  { label: '🎓 Education', href: '#education' },
  { label: '📄 Publications', href: '#publications' },
  { label: '✨ Beyond the Code', href: '#languages' },
  { label: '🎯 Extra Curricular', href: '#extra-curricular' },
  { label: '📬 Contact', href: '#contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '20px 64px',
        background: 'rgba(15,23,42,0.85)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        backdropFilter: 'blur(12px)'
      }}>
        <a href="#hero">
          <svg viewBox="0 0 100 115" style={{ width: '48px', height: '48px', fill: 'none', stroke: '#8b5cf6', strokeWidth: 3 }}>
            <polygon points="50,5 95,27.5 95,87.5 50,110 5,87.5 5,27.5" />
            <text x="50" y="68" textAnchor="middle" style={{ fontSize: '34px', fontFamily: 'Outfit', fontWeight: 'bold', stroke: 'none', fill: '#8b5cf6' }}>ZT</text>
          </svg>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          {[
            { href: 'https://github.com/TasnimZarin', icon: <SiGithub size={22} /> },
            { href: 'https://www.linkedin.com/in/zarin-tasnim-6b548830a/', icon: <FaLinkedin size={22} /> },
            { href: 'https://www.instagram.com/zaraining10', icon: <FaInstagram size={22} /> },
            { href: 'https://www.facebook.com/share/185zZqz5HM/', icon: <FaFacebook size={22} /> },
          ].map((s, i) => (
            <a key={i} href={s.href} target="_blank" style={{ color: '#8892a4', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#8b5cf6'}
              onMouseLeave={e => e.currentTarget.style.color = '#8892a4'}>
              {s.icon}
            </a>
          ))}

          <button
            onClick={() => setMenuOpen(o => !o)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px', marginLeft: '8px' }}
          >
            {[0, 1, 2].map(i => (
              <motion.span
                key={i}
                animate={menuOpen
                  ? (i === 0 ? { rotate: 45, y: 7 } : i === 2 ? { rotate: -45, y: -7 } : { opacity: 0, scaleX: 0 })
                  : { rotate: 0, y: 0, opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.25 }}
                style={{ display: 'block', width: '24px', height: '2px', background: '#8b5cf6', borderRadius: '2px' }}
              />
            ))}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 98 }}
            />

            {/* Slide panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35, ease: 'easeOut' }}
              style={{
                position: 'fixed', top: 0, right: 0, bottom: 0,
                width: '320px', zIndex: 99,
                bbackground: '#0f172a',
                borderLeft: '1px solid rgba(167,139,250,0.3)',
                display: 'flex', flexDirection: 'column',
                justifyContent: 'center', alignItems: 'center',
                gap: '28px', padding: '60px 40px',
                boxShadow: '-20px 0 60px rgba(0,0,0,0.5)'
              }}
            >
              <button
                onClick={() => setMenuOpen(false)}
                style={{ position: 'absolute', top: '24px', right: '28px', background: 'none', border: 'none', cursor: 'pointer', color: '#c4b5fd', fontSize: '22px', fontWeight: 'bold' }}
              >✕</button>

              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '16px',
                    fontWeight: '700',
                    letterSpacing: '0.05em',
                    color: '#8b5cf6',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                    width: '100%',
                    textAlign: 'center',
                    padding: '10px 0',
                    background: 'transparent'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#c4b5fd' }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#8b5cf6' }}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar