import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'

const FAQS = [
  {
    q: '신규 카드를 추천하는 앱인가요?',
    a: '아니요.\npeeca는 보유 카드의 혜택 정보를 찾는 앱이에요.\n지금 가장 유리한 내 카드를 찾아드려요.',
  },
  {
    q: '회원가입이 필요한가요?',
    a: '앱인토스 미니앱의 peeca는 회원가입 없이 바로 사용할 수 있어요.\n앱스토어와 플레이스토어의 peeca는 애플 또는 구글 로그인이 필요해요.',
  },
  {
    q: '무료인가요?',
    a: '네, 기본 기능은 무료입니다.\n카드 슬롯 확장, 광고 제거와 같은 편의 기능은 유료로 제공될 예정이예요.',
  },
  {
    q: '카드사 연동이 필요한가요?',
    a: '아니요.\n카드 이름만 넣으면 바로 사용할 수 있어요.',
  },
  {
    q: '카드가 1장만 있어도 돼요?',
    a: '보유 카드가 1장만 있어도 이용할 수 있어요.\n필요한 카드를 쉽게 추가해서 비교할 수도 있어요.',
  },
]

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-(--color-line) last:border-none">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-lg font-medium text-(--color-text-1)">{faq.q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-(--color-primary) text-2xl leading-none"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-base text-(--color-text-2) leading-relaxed whitespace-pre-line">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <SectionWrapper id="faq" bg="#F3F5F8" maxWidth="md" center>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-10 w-full"
      >
        {/* 헤드라인 */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-xs font-semibold tracking-widest uppercase pl-4.5 pr-4 py-1.5 rounded-full text-(--color-primary) border-1 border-(--color-primary)">
            FAQ
          </span>
          <h2 className="text-[1.75rem] sm:text-[2.25rem] font-bold tracking-tight text-(--color-text-1)">
            자주 묻는 질문
          </h2>
        </div>

        {/* 아코디언 */}
        <div className="w-full bg-white rounded-2xl px-6 border border-(--color-line)">
          {FAQS.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
