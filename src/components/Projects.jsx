import { motion } from 'framer-motion'
import { ProjectCard } from './ProjectCard'

const PROJECTS = [
  {
    title: 'Shopmart',
    description: 'Responsive e-commerce interface for browsing products and shopping UI.',
    tech: ['React', 'Tailwind', 'Vercel'],
    github: 'https://github.com/Siddhantham-Naveen/Shopmart',
    live: 'https://shopmart-sigma.vercel.app/',
  },
  {
    title: 'FitFuel Pro',
    description: 'Responsive fitness themed website for fitness and nutrition.',
    tech: ['React', 'Tailwind', 'Vercel'],
    github: 'https://github.com/Siddhantham-Naveen/fitfuel',
    live: 'https://fitfuel-one.vercel.app/',
  },
]

export function Projects() {
  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-display)] mb-12"
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8" style={{ perspective: '1200px' }}>
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
