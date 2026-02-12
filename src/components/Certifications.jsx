import { motion } from 'framer-motion'
import { HiBadgeCheck } from 'react-icons/hi'

const CERTS = [
  { name: 'Python Essentials 1', org: 'Cisco Networking Academy' },
  { name: 'Amazon Aurora MySQL Basics', org: 'AWS Training' },
]

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-display)] mb-12"
        >
          Certifications
        </motion.h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {CERTS.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card rounded-2xl p-6 hover-lift flex items-start gap-4"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                <HiBadgeCheck className="text-xl text-emerald-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">{cert.name}</h3>
                <p className="text-slate-500 text-sm mt-1">{cert.org}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
