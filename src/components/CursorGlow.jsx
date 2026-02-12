import { useMousePosition } from '../hooks/useMousePosition'
import { motion } from 'framer-motion'

export function CursorGlow() {
  const { x, y } = useMousePosition()

  return (
    <motion.div
      className="cursor-glow fixed pointer-events-none z-0"
      animate={{ left: x, top: y }}
      transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      style={{ width: 600, height: 600, marginLeft: -300, marginTop: -300 }}
      aria-hidden
    />
  )
}
