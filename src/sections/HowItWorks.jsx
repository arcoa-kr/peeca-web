import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionWrapper from '../components/SectionWrapper'
import PhoneMockup from '../components/PhoneMockup'

const STEPS = [
  {
    number: '①',
    title: '상황을 고르세요',
    desc: '카페, 배달, 쇼핑, 주유 등 결제 상황을 선택해요.',
    src: '/assets/mockup/HOME-category.png',
    alt: '카테고리 선택 화면',
  },
  {
    number: '②',
    title: '금액을 입력하세요',
    desc: '얼마를 쓸지 입력하면 돼요.',
    src: '/assets/mockup/HOME-amount.png',
    alt: '금액 입력 화면',
  },
  {
    number: '③',
    title: '바로 확인하세요',
    desc: '내 카드 중, 가장 유리한 카드 TOP3를 보여줘요.',
    src: '/assets/mockup/Result.png',
    alt: '추천 결과 화면',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <SectionWrapper id="how-it-works" bg="#ffffff" maxWidth="xl" center>
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        className="flex flex-col items-center gap-14 w-full"
      >
        {/* 상단 텍스트 */}
        <div className="flex flex-col items-center gap-6">
          <motion.span
            variants={item}
            className="text-xs font-semibold tracking-widest uppercase pl-3.5 pr-3 py-1 rounded-full text-(--color-primary) border-1 border-(--color-primary)">
            How it works
          </motion.span>

          <motion.h2
            variants={item}
            className="text-[1.75rem] sm:text-[2.25rem] font-bold leading-[1.25] tracking-tight text-(--color-text-1)"
          >
            쓰는 법은 간단해요
          </motion.h2>

          <motion.p variants={item} className="text-base sm:text-lg text-(--color-text-2) leading-relaxed">
            결제 상황만 알려주면 ─ peeca가 계산해요.
          </motion.p>
        </div>

        {/* 3단계 카드 */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {STEPS.map((step) => (
            <motion.div
              key={step.number}
              variants={item}
              className="flex flex-col items-center gap-6"
            >
              {/* 스텝 넘버 */}
              <div className="flex items-center gap-2">
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ background: '#553FF3' }}
                >
                  {step.number}
                </span>
                <span className="text-base font-bold text-(--color-text-1)">{step.title}</span>
              </div>

              {/* 폰 목업 */}
              <PhoneMockup src={step.src} alt={step.alt} width="sm" />

              {/* 설명 */}
              <p className="text-sm text-(--color-text-2) leading-relaxed text-center max-w-[200px]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
