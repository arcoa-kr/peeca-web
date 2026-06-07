import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Button from '../components/Button'
import { STORE_LINKS, trackStore } from '../components/gaUtils'

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
          <a href={STORE_LINKS.apple} target="_blank" rel="noopener noreferrer" onClick={() => trackStore('apple', 'cta')}>
            <img src="/assets/AppStore.png" alt="App Store" className="h-11 block" />
          </a>
          <a href={STORE_LINKS.google} target="_blank" rel="noopener noreferrer" onClick={() => trackStore('google', 'cta')}>
            <img src="/assets/PlayStore.png" alt="Google Play" className="h-11" />
          </a>
          <a href={STORE_LINKS.toss} target="_blank" rel="noopener noreferrer" onClick={() => trackStore('toss', 'cta')}>
            <img src="/assets/Toss.png" alt="앱인토스 미니앱" className="h-11 block lg:hidden" />
          </a>
          <div className="flex items-center justify-center mt-2.5 w-full text-(--color-line) text-base hidden lg:flex">
            <img src="/assets/toss_w.png" alt="toss" className="h-4.5" />
            <p className="ml-1"><b>미니앱</b>은 모바일에서 만나보세요.</p>
          </div>
        </motion.div>

      </motion.div>
    </section>
  )
}