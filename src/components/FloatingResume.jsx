import { motion } from 'framer-motion'
import { HiDownload } from 'react-icons/hi'
import { RESUME_URL } from '../config'

export function FloatingResume() {
  return (
    <motion.a
      href={RESUME_URL}
      download
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-[9997] hidden lg:flex items-center gap-2 px-4 py-3 rounded-full glass-card border border-white/20 hover-lift text-sm font-medium text-white no-underline"
    >
      <HiDownload className="text-lg" />
      <span>Resume</span>
    </motion.a>
  )
}
