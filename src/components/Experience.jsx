import { motion } from 'framer-motion'

const experiences = [
  /*
  {
    period: 'Jan 2026 — Present',
    role: 'Software Engineer',
    company: 'Orion Informatics Ltd.',
    location: 'Dhaka, Bangladesh',
    bullets: [
      'Built BudgetGPT, an AI-powered Q&A system using RAG, Python, and Weaviate vector database enabling natural language queries over Bangladesh\'s national budget data',
      'Developed a Smart Compliance Engine using LLMs and document intelligence pipelines to automate regulatory compliance analysis across US federal, state, and county frameworks',
      'Contributed to Techvision ERP, a multi-tenant enterprise system for Bangladesh\'s national power sector built on .NET 7 and ASP.NET Core Web API with 60+ REST endpoints',
      'Worked on FrameworkQ.Workflow, a JSON-configurable custom workflow engine distributed as a NuGet package supporting multi-step approval processes',
      'Integrated Microsoft Dynamics NAV using OData v4 and SOAP protocols for real-time synchronization of employee, inventory, and financial data',
    ],
    tags: ['Python', 'C#', '.NET 7', 'RAG', 'LLMs', 'Weaviate', 'ASP.NET Core', 'SQL Server'],
  },
  {
    period: 'Sept 2025 — Dec 2025',
    role: 'Software Engineer Intern',
    company: 'Orion Informatics Ltd.',
    location: 'Dhaka, Bangladesh',
    companyUrl: null,
    bullets: [
      'Assisted in building RAG-based document intelligence pipelines using Python and Weaviate vector database',
      'Supported backend development for enterprise ERP modules using .NET 7 and ASP.NET Core',
      'Contributed to test case development and benchmark dataset creation for AI system evaluation',
      'Gained hands-on experience with LLM integration, document chunking, and knowledge base construction',
    ],
    tags: ['Python', 'C#', '.NET 7', 'RAG', 'Weaviate'],
  },
  */
 {
  period: 'Jan 2026 — Present',
  role: 'Full-Stack Developer',
  company: 'Baangi Bazaar — Online Fashion Store',
  companyUrl: null,
  location: 'Remote',
  bullets: [
    'Developed a full-stack e-commerce platform for an online retail business using Django REST Framework and React, with JWT authentication and role-based access control (admin vs user)',
    'Integrated Stripe payment intents for secure checkout; built product and category management, shopping cart, order processing, and an admin dashboard for inventory control',
    'Implemented a product reviews and ratings system with user-specific permissions, managed with Django ORM and PostgreSQL',
    'Containerized the application with Docker and deployed on Render with a PostgreSQL database',
  ],
  tags: ['Python', 'Django', 'DRF', 'React', 'PostgreSQL', 'JWT', 'Stripe', 'Docker', 'Render', 'REST API'],
},
 {
  period: 'Sep 2021 — Jun 2025',
  role: 'Research Assistant',
  company: 'TSE Research Lab — Concordia University',
  companyUrl: 'https://users.encs.concordia.ca/~tse/',
  location: 'Montreal, Canada',
  bullets: [
  'Member of the Telecommunication Service Engineering (TSE) Research Lab — collaborated with faculty, postdocs, and graduate students on multiple advanced ML and networking projects',
  'Designed and implemented an ontology-driven model that translated user requirements into precise semantic queries — applying knowledge representation techniques aligned with modern LLM and RAG-based AI systems',
  'Built automated scripts using Bash, following agile development practices to streamline research workflows and accelerate experimentation',
  'Studied existing ML mechanisms for efficient network component discovery — compared current ML/AI strategies with semantic approaches and evaluated semantic matchmaking methods with focus on accuracy, scalability, and real-world context-aware deployment',
  'Co-authored peer-reviewed IEEE publications on latency reduction and high bandwidth in holographic communication using In-Network Computing',
  'Collaborated with researchers from UQAM and Zayed University on cross-institutional projects — analyzing INC-based frameworks against traditional VNF and MANO technologies within 5G/6G architectures',
],
  tags: ['Machine Learning', 'Semantic Web', 'Cloud Computing', 'IEEE Published', '5G/6G', 'Bash','Python', 'Java'],
},
  {
  period: 'Sep 2019 — Dec 2019',
  role: 'Teaching Assistant',
  company: 'BRAC University',
  companyUrl: null,
  location: 'Dhaka, Bangladesh',
  bullets: [
    'Delivered and supervised lab sessions for undergraduate programming courses in Python and Java — demonstrating strong coding fundamentals and ability to explain complex concepts clearly',
    'Assisted 200+ students through hands-on debugging support, code reviews, and academic guidance — reinforcing best practices in software development and problem solving',
    'Automated grade calculations and attendance tracking using Python scripts and Excel macros — reducing manual workload and increasing reporting efficiency',
    'Maintained and analyzed detailed student performance records using Microsoft Excel with pivot tables and conditional formatting to identify learning gaps and support data-driven grading decisions',
    'Collaborated with faculty to design quizzes, assignments, and lecture materials aligned with course outcomes — contributing to curriculum development across multiple programming languages',
    'Provided personalized academic support by analyzing performance trends to recommend targeted study plans, helping struggling students improve their outcomes',
  ],
  tags: ['Python', 'Java', 'Excel', 'Automation', 'Teaching', 'Debugging', 'Code Review'],
},
]

function Experience() {
  return (
    <section id="experience" style={{ padding: '96px 120px', borderTop: '1px solid rgba(255,255,255,0.05)', maxWidth: '1200px', margin: '0 auto' }}>

      <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '32px', letterSpacing: '0.05em', color: '#e6edf3', whiteSpace: 'nowrap' }}>Where I've Worked</h2>
        <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.role + exp.period}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ backgroundColor: 'rgba(139,92,246,0.03)' }}
            style={{ display: 'flex', gap: '32px', padding: '24px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', transition: 'all 0.2s', cursor: 'default' }}
          >

            {/* Year — left */}
            <div style={{ flexShrink: 0, width: '140px', paddingTop: '4px' }}>
              <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '13px', color: '#8892a4', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                {exp.period}
              </p>
            </div>

            {/* Details — right */}
            <div style={{ flex: 1 }}>
              <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '18px', fontWeight: '600', color: '#e6edf3', marginBottom: '4px' }}>
                {exp.role}
                {' · '}
                <span style={{ color: '#8b5cf6' }}>{exp.company}</span>
              </h3>

              <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: '#8892a4', letterSpacing: '0.08em', marginBottom: '12px' }}>
                {exp.location}
              </p>

              <ul style={{ marginBottom: '16px', display: 'flex', flexDirection: 'column', gap: '8px', listStyle: 'none', padding: 0 }}>
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} style={{ display: 'flex', gap: '12px', color: '#8892a4', fontSize: '15px', lineHeight: 1.7, maxWidth: '600px' }}>
                      <span style={{ color: '#8b5cf6', marginTop: '2px', flexShrink: 0 }}>▶</span>
                      {bullet}
                    </li>
                  ))}
                </ul>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {exp.tags.map(tag => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '12px',
                      padding: '4px 12px',
                      background: 'rgba(139,92,246,0.1)',
                      border: '1px solid rgba(139,92,246,0.2)',
                      color: '#8b5cf6',
                      borderRadius: '999px'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default Experience