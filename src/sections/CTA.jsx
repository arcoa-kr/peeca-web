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
    <section id="cta" className="relative overflow-hidden py-28 px-6">
      {/* 배경 */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, #3a28d4 0%, #553FF3 50%, #7c6af5 100%)' }}
      />
      {/* 블롭 */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-30"
        style={{ background: 'radial-gradient(circle, #B1FFF3 0%, transparent 70%)', filter: 'blur(60px)' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -left-16 w-72 h-72 rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #AA9FF9 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        className="relative z-10 max-w-2xl mx-auto flex flex-col items-center text-center gap-7"
      >
        <motion.h2
          variants={item}
          className="text-[2rem] sm:text-[2.75rem] font-bold leading-[1.2] tracking-tight text-white"
        >
          다음 결제부터, peeca ✦
        </motion.h2>

        <motion.p variants={item} className="text-base sm:text-lg text-white/70">
          무료 · 복잡한 연동 없음 · 바로 확인
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap justify-center gap-3">
          <a href="https://play.google.com/store/apps/details?id=kr.arcoa.peeca" target="_blank">
            <img src="/assets/PlayStore.png" alt="Google Play" className="h-11" />
          </a>
          <a href="https://apps.apple.com/us/app/peeca/id6758100118" target="_blank">
            <img src="/assets/AppStore.png" alt="App Store" className="h-11" />
          </a>
          {/*
          <a href="#">
            <img src="/assets/Toss.png" alt="토스 미니앱" className="h-11" />
          </a>
          */}
        </motion.div>
      </motion.div>
    </section>
  )
}
