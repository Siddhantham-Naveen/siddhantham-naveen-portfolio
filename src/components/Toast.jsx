import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiCheckCircle } from 'react-icons/hi'

export function Toast({ message, visible, onClose }) {
  useEffect(() => {
    if (!visible) return
    const t = setTimeout(onClose, 3500)
    return () => clearTimeout(t)
  }, [visible, onClose])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[10000] flex items-center gap-2 px-4 py-3 rounded-xl glass-card border border-emerald-500/30 text-emerald-200 shadow-lg"
        >
          <HiCheckCircle className="text-2xl text-emerald-400 shrink-0" />
          <span className="font-medium">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
