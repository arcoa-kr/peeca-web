import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionWrapper from '../components/SectionWrapper'

const REVIEWS = [
  {
    text: '카드가 4장인데 항상 같은 카드만 쓰고 있었어요. 확인해보니 그 카드가 제일 손해였더라고요.',
    author: '30대 직장인',
  },
  {
    text: '카드 앱마다 들어가서 혜택 탭 찾는 게 너무 귀찮았는데, 결제 전에 한 번에 볼 수 있어서 편해요.',
    author: '20대 대학원생',
  },
  {
    text: '금융 앱인 줄 알고 설치하기 싫었는데, 막상 써보니까 진짜 가볍고 딱 필요한 것만 있어요.',
    author: '30대 프리랜서',
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
        <div className="flex flex-col items-center gap-4">
          <motion.span
            variants={item}
            className="text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-(--color-line) text-(--color-primary)"
          >
            Reviews
          </motion.span>
          <motion.h2
            variants={item}
            className="text-[1.75rem] sm:text-[2.25rem] font-bold tracking-tight text-(--color-text-1)"
          >
            써본 사람들의 이야기
          </motion.h2>
        </div>

        {/* 후기 카드 */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-5">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={i}
              variants={item}
              className="flex flex-col justify-between gap-6 bg-(--color-bg) rounded-2xl p-6 border border-(--color-line)"
            >
              {/* 별점 */}
              <div className="flex flex-col gap-4">
                <span className="flex gap-0.5 text-yellow-400 text-base">{'★★★★★'}</span>
                <p className="text-sm sm:text-base text-(--color-text-1) leading-relaxed">
                  "{review.text}"
                </p>
              </div>

              {/* 작성자 */}
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #553FF3, #AA9FF9)' }}
                />
                <span className="text-sm font-medium text-(--color-text-2)">{review.author}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
