import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { HiCode, HiExternalLink } from 'react-icons/hi'

export function ProjectCard({ title, description, tech, github, live }) {
  const cardRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const spring = { type: 'spring', stiffness: 300, damping: 30 }
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), spring)
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), spring)
  const [hover, setHover] = useState(false)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const relX = (e.clientX - centerX) / rect.width
    const relY = (e.clientY - centerY) / rect.height
    x.set(relX)
    y.set(relY)
    setHover(true)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setHover(false)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      className="glass-card rounded-2xl p-6 hover-lift border-white/10"
    >
      <div style={{ transform: 'translateZ(20px)' }}>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-slate-400 text-sm mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-lg bg-white/5 text-slate-400 text-xs font-medium border border-white/10"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg glass-card border border-white/20 text-slate-300 hover:text-white hover:border-indigo-400/40 transition-colors text-sm"
          >
            <HiCode />
            GitHub
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500/80 to-violet-500/80 text-white hover:from-indigo-500 hover:to-violet-500 transition-all text-sm font-medium"
          >
            <HiExternalLink />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  )
}
