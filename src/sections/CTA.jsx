import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Button from '../components/Button'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="cta" className="relative overflow-hidden py-33 px-6">
      {/* 배경 */}
      <div
        className="absolute inset-0"
        style={{ backgroundImage: 'url(/assets/bg-peeca.webp)', backgroundSize: 'cover', backgroundPosition: 'left center' }}
      />
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        className="relative z-10 max-w-2xl mx-auto flex flex-col items-center text-center gap-10"
      >
        <motion.h2
          variants={item}
          className="text-[2rem] sm:text-[2.5rem] font-semibold leading-[1.6] tracking-tight text-white"
        >
          다음 결제부터
          <span className="text-3xl font-normal block">peeca<br />✦</span>
        </motion.h2>

        <motion.p variants={item} className="pb-4">
        <img src="/assets/card.png" alt="peeca card" className="h-33" />
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap justify-center gap-4">
          <a href="https://play.google.com/store/apps/details?id=kr.arcoa.peeca" target="_blank" rel="noopener noreferrer">
            <img src="/assets/PlayStore.png" alt="Google Play" className="h-11" />
          </a>
          <a href="https://apps.apple.com/us/app/peeca/id6758100118" target="_blank" rel="noopener noreferrer">
            <img src="/assets/AppStore.png" alt="App Store" className="h-11 block" />
          </a>
          <a href="intoss://peeca">
            <img src="/assets/Toss.png" alt="앱인토스 미니앱" className="h-11 block xl:hidden" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
