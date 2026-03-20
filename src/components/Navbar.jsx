import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-(--color-line)"
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="text-lg font-bold text-(--color-primary)">peeca ✦</span>
        <a
          href="#cta"
          className="text-sm font-semibold bg-(--color-primary) text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
        >
          앱 다운로드
        </a>
      </div>
    </motion.header>
  )
}
