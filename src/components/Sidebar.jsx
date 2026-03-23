import { SiGithub } from 'react-icons/si'
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'
import { motion } from 'framer-motion'

const navLinks = [
  { label: '01. About', href: '#about' },
  { label: '02. Experience', href: '#experience' },
  { label: '03. Projects', href: '#projects' },
  { label: '04. Skills', href: '#skills' },
  { label: '05. Education', href: '#education' },
  { label: '06. Contact', href: '#contact' },
]

function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#0d1117] border-r border-white/5 flex flex-col justify-between px-8 py-10 z-50">

      <div>
        <a href="#hero" className="group mb-12 block">
          <svg viewBox="0 0 100 115" className="w-12 h-12 fill-none stroke-[#8b5cf6] stroke-[3] group-hover:stroke-white transition-colors duration-200">
            <polygon points="50,5 95,27.5 95,87.5 50,110 5,87.5 5,27.5" />
            <text x="50" y="68" textAnchor="middle" style={{fontSize: '34px', fontFamily: 'Outfit', fontWeight: 'bold', stroke: 'none', fill: '#8b5cf6'}}>ZT</text>
          </svg>
        </a>

        <nav className="flex flex-col gap-4 mt-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="text-[#8892a4] hover:text-[#8b5cf6] text-sm tracking-widest transition-colors duration-200 flex items-center gap-3 group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
            >
              <span className="w-8 h-px bg-[#8892a4] group-hover:bg-[#8b5cf6] group-hover:w-12 transition-all duration-200"></span>
              {link.label}
            </motion.a>
          ))}
        </nav>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-start gap-4">
          <div className="w-px h-12 bg-[#8b5cf6]/40 ml-2"></div>
          <div className="flex flex-col gap-4">
            <a href="https://github.com/TasnimZarin" target="_blank" className="text-[#8892a4] hover:text-[#8b5cf6] hover:translate-x-1 transition-all">
              <SiGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/zarin-tasnim-6b548830a/" target="_blank" className="text-[#8892a4] hover:text-[#8b5cf6] hover:translate-x-1 transition-all">
              <FaLinkedin size={18} />
            </a>
            <a href="https://www.instagram.com/zaraining10" target="_blank" className="text-[#8892a4] hover:text-[#8b5cf6] hover:translate-x-1 transition-all">
              <FaInstagram size={18} />
            </a>
            <a href="https://www.facebook.com/share/185zZqz5HM/" target="_blank" className="text-[#8892a4] hover:text-[#8b5cf6] hover:translate-x-1 transition-all">
              <FaFacebook size={18} />
            </a>
          </div>
          <div className="w-px h-12 bg-[#8b5cf6]/40 ml-2"></div>
        </div>

        <a href="mailto:zarintasnim587@gmail.com" 
          className="font-['JetBrains_Mono'] text-[#8892a4] text-xs tracking-widest hover:text-[#8b5cf6] transition-colors"
          style={{ writingMode: 'vertical-rl' }}>
          zarintasnim587@gmail.com
        </a>
      </div>

    </aside>
  )
}

export default Sidebar