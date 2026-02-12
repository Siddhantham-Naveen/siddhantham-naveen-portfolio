import { ThemeProvider } from './context/ThemeContext'
import { Navbar } from './components/Navbar'
import { ScrollProgress } from './components/ScrollProgress'
import { CursorGlow } from './components/CursorGlow'
import { BackToTop } from './components/BackToTop'
import { FloatingResume } from './components/FloatingResume'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Education } from './components/Education'
import { Certifications } from './components/Certifications'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen">
        <CursorGlow />
        <ScrollProgress />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Certifications />
          <Contact />
          <Footer />
        </main>
        <FloatingResume />
        <BackToTop />
      </div>
    </ThemeProvider>
  )
}

export default App
