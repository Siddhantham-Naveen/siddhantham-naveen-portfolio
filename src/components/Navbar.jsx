import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX, HiMoon, HiSun } from 'react-icons/hi'
import { useScrollPosition } from '../hooks/useScrollPosition'
import { useActiveSection } from '../hooks/useActiveSection'
import { useTheme } from '../context/ThemeContext'

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { scrollY } = useScrollPosition()
  const activeId = useActiveSection()
  const { isDark, toggleTheme } = useTheme()
  const scrolled = scrollY > 40

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        scrolled ? 'glass-card border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-18">
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }} className="text-lg font-semibold text-white font-[family-name:var(--font-display)]">
          Naveen
        </a>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-1">
          {LINKS.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeId === id
                    ? 'text-indigo-300 bg-white/10'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg glass-card border border-white/10 hover:border-indigo-400/40 text-slate-300 hover:text-white transition-colors"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <HiSun className="text-xl" /> : <HiMoon className="text-xl" />}
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden p-2 rounded-lg glass-card border border-white/10 text-white"
            aria-label="Toggle menu"
          >
            {open ? <HiX className="text-xl" /> : <HiMenu className="text-xl" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card border-t border-white/10 overflow-hidden"
          >
            <ul className="px-4 py-4 flex flex-col gap-1">
              {LINKS.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium ${
                      activeId === id ? 'text-indigo-300 bg-white/10' : 'text-slate-300'
                    }`}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
