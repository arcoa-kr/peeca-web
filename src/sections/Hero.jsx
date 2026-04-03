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
        <div className="absolute inset-0 pointer-events-none opacity-88">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/assets/peeca_bg.mp4" type="video/mp4" />
          </video>
        </div>

        {/* 컨테이너 */}
        <div
          ref={heroRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative mx-auto w-full h-full"
          style={{ maxWidth: '1800px' }}
        >
          {/* ② 텍스트 배경 */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{
              transform: `translate(${offset.x * 32}px, ${offset.y * 32}px)`,
              transition: 'transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)',
            }}
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
              src="/assets/peeca_txt.png"
              alt=""
              aria-hidden
              style={{ width: 'clamp(1400px, 80vw, 1600px)' }}
              className="object-contain px-8"
            />
          </div>

          {/* ③ 목업 */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ perspective: '1000px' }}
          >
            <div
              style={{
                transform: `
                  translate(${offset.x * 56}px, ${offset.y * 56}px)
                  rotateY(${offset.x * 21}deg)
                  rotateX(${offset.y * -21}deg)
                `,
                transition: 'transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)',
                transformStyle: 'preserve-3d',
              }}
            >
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                src="/assets/peeca_on.png"
                alt="peeca 앱 미리보기"
                className="w-[85vw] max-w-[630px] object-contain"
              />
            </div>
          </div>

          {/* ④ 헤드라인 + ⑤ 서브카피 + CTA */}
          <div
            className="absolute left-[6%] xl:left-[10%] 2xl:left-[15%] top-[55.5%]"
            style={{
              transform: `translate(${offset.x * 72}px, ${offset.y * 72}px)`,
              transition: 'transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)',
            }}
          >
            <motion.h1
              {...fadeIn(0.3)}
              className="text-left text-[1.8rem] sm:text-[2.5rem] font-semibold leading-[1.2] tracking-tight text-(--color-text-1)"
            >
              결제 전 5초 검색<br />
              peeca
            </motion.h1>
            <div className="mt-[28px]">
              <motion.p
                {...fadeIn(0.4)}
                className="text-lg leading-relaxed mb-4 text-(--color-text-1) font-medium"
              >
                지금 가장 유리한 내 카드를 찾아줘요!
              </motion.p>
              <motion.div {...fadeIn(0.5)}>
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
            src="/assets/peeca_on.png"
            alt="peeca 앱 미리보기"
            className="w-[95%] max-w-[520px] object-contain mb-8"
          />

          {/* 헤드라인 */}
          <motion.h1
            {...fadeIn(0.3)}
            className="text-center text-[2rem] font-semibold leading-[1.2] tracking-tight text-(--color-text-1) mb-4"
          >
            결제 전 5초 검색<br />
            peeca
          </motion.h1>
          <motion.p
            {...fadeIn(0.4)}
            className="text-center text-base leading-relaxed mb-6 text-(--color-text-1) font-medium"
          >
            지금 가장 유리한 내 카드를 찾아줘요!
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
