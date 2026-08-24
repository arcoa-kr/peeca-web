import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionWrapper from '../components/SectionWrapper'
import { Star } from 'lucide-react'

const REVIEWS = [
  {
    headline: '다른 카드가 더 할인',
    text: '카드가 5장인데 늘 쓰던 카드만 썼어요.<br />peeca로 찾아보니, 자주 쓴 카드가 할인율만 높고 한도가 가장 작은 것을 알았어요.',
    author: '30대 직장인',
    role: '카드 5장 보유',
  },
  {
    headline: '결제 전 쉬운 검색',
    text: '카드사마다 일일이 찾아보고 계산해야 했는데, peeca는 쓸 곳과 금액만 넣으면 바로 비교되어서 진짜 편하고 쉬워요.',
    author: '20대 대학생',
    role: '카드 2장 보유',
  },
  {
    headline: '딱 필요한 것만 가볍게',
    text: '금융 앱인 줄 알고 설치를 망설였어요. <br />그런데 인증, 연동도 전혀 없고 카드 이름만 쓰니까 정말 가볍고 부담 없어요.',
    author: '30대 프리랜서',
    role: '카드 3장 보유',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function SocialProof() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <SectionWrapper id="reviews" bg="#E2E6EC" maxWidth="xl" center>
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        className="flex flex-col items-center gap-12 w-full"
      >
        {/* 헤드라인 */}
        <div className="flex flex-col items-center gap-6">
          <motion.span
            variants={item}
            className="text-xs font-semibold tracking-widest uppercase pl-3.5 pr-3 py-1 rounded-full text-(--color-primary) border-1 border-(--color-primary)">
            Reviews
          </motion.span>
          <motion.h2
            variants={item}
            className="text-[1.75rem] sm:text-[2.25rem] font-bold tracking-tight text-(--color-text-1)"
          >
            이렇게 도움이 되었어요
          </motion.h2>
        </div>

        {/* 후기 카드 */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-5">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={i}
              variants={item}
              className="flex flex-col justify-between gap-6 rounded-3xl p-7 bg-white"
            >
              {/* 상단: 아이콘 + 별점 */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div
                    className="w-6 h-6 flex items-center justify-center"
                  >
                    <img src="/assets/peeca_icon.png" alt="peeca logo" className="w-6 h-6" />
                  </div>
                  <span className="flex text-amber-400 text-lg pb-0.5">
                    <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4.5 h-4.5 text-amber-400 fill-amber-400" strokeWidth={1.5} />
                    ))}
                    </div>
                  </span>
                </div>

                {/* 헤드라인 후기 */}
                <p className="text-xl font-bold text-(--color-text-1) leading-snug pt-5 py-3">
                  {review.headline}
                </p>

                {/* 상세 설명 */}
                <p 
                  className="text-base text-(--color-text-2) leading-relaxed pb-5"
                  dangerouslySetInnerHTML={{ __html: review.text }}
                />
              </div>

              {/* 하단
              <div className="flex flex-col gap-0.5 text-left px-1 pt-1.5">
                <span className="text-base font-semibold text-(--color-text-1)">{review.author}</span>
                <span className="text-sm text-(--color-text-3)">{review.role}</span>
              </div>
              */}
            </motion.div>
          ))}
        </div>

      </motion.div>
    </SectionWrapper>
  )
}
