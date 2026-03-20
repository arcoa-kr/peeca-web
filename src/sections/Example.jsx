import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import PhoneMockup from '../components/PhoneMockup'

const CASES = [
  {
    id: 'cafe',
    label: '☕ 카페',
    question: '아메리카노 4,500원, 어떤 카드를 쓸까?',
    results: [
      { rank: '1위', star: true,  card: 'A카드', type: '할인',    amount: '450원',   active: true },
      { rank: '2위', star: false, card: 'B카드', type: '캐시백',  amount: '225원',   active: true },
      { rank: '3위', star: false, card: 'C카드', type: '포인트',  amount: '45원',    active: true },
    ],
  },
  {
    id: 'delivery',
    label: '🛵 배달',
    question: '치킨 26,000원, 어떤 카드로 쓸까?',
    results: [
      { rank: '1위', star: true,  card: 'B카드', type: '할인',    amount: '1,400원', active: true },
      { rank: '2위', star: false, card: 'A카드', type: '캐시백',  amount: '280원',   active: true },
      { rank: '—',   star: false, card: 'C카드', type: '혜택 없음', amount: '—',    active: false },
    ],
  },
  {
    id: 'shopping',
    label: '🛍 온라인 쇼핑',
    question: '온라인 쇼핑 89,000원, 어떤 카드로 쓸까?',
    results: [
      { rank: '1위', star: true,  card: 'B카드', type: '즉시할인', amount: '2,670원', active: true },
      { rank: '2위', star: false, card: 'C카드', type: '캐시백',   amount: '1,780원', active: true },
      { rank: '3위', star: false, card: 'A카드', type: '포인트',   amount: '890원',   active: true },
    ],
  },
]

function ResultCard({ result, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: index * 0.07 }}
      className={`flex items-center justify-between px-4 py-3.5 rounded-2xl ${
        result.star
          ? 'bg-(--color-primary) text-white shadow-md'
          : result.active
          ? 'bg-white border border-(--color-line)'
          : 'bg-(--color-f3) opacity-50'
      }`}
    >
      <div className="flex items-center gap-3">
        <span className={`text-sm font-bold w-8 ${result.star ? 'text-white' : 'text-(--color-text-3)'}`}>
          {result.star ? '★' : result.rank}
        </span>
        <div>
          <p className={`text-sm font-bold ${result.star ? 'text-white' : 'text-(--color-text-1)'}`}>
            {result.card}
          </p>
          <p className={`text-xs ${result.star ? 'text-white/80' : 'text-(--color-text-3)'}`}>
            {result.type}
          </p>
        </div>
      </div>
      <span className={`text-sm font-bold ${result.star ? 'text-(--color-mint)' : result.active ? 'text-(--color-error)' : 'text-(--color-text-3)'}`}>
        {result.active && result.amount !== '—' ? `- ${result.amount}` : result.amount}
      </span>
    </motion.div>
  )
}

export default function Example() {
  const [active, setActive] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const current = CASES[active]

  return (
    <SectionWrapper id="example" bg="#F3F5F8" maxWidth="xl" center>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-10 w-full"
      >
        {/* 헤드라인 */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-(--color-line) text-(--color-primary)">
            Example
          </span>
          <h2 className="text-[1.75rem] sm:text-[2.25rem] font-bold tracking-tight text-(--color-text-1)">
            이런 순간에 씁니다
          </h2>
        </div>

        {/* 탭 */}
        <div className="flex gap-2 bg-white p-1.5 rounded-2xl border border-(--color-line)">
          {CASES.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                active === i
                  ? 'bg-(--color-primary) text-white shadow-sm'
                  : 'text-(--color-text-2) hover:text-(--color-text-1)'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* 콘텐츠: 폰 + 결과 카드 */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* 좌: 폰 목업 */}
          <div className="flex justify-center">
            <PhoneMockup src="/assets/mockup/Result.png" alt="추천 결과 화면" width="md" glow />
          </div>

          {/* 우: 시나리오 + 결과 */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-4"
            >
              {/* 질문 버블 */}
              <div className="bg-white rounded-2xl px-5 py-4 border border-(--color-line) shadow-sm">
                <p className="text-sm text-(--color-text-3) mb-1">결제 상황</p>
                <p className="text-base font-bold text-(--color-text-1)">{current.question}</p>
              </div>

              {/* 결과 리스트 */}
              <div className="flex flex-col gap-2.5">
                {current.results.map((r, i) => (
                  <ResultCard key={r.card} result={r} index={i} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
