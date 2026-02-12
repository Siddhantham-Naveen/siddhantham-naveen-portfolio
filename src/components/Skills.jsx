import { motion } from 'framer-motion'

const CATEGORIES = [
  { title: 'Languages', skills: ['Python', 'JavaScript'] },
  { title: 'Frontend', skills: ['HTML5', 'CSS3', 'React.js', 'Tailwind CSS', 'Bootstrap'] },
  { title: 'Backend', skills: ['Django', 'REST APIs'] },
  { title: 'Database', skills: ['MySQL', 'MongoDB'] },
  { title: 'Tools', skills: ['Git', 'GitHub', 'VS Code'] },
  { title: 'Other', skills: ['AWS Basics', 'Machine Learning Fundamentals'] },
]

function SkillChip({ name, i }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.03 }}
      whileHover={{ scale: 1.05 }}
      className="inline-block px-4 py-2 rounded-full glass-card border border-white/10 text-slate-300 text-sm font-medium hover:border-indigo-400/40 hover:text-white cursor-default transition-colors"
    >
      {name}
    </motion.span>
  )
}

export function Skills() {
  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-display)] mb-12"
        >
          Skills
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat, catIndex) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.08 }}
              className="glass-card rounded-2xl p-6 hover-lift"
            >
              <h3 className="text-lg font-semibold text-indigo-300 mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <SkillChip key={skill} name={skill} i={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
