import { motion } from 'framer-motion'
import { HiArrowRight, HiDownload } from 'react-icons/hi'
import { RESUME_URL, PROFILE_IMAGE } from '../config'

export function Hero() {
  const scrollToProjects = () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-indigo-300 font-medium mb-2"
          >
            Hi, I'm
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-[family-name:var(--font-display)] leading-tight mb-3"
          >
            Siddhantham Naveen
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl gradient-text font-semibold mb-4"
          >
            Python Full-Stack Developer
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-400 text-lg max-w-xl mb-8 leading-relaxed"
          >
            Python Full-Stack Developer focused on scalable web solutions. Final-year B.Tech student in Computer Science (AI & ML) at Aditya College of Engineering and Technology, graduating in 2026. I build complete web applications using Django, React, and MySQL and integrate REST APIs with modern user interfaces. Currently seeking an entry-level software development opportunity.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={scrollToProjects}
              className="group relative px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold overflow-hidden hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-violet-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <a
              href={RESUME_URL}
              download
              className="group flex items-center gap-2 px-6 py-3 rounded-xl glass-card border border-white/20 text-white font-semibold hover-lift"
            >
              <HiDownload className="text-lg" />
              Download Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative z-10 flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl glass-card border-2 border-white/20 hover-lift p-1 overflow-hidden">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/30 to-violet-500/30 blur-xl animate-pulse" />
            <div className="relative w-full h-full rounded-[22px] bg-slate-800/80 flex items-center justify-center overflow-hidden">
              {PROFILE_IMAGE ? (
                <img src={PROFILE_IMAGE} alt="Siddhantham Naveen" className="w-full h-full object-cover" />
              ) : (
                <span className="text-slate-500 text-6xl font-bold">SN</span>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
