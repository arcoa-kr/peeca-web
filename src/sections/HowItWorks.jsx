import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'

const TABS = [
  {
    id: 'use',
    label: '혜택 확인',
    steps: [
      { number: '1', title: '상황 선택', desc: '사용할 곳을 선택해요.', src: '/assets/mockup/HOME-category.webp', alt: '카테고리 선택 화면' },
      { number: '2', title: '금액 입력', desc: '얼마를 사용할지 입력해요.', src: '/assets/mockup/HOME-amount.webp', alt: '금액 입력 화면' },
      { number: '3', title: '혜택 확인', desc: '가장 유리한 내 카드를 확인해요.', src: '/assets/mockup/Result.webp', alt: '추천 결과 화면' },
    ],
  },
  {
    id: 'register',
    label: '카드 등록',
    steps: [
      { number: '1', title: '카드사 선택', desc: '사용 중인 카드사를 골라요.', src: '/assets/mockup/REG-company.webp', alt: '카드사 선택 화면' },
      { number: '2', title: '카드이름 검색', desc: '인증 없이 카드이름만 검색하세요.', src: '/assets/mockup/REG-search.webp', alt: '카드 검색 화면' },
      { number: '3', title: '등록 하기!', desc: '끝! 바로 사용할 수 있어요.', src: '/assets/mockup/REG-done.webp', alt: '등록 완료 화면' },
    ],
  },
  {
    id: 'manage',
    label: '카드 관리',
    steps: [
      { number: '1', title: '내 카드 목록', desc: '등록한 카드를 한눈에 볼 수 있어요.', src: '/assets/mockup/MGT-list.webp', alt: '카드 목록 화면' },
      { number: '2', title: '카드 상세 보기', desc: '카드별 혜택을 확인할 수 있어요.', src: '/assets/mockup/MGT-detail.webp', alt: '카드 상세 화면' },
      { number: '3', title: '카드 삭제', desc: '쉽게 삭제할 수 있어요.', src: '/assets/mockup/MGT-delete.webp', alt: '카드 삭제 화면' },
    ],
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

/* 모바일 캐러셀용 슬라이드 애니메이션 */
const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
}

export default function HowItWorks() {
  const [active, setActive] = useState(0)
  const [stepIndex, setStepIndex] = useState(0)
  const [slideDir, setSlideDir] = useState(1)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const current = TABS[active]

  /* 탭 변경 시 스텝 초기화 */
  const handleTabChange = (i) => {
    setActive(i)
    setStepIndex(0)
    setSlideDir(1)
  }

  /* 모바일 캐러셀 이동 */
  const goToStep = (i) => {
    setSlideDir(i > stepIndex ? 1 : -1)
    setStepIndex(i)
  }

  /* 스와이프 감지 */
  const touchStart = useRef(0)
  const handleTouchStart = (e) => { touchStart.current = e.touches[0].clientX }
  const handleTouchEnd = (e) => {
    const diff = touchStart.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      if (diff > 0 && stepIndex < 2) goToStep(stepIndex + 1)
      if (diff < 0 && stepIndex > 0) goToStep(stepIndex - 1)
    }
  }

  const currentStep = current.steps[stepIndex]

  return (
    <SectionWrapper id="how-it-works" bg="#ffffff" maxWidth="xl" center>
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        className="flex flex-col items-center gap-12 w-full"
      >
        {/* 상단 텍스트 */}
        <div className="flex flex-col items-center gap-6">
          <motion.span
            variants={item}
            className="text-xs font-semibold tracking-widest uppercase pl-3.5 pr-3 py-1 rounded-full text-(--color-primary) border-1 border-(--color-primary)"
          >
            How it works
          </motion.span>
          <motion.h2
            variants={item}
            className="text-[1.75rem] sm:text-[2.25rem] font-bold leading-[1.25] tracking-tight text-(--color-text-1)"
          >
            정말 간단해요
          </motion.h2>
        </div>

        {/* 탭 */}
        <motion.div variants={item} className="flex gap-0 md:gap-3 bg-(--color-bg) p-1.5 rounded-full">
          {TABS.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(i)}
              className={`px-3 md:px-5 py-2 rounded-full text-base font-semibold transition-all ${
                active === i
                  ? 'bg-(--color-primary) text-white shadow-sm'
                  : 'text-(--color-text-2) hover:text-(--color-text-1)'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* ===== PC: 3열 그리드 ===== */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:grid w-full grid-cols-3 gap-0"
          >
            {current.steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold text-white bg-(--color-primary)/90">
                    {step.number}
                  </span>
                  <span className="pr-4 text-xl font-semibold text-(--color-text-1)">{step.title}</span>
                </div>
                <p className="text-base text-(--color-text-2) leading-relaxed text-center max-w-[230px]">
                  {step.desc}
                </p>
                <img src={step.src} alt={step.alt} className="w-full max-w-[210px] lg:max-w-[230px] rounded-3xl shadow-md" />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ===== 모바일: 캐러셀 ===== */}
        <div className="md:hidden w-full flex flex-col items-center gap-6">
          <div
            className="w-full overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait" custom={slideDir}>
              <motion.div
                key={`${current.id}-${stepIndex}`}
                custom={slideDir}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center gap-3.5">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold text-white bg-(--color-primary)/90">
                    {currentStep.number}
                  </span>
                  <span className="pr-3 text-xl font-semibold text-(--color-text-1)">{currentStep.title}</span>
                </div>
                <p className="text-base text-(--color-text-2) leading-relaxed text-center max-w-[260px]">
                  {currentStep.desc}
                </p>
                <img
                  src={currentStep.src}
                  alt={currentStep.alt}
                  className="w-full max-w-[240px] rounded-3xl shadow-md"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 인디케이터 */}
          <div className="flex gap-2">
            {current.steps.map((_, i) => (
              <button
                key={i}
                onClick={() => goToStep(i)}
                aria-label={`${i + 1}단계로 이동`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  stepIndex === i
                    ? 'bg-(--color-primary) w-6'
                    : 'bg-(--color-neutral-3)'
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
