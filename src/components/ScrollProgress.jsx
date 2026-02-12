import { useScrollPosition } from '../hooks/useScrollPosition'
import { motion } from 'framer-motion'

export function ScrollProgress() {
  const { scrollProgress } = useScrollPosition()

  return (
    <motion.div
      className="scroll-progress"
      style={{ width: `${scrollProgress}%` }}
      initial={false}
      transition={{ type: 'spring', stiffness: 100, damping: 30 }}
    />
  )
}
