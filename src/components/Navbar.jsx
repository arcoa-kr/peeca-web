import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 
        w-fit px-8 py-3 
        bg-white/85 backdrop-blur-xl 
        rounded-full 
        border border-(--color-line)/60 
        shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
    >
      <nav className="flex items-center gap-8">
        <a href="#how-it-works" className="text-sm font-medium text-(--color-text-2) hover:text-(--color-primary) transition-colors">How it works</a>
        <a href="#example" className="text-sm font-medium text-(--color-text-2) hover:text-(--color-primary) transition-colors">Example</a>
        <a href="#faq" className="text-sm font-medium text-(--color-text-2) hover:text-(--color-primary) transition-colors">FAQ</a>
      </nav>
    </motion.header>
  )
}