import { motion } from 'framer-motion'
import { HiLocationMarker, HiMail, HiAcademicCap, HiStatusOnline } from 'react-icons/hi'

const INFO = [
  { icon: HiLocationMarker, label: 'Location', value: 'Pithapuram, Andhra Pradesh, India' },
  { icon: HiMail, label: 'Email', value: 'snaveen6281@gmail.com', href: 'mailto:snaveen6281@gmail.com' },
  { icon: HiAcademicCap, label: 'Graduation', value: '2026' },
  { icon: HiStatusOnline, label: 'Status', value: 'Open to opportunities' },
]

export function About() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-display)] mb-4"
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 text-slate-400 leading-relaxed"
          >
            <p>
              I am a final-year B.Tech student in Computer Science (AI & ML) at Aditya College of Engineering and Technology, graduating in 2026. I build complete web applications using Django, React, and MySQL and integrate REST APIs with modern user interfaces.
            </p>
            <p>
              I am passionate about scalable web solutions and clean code. I am currently seeking an entry-level software development opportunity where I can contribute and grow.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {INFO.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card rounded-xl p-4 hover-lift"
              >
                <item.icon className="text-indigo-400 text-xl mb-2" />
                <p className="text-slate-500 text-sm font-medium">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-white font-medium hover:text-indigo-300 transition-colors break-all">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-white font-medium">{item.value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
