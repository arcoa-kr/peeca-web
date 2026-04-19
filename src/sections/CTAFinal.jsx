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

export default function CTAFinal() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative overflow-hidden py-33 px-6 bg-white">
      {/* 배경 블롭 */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, #EEECFF 0%, transparent 65%)',
          filter: 'blur(40px)',
          opacity: 0.8,
        }}
      />

      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        className="relative z-10 max-w-2xl mx-auto flex flex-col items-center text-center gap-8"
      >
        <motion.h2
          variants={item}
          className="text-[2rem] sm:text-[2.75rem] font-bold leading-[1.2] tracking-tight text-(--color-text-1)"
        >
          지금 결제할 카드 검색
          <br />
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: 'linear-gradient(135deg, #553FF3 0%, #AA9FF9 100%)' }}
          >
            peeca
          </span>
        </motion.h2>

        <motion.div variants={item} className="flex flex-wrap justify-center gap-3">
         <a href="https://play.google.com/store/apps/details?id=kr.arcoa.peeca" target="_blank">
            <img src="/assets/PlayStore.png" alt="Google Play" className="h-10" />
          </a>
          <a href="https://apps.apple.com/us/app/peeca/id6758100118" target="_blank">
            <img src="/assets/AppStore.png" alt="App Store" className="h-10" />
          </a>
          {/*
          <a href="https://minion.toss.im/JSMQF2K7">
            <img src="/assets/Toss.png" alt="토스 미니앱" className="h-10" />
          </a>
          */}
        </motion.div>
      </motion.div>
    </section>
  )
}
