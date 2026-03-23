import { motion } from 'framer-motion'

const symbols = [
  { text: '</>',    top: '10%', left: '5%',  size: '12px', delay: 0,    duration: 12 },
  { text: '{ }',    top: '20%', left: '80%', size: '12px', delay: 1,    duration: 15 },
  { text: 'def',    top: '35%', left: '12%', size: '10px', delay: 2,    duration: 18 },
  { text: 'import', top: '60%', left: '75%', size: '10px', delay: 0.5,  duration: 14 },
  { text: '[ ]',    top: '75%', left: '20%', size: '12px', delay: 3,    duration: 16 },
  { text: '=>',     top: '15%', left: '55%', size: '12px', delay: 1.5,  duration: 13 },
  { text: '&&',     top: '80%', left: '60%', size: '10px', delay: 2.5,  duration: 17 },
  { text: 'const',  top: '45%', left: '88%', size: '10px', delay: 4,    duration: 20 },
  { text: 'return', top: '55%', left: '3%',  size: '10px', delay: 1,    duration: 19 },
  { text: '===',    top: '90%', left: '40%', size: '10px', delay: 3.5,  duration: 11 },
  { text: '( )',    top: '5%',  left: '40%', size: '12px', delay: 0.8,  duration: 22 },
  { text: '##',     top: '68%', left: '45%', size: '10px', delay: 2,    duration: 16 },
  { text: 'async',  top: '30%', left: '65%', size: '10px', delay: 4.5,  duration: 21 },
  { text: '::',     top: '85%', left: '8%',  size: '12px', delay: 1.2,  duration: 14 },
  { text: 'null',   top: '42%', left: '30%', size: '10px', delay: 3,    duration: 18 },
]

function BackgroundBlobs() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {symbols.map((s, i) => (
        <motion.span
          key={i}
          animate={{ y: [0, -30, 10, -20, 0], opacity: [0.12, 0.15, 0.12, 0.12, 0.12] }}
          transition={{ duration: s.duration, repeat: Infinity, ease: 'easeInOut', delay: s.delay }}
          style={{
            position: 'absolute',
            top: s.top, left: s.left,
            fontSize: s.size,
            fontFamily: 'JetBrains Mono, monospace',
            color: '#8b5cf6',
            fontWeight: '600',
            letterSpacing: '0.05em',
            userSelect: 'none',
          }}
        >
          {s.text}
        </motion.span>
      ))}
    </div>
  )
}

export default BackgroundBlobs