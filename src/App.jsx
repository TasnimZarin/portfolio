import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import AnimatedSection from './components/AnimatedSection'
import BackgroundCode from './components/BackgroundCode'
import LanguagesAndSoftSkills from './components/LanguagesAndSoftSkills'
import Publications from './components/Publications'
import ExtraCurricular from './components/ExtraCurricular'

function App() {
  return (
    <>
      <BackgroundCode />
      <Navbar />
      <Hero />
      <AnimatedSection><About /></AnimatedSection>
      <AnimatedSection><Experience /></AnimatedSection>
      <AnimatedSection><Skills /></AnimatedSection>
      <AnimatedSection><Projects /></AnimatedSection>
      <AnimatedSection><Education /></AnimatedSection>
      <AnimatedSection><Publications /></AnimatedSection>
      <AnimatedSection><LanguagesAndSoftSkills /></AnimatedSection>
      <AnimatedSection><ExtraCurricular /></AnimatedSection>
      <AnimatedSection><Contact /></AnimatedSection>
    </>
  )
}

export default App