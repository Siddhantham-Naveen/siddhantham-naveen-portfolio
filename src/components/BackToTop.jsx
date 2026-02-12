import { useScrollPosition } from '../hooks/useScrollPosition'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowUp } from 'react-icons/hi'

export function BackToTop() {
  const { scrollY } = useScrollPosition()
  const show = scrollY > 600

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[9998] w-12 h-12 rounded-full glass-card border border-white/20 flex items-center justify-center hover-lift text-white hover:border-indigo-400/50 focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
          aria-label="Back to top"
        >
          <HiArrowUp className="text-xl" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
