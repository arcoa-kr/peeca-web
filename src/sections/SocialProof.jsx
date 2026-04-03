import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionWrapper from '../components/SectionWrapper'
import { Star } from 'lucide-react'

const REVIEWS = [
  {
    headline: '그 카드가 제일 손해',
    text: '카드가 5장인데 항상 같은 카드만 썼어요.<br />peeca로 찾아보니 제일 자주 쓰던 카드가 할인율만 높고 혜택이 가장 적다는 것을 알았어요.',
    author: '30대 직장인',
    role: '카드 5장 보유',
  },
  {
    headline: '결제 전 쉬운 검색',
    text: '카드사마다 혜택 정보를 찾아서 일일이 비교하고 계산해야 했는데, peeca는 상황만 고르면 바로 비교되니까 진짜 쉽고 편해요.',
    author: '20대 대학생',
    role: '카드 2장 보유',
  },
  {
    headline: '딱 필요한 것만 가볍게',
    text: '금융 앱인 줄 알고 설치를 망설였어요. <br />그런데 진짜 인증이나 연동도 없고 카드 이름으로 끝이라 정말 가볍고 부담 없어요.',
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
    <SectionWrapper id="reviews" bg="#ffffff" maxWidth="xl" center>
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
              className="flex flex-col justify-between gap-6 rounded-2xl p-7 bg-(--color-bg)"
            >
              {/* 상단: 아이콘 + 별점 */}
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <div
                    className="w-6 h-6 flex items-center justify-center"
                  >
                    <img src="/assets/peeca_icon.png" alt="" className="w-6 h-6" />
                  </div>
                  <span className="flex gap-0.5 text-amber-400 text-lg pb-0.5">
                    <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" strokeWidth={1.5} />
                    ))}
                    </div>
                  </span>
                </div>

                {/* 헤드라인 후기 */}
                <p className="text-xl font-bold text-(--color-text-1) leading-snug pt-6 py-3">
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
