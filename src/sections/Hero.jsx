import { motion } from 'framer-motion'
import PhoneMockup from '../components/PhoneMockup'
import Button from '../components/Button'

/* ── 배경 블롭 (float 애니메이션) ── */
function Blob({ style, delay = 0 }) {
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute rounded-full"
      style={style}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay }}
    />
  )
}

/* ── 아바타 스택 ── */
const AVATAR_COLORS = ['#7B6CF6', '#AA9FF9', '#553FF3']

function AvatarStack() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex -space-x-2">
        {AVATAR_COLORS.map((color, i) => (
          <div
            key={i}
            className="w-7 h-7 rounded-full ring-2 ring-white"
            style={{ background: color }}
          />
        ))}
      </div>
      <span className="text-sm font-medium" style={{ color: '#444' }}>
        1,500+ 사용자
      </span>
    </div>
  )
}

/* ── fade-in 헬퍼 ── */
const fadeIn = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
})

/* ── 스토어 영역 variants ── */
const storeContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.58 } },
}

const storeItem = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

/* ── Hero ── */
export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden pt-14"
      style={{
        background: 'linear-gradient(160deg, #ddeeff 0%, #eef4ff 30%, #f5f0ff 60%, #ffffff 100%)',
      }}
    >
      {/* 배경 블롭 */}
      <Blob delay={0} style={{ width: 640, height: 640, bottom: '-80px', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle, #5ce8d4 0%, #2dd4bf 40%, transparent 70%)', filter: 'blur(90px)', opacity: 0.55 }} />
      <Blob delay={2} style={{ width: 480, height: 480, top: '10%', right: '-60px', background: 'radial-gradient(circle, #a78bfa 0%, #7c3aed 40%, transparent 70%)', filter: 'blur(100px)', opacity: 0.30 }} />
      <Blob delay={4} style={{ width: 360, height: 360, top: '-40px', left: '20%', background: 'radial-gradient(circle, #c4b5fd 0%, transparent 70%)', filter: 'blur(80px)', opacity: 0.35 }} />

      {/* 3-컬럼 그리드 */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-6xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-[1fr_320px_1fr] gap-10 items-center py-16 lg:py-0">

          {/* 좌: 텍스트 — 헤드라인 → 서브카피 → CTA 순서로 stagger */}
          <div className="flex flex-col gap-5 lg:gap-6">
            <motion.div {...fadeIn(0.1)}><AvatarStack /></motion.div>

            <motion.h1
              {...fadeIn(0.22)}
              className="text-[2.8rem] sm:text-[3.6rem] lg:text-[4rem] font-bold leading-[1.1] tracking-tight text-gray-900"
            >
              내 카드 고민 끝,
              <br />결제 전 5초
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #553FF3 0%, #AA9FF9 100%)' }}
              >
                peeca ✦
              </span>
            </motion.h1>

            <motion.p {...fadeIn(0.36)} className="text-base sm:text-lg leading-relaxed max-w-sm" style={{ color: '#555' }}>
              <strong className="font-semibold text-gray-800">새 카드를 권유하는 앱이 아니에요.</strong>
              <br />
              이미 가진 카드 중에서, 지금 가장 유리한 카드를 찾아줘요.
            </motion.p>

            {/* 모바일 CTA */}
            <motion.div {...fadeIn(0.48)} className="flex flex-col gap-3 w-fit lg:hidden">
              <Button variant="store" href="https://apps.apple.com/us/app/peeca/id6758100118"> App Store</Button>
              <Button variant="store" href="#">💙 토스 미니앱으로 <span className="text-xs opacity-60 ml-1">준비 중</span></Button>
            </motion.div>
          </div>

          {/* 중: 폰 목업 — scale 0.95→1.0 + fade */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.58 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <PhoneMockup
                src="/assets/mockup/HOME-main.png"
                alt="peeca 앱 홈 화면"
                width="md"
                glow
              />
            </motion.div>
          </motion.div>

          {/* 우: 스토어 버튼 (데스크탑) */}
          <motion.div
            variants={storeContainer}
            initial="hidden"
            animate="show"
            className="hidden lg:flex flex-col gap-4 items-start"
          >
            <motion.p variants={storeItem} className="text-2xl font-bold text-gray-800 leading-snug">
              지금 바로<br />다운로드하세요
            </motion.p>
            <motion.div variants={storeItem}>
              <Button variant="store" href="https://apps.apple.com/us/app/peeca/id6758100118"> App Store</Button>
            </motion.div>
            <motion.div variants={storeItem} className="flex flex-col gap-1">
              <Button variant="store" href="#">💙 토스 미니앱으로</Button>
              <span className="text-xs pl-1" style={{ color: '#bbb' }}>준비 중</span>
            </motion.div>
            <motion.p variants={storeItem} className="text-xs mt-1" style={{ color: '#999' }}>
              무료 · 복잡한 연동 없음 · 바로 확인
            </motion.p>
          </motion.div>

        </div>
      </div>

      {/* 하단 안개 페이드 */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.9))' }}
      />
    </section>
  )
}
