import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'

const FAQS = [
  {
    q: '신규 카드를 추천하는 앱인가요?',
    a: '아니요, peeca는 내 카드의 혜택을 찾는 앱이에요.\n지금 가장 할인이 큰 내 카드를 찾아보세요.',
  },
  {
    q: '회원가입이 필요한가요?',
    a: '앱스토어와 플레이스토어의 peeca는 애플 또는 구글 로그인이 필요해요.\n토스 미니앱의 피카는 회원가입 없이 바로 사용할 수 있어요.',
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
    q: '카드가 없어도 돼요?',
    a: '네, peeca는 카드 이름만 알면 사용할 수 있어요.\n필요한 카드를 쉽게 등록, 삭제하며 비교할 수도 있어요.',
  },
]

// FAQ 전용 GA 추적 함수
function trackFAQ(question) {
  window.gtag?.('event', 'click_faq', {
    app_name: 'peeca',
    question_title: question, // 어떤 질문을 열었는지 질문 텍스트 그대로 전송
  })
}

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-(--color-line) last:border-none">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-semibold text-(--color-text-1)" style={{ fontSize: '17px' }}>
          {faq.q}
        </span>
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
            <p className="pb-6 text-base font-medium text-(--color-text-3) leading-relaxed whitespace-pre-line text-left">
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

  // 질문 클릭 제어 함수
  const handleToggle = (index) => {
    const isOpening = openIndex !== index; // 현재 닫혀있는데 새로 여는 중인가?
    
    if (isOpening) {
      // 열릴 때만 GA 트래킹 함수 호출 (질문 텍스트를 전달)
      trackFAQ(FAQS[index].q);
    }
    
    // 아코디언 상태 변경 (이미 열려있으면 닫고, 아니면 해당 인덱스 열기)
    setOpenIndex(isOpening ? index : null);
  }

  return (
    <SectionWrapper id="faq" bg="#F3F5F8" maxWidth="md" center>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-12 w-full"
      >
        {/* 헤드라인 */}
        <div className="flex flex-col items-center gap-6">
          <span className="text-xs font-semibold tracking-widest uppercase pl-3.5 pr-3 py-1 rounded-full text-(--color-primary) border-1 border-(--color-primary)">
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
              onToggle={() => handleToggle(i)} // 👈 새 핸들러로 교체!
            />
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}