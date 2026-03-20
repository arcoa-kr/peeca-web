import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionWrapper from '../components/SectionWrapper'

const POINTS = [
  { icon: '🧾', text: '카드 앱 들어가서 확인하기엔 계산대 앞이 너무 짧다' },
  { icon: '📋', text: '카드별 혜택을 전부 기억하는 건 현실적으로 불가능하다' },
  { icon: '💳', text: '다른 카드를 왜 만든 건지 모르겠을 때가 있다' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Problem() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <SectionWrapper id="problem" bg="#F3F5F8" maxWidth="lg" center>
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        className="flex flex-col items-center text-center gap-6 w-full"
      >
        <motion.h2
          variants={item}
          className="text-[1.75rem] sm:text-[2.25rem] font-bold leading-[1.3] tracking-tight text-(--color-text-1) max-w-2xl"
        >
          카드가 여러 장인데, 결제할 때마다 같은 카드만 쓰고 있지 않나요?
        </motion.h2>

        <motion.p variants={item} className="text-base sm:text-lg text-(--color-text-2) leading-relaxed max-w-xl">
          어떤 카드가 어디서 얼마나 할인되는지 다 외우고 다니긴 어려우니까요.
          <br className="hidden sm:block" />
          결국 손에 익은 카드만 쓰게 됩니다.
        </motion.p>

        <motion.div variants={item} className="mt-4 w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
          {POINTS.map((point) => (
            <div
              key={point.icon}
              className="flex flex-col items-start gap-4 bg-white rounded-2xl p-6 text-left border border-(--color-line)"
            >
              <span className="text-3xl">{point.icon}</span>
              <p className="text-sm sm:text-base text-(--color-text-1) font-medium leading-snug">
                {point.text}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
