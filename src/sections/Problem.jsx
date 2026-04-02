import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionWrapper from '../components/SectionWrapper'
import { Timer, ListChecks, CreditCard } from 'lucide-react'

const POINTS = [
  {
    icon: ListChecks,
    color: 'bg-(--color-primary)/9',
    iconColor: 'text-(--color-primary)',
    title: '혜택을 다 외울 수 없다',
    text: '모든 카드의 혜택을 기억하는 건 힘들어요.',
  },
  {
    icon: Timer,
    color: 'bg-(--color-primary)/9',
    iconColor: 'text-(--color-primary)',
    title: '계산대 앞은 너무 짧다',
    text: '카드 앱 열고 혜택 찾을 시간이 없어요.',
  },
  {
    icon: CreditCard,
    color: 'bg-(--color-primary)/9',
    iconColor: 'text-(--color-primary)',
    title: '왜 만든 카드인지 모르겠다',
    text: '분명 필요했을 텐데, 연회비만 나가고 있어요.',
  },
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
          <span className="text-xs font-semibold tracking-widest uppercase pl-4.5 pr-4 py-1.5 rounded-full bg-(--color-alt) text-(--color-primary) border border-(--color-primary-light)">
            Problems
          </span>
        <motion.h2
          variants={item}
          className="text-[1.75rem] sm:text-[2.25rem] font-bold leading-[1.3] tracking-tight text-(--color-text-1) max-w-2xl"
        >
          카드가 여러 장인데,<br />같은 카드만 쓰고 있지 않나요?
        </motion.h2>

        <motion.p variants={item} className="text-base sm:text-lg text-(--color-text-1) leading-relaxed max-w-xl">
          어떤 카드가 <b>어디서 얼마나 할인</b>되는지 다 외우긴 어렵죠.
          <br className="hidden sm:block" />
          결국 쓰던 카드만 쓰게 됩니다.
        </motion.p>

        <motion.div variants={item} className="mt-4 w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
          {POINTS.map((point) => {
            const Icon = point.icon
            return (
              <div
                key={point.title}
                className="flex flex-col items-start gap-4 bg-white rounded-2xl p-6 text-left border border-(--color-line)"
              >
                <div className={`w-15 h-15 rounded-full ${point.color} flex items-center justify-center`}>
                  <Icon className={`w-8 h-8 ${point.iconColor}`} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-lg font-semibold text-(--color-text-1)">{point.title}</h3>
                  <p className="text-base text-(--color-text-2) leading-relaxed">
                    {point.text}
                  </p>
                </div>
              </div>
            )
          })}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
