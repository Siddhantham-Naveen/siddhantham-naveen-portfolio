import { motion } from 'framer-motion'

const EXPERIENCES = [
  {
    title: 'Web Development Intern',
    org: 'NullClass',
    period: 'Dec 2024 – Feb 2025',
    points: [
      'Built responsive webpages using HTML, CSS, JavaScript',
      'Worked on real-time UI components',
      'Improved debugging skills',
    ],
  },
  {
    title: 'Web Development using Django',
    org: 'APSSDC',
    period: 'May 2025 – July 2025',
    points: [
      'Developed dynamic web pages',
      'Implemented routing and CRUD operations',
    ],
  },
  {
    title: 'AI & Machine Learning Intern',
    org: 'APSCHE SmartBridge',
    period: '2025',
    points: [
      'Learned ML workflows and real-world applications',
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-display)] mb-12"
        >
          Experience
        </motion.h2>
        <div className="relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500/50 via-violet-500/50 to-transparent" />
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.title + exp.org}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-14 pb-12 last:pb-0"
            >
              <div className="absolute left-0 w-10 h-10 rounded-full glass-card border-2 border-indigo-400/50 flex items-center justify-center bg-slate-900/80">
                <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              </div>
              <div className="glass-card rounded-2xl p-6 hover-lift">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                  <span className="text-slate-500">—</span>
                  <span className="text-indigo-300 font-medium">{exp.org}</span>
                </div>
                <p className="text-slate-500 text-sm mb-4">{exp.period}</p>
                <ul className="space-y-1 text-slate-400 text-sm">
                  {exp.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="text-indigo-400">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
