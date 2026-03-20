import { motion } from 'framer-motion'
import PhoneMockup from '../components/PhoneMockup'
import Button from '../components/Button'

/* ── 배경 블롭 ── */
function Blob({ style }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute rounded-full"
      style={style}
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

/* ── 텍스트 영역 variants ── */
const textContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } },
}

const textItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

/* ── 스토어 영역 variants ── */
const storeContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } },
}

const storeItem = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

/* ── 폰 플로팅 ── */
const phoneFloat = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
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
      <Blob style={{ width: 640, height: 640, bottom: '-80px', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle, #5ce8d4 0%, #2dd4bf 40%, transparent 70%)', filter: 'blur(90px)', opacity: 0.55 }} />
      <Blob style={{ width: 480, height: 480, top: '10%', right: '-60px', background: 'radial-gradient(circle, #a78bfa 0%, #7c3aed 40%, transparent 70%)', filter: 'blur(100px)', opacity: 0.30 }} />
      <Blob style={{ width: 360, height: 360, top: '-40px', left: '20%', background: 'radial-gradient(circle, #c4b5fd 0%, transparent 70%)', filter: 'blur(80px)', opacity: 0.35 }} />

      {/* 3-컬럼 그리드 */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-6xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-[1fr_320px_1fr] gap-10 items-center py-16 lg:py-0">

          {/* 좌: 텍스트 */}
          <motion.div variants={textContainer} initial="hidden" animate="show" className="flex flex-col gap-5 lg:gap-6">
            <motion.div variants={textItem}><AvatarStack /></motion.div>

            <motion.h1
              variants={textItem}
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

            <motion.p variants={textItem} className="text-base sm:text-lg leading-relaxed max-w-sm" style={{ color: '#555' }}>
              <strong className="font-semibold text-gray-800">새 카드를 권유하는 앱이 아니에요.</strong>
              <br />
              이미 가진 카드 중에서, 지금 가장 유리한 카드를 찾아줘요.
            </motion.p>

            {/* 모바일 스토어 버튼 */}
            <motion.div variants={textItem} className="flex flex-col gap-3 w-fit lg:hidden">
              <Button variant="store" href="#">  App Store</Button>
              <Button variant="store" href="#">▶  Google Play</Button>
              <Button variant="store" href="#">💙  앱인토스</Button>
            </motion.div>
          </motion.div>

          {/* 중: 폰 목업 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="flex justify-center"
          >
            <motion.div variants={phoneFloat} animate="animate">
              <PhoneMockup
                src="/assets/mockup/HOME-main.png"
                alt="peeca 앱 홈 화면"
                width="md"
                glow
              />
            </motion.div>
          </motion.div>

          {/* 우: 스토어 버튼 (데스크탑) */}
          <motion.div variants={storeContainer} initial="hidden" animate="show" className="hidden lg:flex flex-col gap-4 items-start">
            <motion.p variants={storeItem} className="text-2xl font-bold text-gray-800 leading-snug">
              지금 바로<br />다운로드하세요
            </motion.p>
            <motion.div variants={storeItem}><Button variant="store" href=""></Button><Button variant="store" href="#">  App Store</Button></motion.div>
            <motion.div variants={storeItem}><Button variant="store" href="#">▶  Google Play</Button></motion.div>
            <motion.div variants={storeItem}><Button variant="store" href="#">💙  앱인토스</Button></motion.div>
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
