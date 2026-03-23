import { motion } from 'framer-motion'
import { SiGithub } from 'react-icons/si'
import { FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useState } from 'react'

const projects = [
  {
    name: 'Nexus - Career Coach Agent',
    images: [
      '/nexus/nexus-archi.png',
      '/nexus/nexus-workflow.png',
      '/screenshot.png', '/screenshot.png',
    ],
    desc: 'Nexus is an agentic AI career coach that conducts natural-language conversations to understand your skills, experience, and target roles. Powered by a deliberative LLM-backed agent that interprets free-form input, identifies skill gaps, generates clarifying questions, and builds a personalized career roadmap. Features a Next.js chat UI, REST API backend with FastAPI, session memory for context persistence, and a constraint validation engine that maps your profile against real job requirements.',
    tech: ['Python', 'FastAPI', 'LangChain', 'OpenAI API', 'RAG', 'ChromaDB', 'Next.js', 'PostgreSQL', 'REST API', 'Agent Architecture'],
    github: null,
    live: null,
  },
  {
    name: 'Baangi Bazaar - E-Commerce Platform',
    images: ['/ecommerce/admin.png',
      '/ecommerce/swagger1.png',
      '/ecommerce/swagger2.png',
      '/screenshot.png'
    ],
    desc: 'Built Baangi Bazaar, a full-stack e-commerce platform with JWT authentication and role-based access control (admin vs user). Features product and category management, shopping cart, order processing, product reviews and ratings, admin dashboard, and secure Stripe checkout with payment intents. Built with Django REST Framework backend and React frontend, containerized with Docker and deployed on Render.',
    tech: ['Python', 'Django', 'DRF', 'PostgreSQL', 'React', 'JWT Auth', 'Stripe', 'Docker', 'REST API', 'Render'],
    github: 'https://github.com/TasnimZarin',
    live: null,
  },
  {
    name: 'SeatLock - Movie Reservation System',
    images: [
      '/movie/movies.png',
      '/movie/seats.png',
      '/movie/bookings.png',
      '/movie/login.png',
    ],
    desc: 'Built SeatLock, a full-stack movie reservation system with JWT authentication and role-based access control (admin vs user). Implemented PostgreSQL row-level locking (SELECT FOR UPDATE) to prevent concurrent double-bookings — ensuring two users can never book the same seat simultaneously. Features movie and showtime management, real-time seat availability visualization, and booking cancellation. Containerized with Docker, tested with pytest (15+ tests), and deployed on Render + Vercel.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'JWT Auth', 'Docker', 'pytest', 'SQLAlchemy', 'Alembic', 'Render', 'Vercel'],
    github: 'https://github.com/TasnimZarin/movie-reservation',
    live: 'https://movie-reservation-five.vercel.app',
  },
  {
    name: 'URL Shortener',
    images: [
      '/url/home.png',
      '/url/table.png',
      '/url/result.png',
      '/url/chart.png',
    ],
    desc: 'Built a URL shortening REST API with real-time click analytics, deployed on Railway. Users paste a long URL and receive a unique 6-character short code. Tracks click counts per link with a stats dashboard showing top links sorted by popularity and a Chart.js bar chart visualizing clicks per link. Features input validation, redirect handling, and pagination.',
    tech: ['Python', 'FastAPI', 'PostgreSQL','SQLAlchemy', 'HTML', 'JavaScript', 'Chart.js', 'Railway'],
    github: 'https://github.com/TasnimZarin/URL_Shortener',
    live: null,
  },
  {
    name: 'Network Components Description & Discovery',
    images: [
      '/inc/OverallArchitecture.png',
      '/inc/INCOModelRepresentation.png',
      '/inc/Complexity.png',
      '/inc/Scalability.png',
    ],
    desc: 'An ontology-based architecture for describing and discovering In-Network Computing (INC) components — enabling computation directly within network devices like switches and smart NICs to reduce latency and cloud dependency. Introduces INCO, a semantic model covering functional and non-functional specifications of INC components, paired with a matchmaking algorithm that automatically selects the most relevant components based on user preferences. Validated through simulations for holographic-type communication applications. Published at IEEE CNSM 2024.',
    tech: ['Java', 'Python', 'Web Ontology Language', 'SQWRL', 'SWRL', 'Semantic Service Discovery', 'Microsoft Excel'],
    github: 'https://github.com/TasnimZarin/INC-Components-Description-Discovery',
    live: 'https://ieeexplore.ieee.org/document/10814634',
  },
  {
    name: 'Breast Cancer Detection',
    images: [
      '/breast/dataset.png',
      '/breast/vgg.png',
      '/breast/inception.png',
      '/breast/restnet.png',
    ],
    desc: 'Built a binary image classifier to detect Invasive Ductal Carcinoma (IDC+) vs non-invasive (IDC–) from breast histopathology patches. Used a balanced subset of 4,000 images (2,000 per class) from a 277K+ image Kaggle dataset. Trained and compared three transfer learning models — VGG16, InceptionV3, and ResNet50 — with custom final layers, EarlyStopping (patience=5), and sigmoid activation for binary output. Achieved up to 92% classification accuracy.',
    tech: ['Python', 'TensorFlow/Keras', 'PyTorch', 'VGG16', 'InceptionV3', 'ResNet50', 'Transfer Learning', 'scikit-learn', 'NumPy', 'Matplotlib'],
    github: 'https://github.com/TasnimZarin/BreastCancer',
    live: null,
  },
  {
    name: 'AI Face Mask Detector',
    images: [
      '/facemask/alexvslab7.png',
      '/facemask/confusionmatrix0-3.png',
      '/facemask/confusionmatrix4-7.png',
      '/facemask/confusionmatrix8-9finaltest.png',
    ],
    desc: 'Built a 5-layer CNN in PyTorch to classify face mask types (cloth, N95, N95 with valve, surgical, no mask) across 5 categories. Collected and curated 3,000+ images from multiple datasets, applied augmentation (rotation, flip etc) to balance classes. Implemented 10-fold cross-validation with EarlyStopping to prevent overfitting. Detected and mitigated gender-based bias by gender-balancing the dataset. Improved test accuracy from 48% → 72% through iterative model refinement.',
    tech: ['PyTorch', 'Python', 'scikit-learn', 'Jupyter Notebook', 'Data Augmentation', 'K-Fold Cross Validation', 'Data Preprocessing'],
    github: 'https://github.com/TasnimZarin/AI-Face-Mask-Detector',
    live: null,
  },
  {
    name: 'Remote Robotic Surgery',
    images: [
      '/robot/RobotArchitecture.png',
      '/robot/topo.png',
      '/robot/RobotSequence.png',
      '/robot/Scenario.png',
    ],
    desc: 'A simulated SDN-based remote robotic surgery system built with Mininet and OpenFlow, featuring three communicating modules — a surgeon console, a robot, and a tactile learner. The surgeon console sends commands to the robot and expects feedback within a latency threshold; if delayed, the tactile learner predicts the feedback. The SDN layer enables traffic prioritization across concurrent surgical sessions sharing the same network.',
    tech: ['Python', 'Mininet', 'OpenFlow', 'JavaScript', 'JSON', 'Concurrency','OVSKernelSwitch', 'Socket Programming'],
    github: 'https://github.com/TasnimZarin/SDN-Remote-Robotic-Surgery',
    live: null,
  },
]

function ImageCarousel({ images }) {
  const [current, setCurrent] = useState(0)
  const [expanded, setExpanded] = useState(false)

  const prev = () => setCurrent(i => (i === 0 ? images.length - 1 : i - 1))
  const next = () => setCurrent(i => (i === images.length - 1 ? 0 : i + 1))

  return (
    <>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <img
          src={images[current]}
          alt="project screenshot"
          onClick={() => setExpanded(true)}
          style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', background: '#0f172a', cursor: 'zoom-in' }}
        />
        <div style={{ position: 'absolute', top: '8px', left: '8px', background: 'rgba(0,0,0,0.6)', padding: '3px 8px', fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#8892a4' }}>
          🔍 click to expand
        </div>
        <button
          onClick={e => { e.stopPropagation(); prev() }}
          style={{ position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(139,92,246,0.4)', color: '#8b5cf6', cursor: 'pointer', padding: '8px 10px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s', borderRadius: '4px' }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(139,92,246,0.3)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.6)'}
        >
          <FaChevronLeft size={12} />
        </button>
        <button
          onClick={e => { e.stopPropagation(); next() }}
          style={{ position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(139,92,246,0.4)', color: '#8b5cf6', cursor: 'pointer', padding: '8px 10px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s', borderRadius: '4px' }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(139,92,246,0.3)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.6)'}
        >
          <FaChevronRight size={12} />
        </button>
        <div style={{ position: 'absolute', bottom: '8px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '6px' }}>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{ width: '6px', height: '6px', borderRadius: '50%', background: i === current ? '#8b5cf6' : 'rgba(255,255,255,0.3)', border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.2s' }}
            />
          ))}
        </div>
        <div style={{ position: 'absolute', top: '8px', right: '8px', background: 'rgba(0,0,0,0.6)', padding: '3px 8px', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#8892a4' }}>
          {current + 1} / {images.length}
        </div>
      </div>

      {expanded && (
        <div
          onClick={() => setExpanded(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 999, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'zoom-out' }}
        >
          <button
            onClick={() => setExpanded(false)}
            style={{ position: 'absolute', top: '24px', right: '24px', background: 'none', border: '1px solid rgba(139,92,246,0.4)', color: '#8b5cf6', cursor: 'pointer', padding: '8px 16px', fontFamily: 'JetBrains Mono, monospace', fontSize: '13px' }}
          >
            ✕ Close
          </button>
          <button
            onClick={e => { e.stopPropagation(); prev() }}
            style={{ position: 'absolute', left: '24px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(139,92,246,0.4)', color: '#8b5cf6', cursor: 'pointer', padding: '12px 16px', display: 'flex', alignItems: 'center', borderRadius: '4px' }}
          >
            <FaChevronLeft size={20} />
          </button>
          <img
            src={images[current]}
            alt="project screenshot"
            onClick={e => e.stopPropagation()}
            style={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain', border: '1px solid rgba(139,92,246,0.3)' }}
          />
          <button
            onClick={e => { e.stopPropagation(); next() }}
            style={{ position: 'absolute', right: '24px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(139,92,246,0.4)', color: '#8b5cf6', cursor: 'pointer', padding: '12px 16px', display: 'flex', alignItems: 'center', borderRadius: '4px' }}
          >
            <FaChevronRight size={20} />
          </button>
          <div style={{ position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)', fontFamily: 'JetBrains Mono, monospace', fontSize: '13px', color: '#8892a4' }}>
            {current + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
}

function Projects() {
  return (
    <section id="projects" style={{ padding: '96px 120px', borderTop: '1px solid rgba(255,255,255,0.05)', maxWidth: '1200px', margin: '0 auto' }}>

      <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '32px', letterSpacing: '0.05em', color: '#e6edf3', whiteSpace: 'nowrap' }}>Some Things I've Built</h2>
        <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ borderColor: 'rgba(139,92,246,0.4)' }}
            style={{ display: 'flex', flexDirection: 'column', border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)', overflow: 'hidden', transition: 'all 0.2s' }}
          >
            {/* Top — text */}
            <div style={{ padding: '32px 32px 16px 32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

              {/* Title + icons */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '20px', fontWeight: '600', color: '#e6edf3' }}>
                  {project.name}
                </h3>
                <div style={{ display: 'flex', gap: '12px' }}>
                  {project.github && (
                    <a href={project.github} target="_blank" style={{ color: '#8892a4', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#8b5cf6'}
                      onMouseLeave={e => e.currentTarget.style.color = '#8892a4'}>
                      <SiGithub size={20} />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" style={{ color: '#8892a4', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#8b5cf6'}
                      onMouseLeave={e => e.currentTarget.style.color = '#8892a4'}>
                      <FaExternalLinkAlt size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p style={{ color: '#8892a4', fontSize: '15px', lineHeight: 1.8 }}>
                {project.desc}
              </p>

              {/* Tech */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {project.tech.map((t, i) => (
                  <span key={t} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '13px', color: '#8b5cf6' }}>
                    {t}{i < project.tech.length - 1 ? ' ·' : ''}
                  </span>
                ))}
              </div>

            </div>

            {/* Bottom — carousel */}
            <div style={{ width: '100%', height: '400px' }}>
              <ImageCarousel images={project.images} />
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default Projects