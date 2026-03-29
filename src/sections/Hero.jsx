import { motion } from 'framer-motion'

/* ── 배경 블롭 ── */
function Blob({ style, delay = 0 }) {
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute rounded-full"
      style={style}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay }}
    />
  )
}

/* ── fade-in ── */
const fadeIn = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-alt">
      {/* ② 메인 비주얼 (폰 + 배경타이포 합성 PNG) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <img
          src="/assets/hero-visual.png"
          alt="peeca 앱 미리보기"
          className="w-[85%] max-w-[500px] object-contain"
        />
      </motion.div>

      {/* ③ 헤드라인 — 오른쪽 */}
      <motion.h1
        {...fadeIn(0.2)}
        className="absolute left-[5%] top-[38%] text-left text-[clamp(2rem,5vw,3.6rem)] font-bold leading-[1.15] tracking-tight text-text-1"
      >
        내 카드 고민 끝,<br />
        결제 전 5초<br />
        <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #553FF3 0%, #AA9FF9 100%)' }}>
          peeca ✦
        </span>
      </motion.h1>

      {/* ④ 서브카피 + CTA — 왼쪽 하단 */}
      <div className="absolute left-[5%] bottom-[8%]">
        <motion.p {...fadeIn(0.35)} className="text-base sm:text-lg leading-relaxed mb-5 text-text-2">
          <strong className="font-semibold text-text-1">새 카드를 권유하는 앱이 아니에요.</strong><br />
          이미 가진 카드 중에서, 지금 가장 유리한 카드를 찾아줘요.
        </motion.p>
        <motion.div {...fadeIn(0.5)} className="flex flex-wrap gap-3 items-center">
          <a href="https://play.google.com/store/apps/details?id=kr.arcoa.peeca" target="_blank">
            <img src="/assets/PlayStore.png" alt="Google Play" className="h-11" />
          </a>
          <a href="https://apps.apple.com/us/app/peeca/id6758100118" target="_blank">
            <img src="/assets/AppStore.png" alt="App Store" className="h-11" />
          </a>
          <a href="#">
            <img src="/assets/Toss.png" alt="토스 미니앱으로" className="h-11" />
          </a>
        </motion.div>
      </div>

    </section>
  )
}
