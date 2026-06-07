import { useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import StoreButtons from '../components/StoreButtons'

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Hero() {
  const heroRef = useRef(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e) => {
    const rect = heroRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height
    setOffset({ x, y })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setOffset({ x: 0, y: 0 })
  }, [])

  return (
    <>
      {/* ═══════════ PC (1126px 이상) ═══════════ */}
      <section className="hidden lg:block relative w-full h-screen overflow-hidden bg-white pt-16">

        {/* ① 배경 */}
        <div className="absolute inset-0 pointer-events-none opacity-88" style={{ backgroundColor: '#FFEFF1' }}>
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/assets/peeca_bg.mp4" type="video/mp4" />
          </video>
        </div>

        {/* ② 5sec peeca */}
        <div
          className="absolute top-1/2 pointer-events-none z-0"
          style={{
            left: 'calc(52.5% - 700px)',
            transform: `translate(${offset.x * 32}px, calc(-38% + ${offset.y * 32}px))`,
            transition: 'transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)',
          }}
        >
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            src="/assets/peeca_txt.webp"
            alt=""
            aria-hidden
            className="object-contain"
          />
        </div>

        {/* ③④ 목업 + 카피 함께 */}
        <div
          ref={heroRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative z-10 flex items-center justify-end h-full"
          style={{ maxWidth: '1280px', margin: '0 auto' }}
        >
          {/* 목업 */}
          <div
            className="flex-shrink-0"
            style={{
              perspective: '600px',
              transform: `translate(${offset.x * 56}px, ${offset.y * 56}px)`,
              transition: 'transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)',
            }}
          >
            <div
              style={{
                transform: `rotateY(${offset.x * 21}deg) rotateX(${offset.y * -21}deg)`,
                transition: 'transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)',
                transformStyle: 'preserve-3d',
              }}
            >
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                src="/assets/peeca_app.webp"
                alt="peeca 앱 미리보기"
                className="max-w-[600px] max-h-[600px] object-contain"
              />
            </div>
          </div>

          {/* 카피 + CTA */}
          <div
            className="flex-shrink-0 text-(--color-text-1) pl-5 pr-15 mt-6"
            style={{
              transform: `translate(${offset.x * 72}px, ${offset.y * 72}px)`,
              transition: 'transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)',
            }}
          >
            <motion.h1
              {...fadeIn(0.3)}
              className="text-left text-[2.4rem] font-bold leading-[1.2] tracking-tight"
            >
              내 카드<br />
              얼마 할인돼?
            </motion.h1>
            <div className="mt-5">
              <motion.p {...fadeIn(0.4)} className="text-[25.5px] leading-relaxed font-bold">
                내 카드 혜택, 5초면 확인
              </motion.p>
              <motion.p {...fadeIn(0.5)} className="text-lg leading-relaxed mb-8 font-semibold">
                지금 가장 유리한 내 카드를 찾아요.
              </motion.p>
              <motion.div {...fadeIn(0.8)}>
                <StoreButtons />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ 모바일 (1125px 미만) ═══════════ */}
      <section className="lg:hidden relative w-full overflow-hidden bg-white pt-6"
        style={{ minHeight: '100dvh' }}
      >
        {/* 배경 */}
        <div className="absolute inset-0 pointer-events-none opacity-80">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/assets/peeca_bg.mp4" type="video/mp4" />
          </video>
        </div>

        {/* 콘텐츠 — 세로 중앙 정렬 */}
        <div className="relative flex flex-col items-center justify-center px-3 pb-3"
          style={{ minHeight: '100dvh' }}
        >
          {/* 폰 목업 */}
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            src="/assets/peeca_app.webp"
            alt="peeca 앱 미리보기"
            className="w-[93%] max-w-[510px] max-h-[510px] object-contain mb-8"
          />

          {/* 헤드라인 */}
          <motion.h1
            {...fadeIn(0.3)}
            className="text-center text-[2rem] font-bold leading-[1.2] tracking-tight text-(--color-text-1) mb-4"
          >
            여기, 내 카드 할인 돼?
          </motion.h1>
          <motion.p
            {...fadeIn(0.4)}
            className="text-center text-base leading-relaxed mb-6 text-(--color-text-1) font-medium"
          >
            <span className="text-2xl leading-relaxed font-bold">내 카드 혜택, 5초면 확인</span><br />
            지금 가장 유리한 내 카드를 찾아요.
          </motion.p>

          {/* CTA */}
          <motion.div {...fadeIn(0.5)}>
            <StoreButtons compact />
          </motion.div>
        </div>
      </section>
    </>
  )
}
