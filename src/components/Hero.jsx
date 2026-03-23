import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaFileAlt, FaEnvelope } from 'react-icons/fa'

const roles = ['Software Engineer', 'Full Stack Developer', 'ML Engineer', 'Backend Engineer', 'AI Engineer', 'Researcher', 'DevOps Enthusiast', 'Technical Problem Solver']
const navLinks = ['About', 'Experience', 'Skills', 'Projects', 'Education']
const email = 'zarintasnim587@gmail.com'

function Hero() {
  const [animKey, setAnimKey] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimKey(k => k + 1)
        }
      },
      { threshold: 0.3 }
    )
    const section = document.getElementById('hero')
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center relative" style={{ padding: '96px 80px 64px 120px' }}>

      {/* Email left sidebar */}
      <div style={{
        position: 'fixed', left: '20px', top: '50%', transform: 'translateY(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', zIndex: 40
      }}>
        <div style={{ width: '1px', height: '60px', background: 'rgba(139,92,246,0.4)' }} />
        <a href="mailto:zarintasnim587@gmail.com" style={{ writingMode: 'vertical-rl', textDecoration: 'none', display: 'flex' }}>
          {email.split('').map((char, i) => (
            <motion.span
              key={animKey + '-email-' + i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 + i * 0.04, duration: 0.15 }}
              style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '13px', letterSpacing: '0.1em', color: '#8892a4' }}
            >
              {char}
            </motion.span>
          ))}
        </a>
        <div style={{ width: '1px', height: '60px', background: 'rgba(139,92,246,0.4)' }} />
      </div>

      {/* Main content — two columns */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', width: '100%', gap: '80px', position: 'relative', zIndex: 1 }}>

        {/* LEFT — Name, nav, buttons */}
        <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '340px' }}>

          {/* Hey line */}
          <motion.p
            key={animKey + '-hey'}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '15px', color: '#8b5cf6', letterSpacing: '0.1em', marginBottom: '16px' }}
          >
            Hey 👋, my name is
          </motion.p>

          {/* Name */}
          <h1 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '43px', lineHeight: 1, letterSpacing: '0.05em', marginBottom: '8px' }}>
            {"ZARIN ".split("").map((letter, i) => (
              <motion.span
                key={animKey + '-z' + i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.08, duration: 0.1 }}
                style={{ display: 'inline-block', color: '#e6edf3' }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
            {"TASNIM".split("").map((letter, i) => (
              <motion.span
                key={animKey + '-t' + i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 + i * 0.08, duration: 0.1 }}
                style={{ display: 'inline-block', WebkitTextStroke: '2px #8b5cf6', color: 'transparent' }}
              >
                {letter}
              </motion.span>
            ))}
            <motion.span
              key={animKey + '-cursor'}
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              style={{ display: 'inline-block', width: '4px', height: '60px', background: '#8b5cf6', marginLeft: '6px', verticalAlign: 'middle' }}
            />
          </h1>

          {/* Role */}
          <motion.p
            key={animKey + '-role'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#8892a4', letterSpacing: '0.1em', marginBottom: '32px' }}
          >
            I see problems through the lens of technology & build things that matter.
          </motion.p>

          {/* Divider */}
          <div style={{ width: '40px', height: '1px', background: 'rgba(139,92,246,0.4)', marginBottom: '24px' }} />

          {/* Nav links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
            {navLinks.map((link, i) => (
              <motion.a
                key={link}
                href={'#' + link.toLowerCase()}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 + i * 0.1 }}
                style={{ color: '#8892a4', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '13px', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#e6edf3' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#8892a4' }}
              >
                <span style={{ display: 'inline-block', width: '32px', height: '1px', background: 'currentColor' }} />
                {link}
              </motion.a>
            ))}
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '12px' }}>
            <a href="/resume.pdf" target="_blank"
              style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'transparent', color: '#8b5cf6', padding: '10px 20px', fontWeight: '700', fontSize: '13px', letterSpacing: '0.05em', textDecoration: 'none', transition: 'all 0.2s', border: '2px solid #8b5cf6', fontFamily: 'JetBrains Mono, monospace' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#8b5cf6'; e.currentTarget.style.color = 'white' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#8b5cf6' }}
            >
              <FaFileAlt size={13} />
              View Resume
            </a>
            <a href="#contact"
              style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'transparent', color: '#8b5cf6', padding: '10px 20px', fontWeight: '700', fontSize: '13px', letterSpacing: '0.05em', textDecoration: 'none', transition: 'all 0.2s', border: '2px solid #8b5cf6', fontFamily: 'JetBrains Mono, monospace' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#8b5cf6'; e.currentTarget.style.color = 'white' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#8b5cf6' }}
            >
              <FaEnvelope size={13} />
              Contact Me
            </a>
          </div>

        </div>

        {/* RIGHT — About text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{ flex: 1, paddingTop: '8px' }}
        >
          <p style={{ color: '#8892a4', fontSize: '17px', lineHeight: 1.8, marginBottom: '24px' }}>
            I'm passionate about emerging technology and have worked across AI/ML engineering and software 
            development — spanning ML, deep learning, NLP, computer vision, generative AI, and 
            prompt engineering, with a strong foundation in scalable applications, data pipelines, and 
            production-ready ML workflows.
          </p>
          <p style={{ color: '#8892a4', fontSize: '17px', lineHeight: 1.8, marginBottom: '24px' }}>
            I build full-stack applications, design REST APIs, and create ML pipelines that bring real 
            intelligence to production systems. Currently diving deep into agentic AI and LLM-powered applications.
          </p>
          <p style={{ color: '#8892a4', fontSize: '17px', lineHeight: 1.8 }}>
            My research background explores how software engineering and AI/ML 
            can merge into something powerful and elegant. Collaborative, fast-learning, 
            and open to AI/ML engineer and software developer roles. Let's grow together by building something innovative!
          </p>

          {/* Role badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '32px' }}
          >
            {roles.map((role) => (
              <span key={role} style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: '12px',
                padding: '6px 14px', border: '1px solid rgba(147,197,253,0.4)',
                color: '#93c5fd', letterSpacing: '0.05em'
              }}>
                {role}
              </span>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero