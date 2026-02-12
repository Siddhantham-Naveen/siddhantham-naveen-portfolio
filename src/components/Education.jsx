import { motion } from 'framer-motion'
import { HiAcademicCap } from 'react-icons/hi'

export function Education() {
  return (
    <section id="education" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-display)] mb-12"
        >
          Education
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 hover-lift flex gap-6"
        >
          <div className="shrink-0 w-14 h-14 rounded-xl bg-indigo-500/20 flex items-center justify-center">
            <HiAcademicCap className="text-2xl text-indigo-400" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">
              B.Tech Computer Science (AI & ML)
            </h3>
            <p className="text-indigo-300 font-medium mb-2">
              Aditya College of Engineering and Technology
            </p>
            <div className="flex flex-wrap gap-4 text-slate-400 text-sm">
              <span>Graduation: 2026</span>
              <span>CGPA: 7.38</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
