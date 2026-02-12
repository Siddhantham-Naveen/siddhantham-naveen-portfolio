import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="relative py-8 px-4 border-t border-white/10">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-slate-500 text-sm"
      >
        © 2026 Siddhantham Naveen — Built with React & Tailwind
      </motion.p>
    </footer>
  )
}
