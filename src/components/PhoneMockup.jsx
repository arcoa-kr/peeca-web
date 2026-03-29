/**
 * PhoneMockup
 * Props:
 *   src      — 이미지 경로
 *   alt      — img alt 텍스트
 *   width    — 'sm' | 'md' (default: 'md')
 *   glow     — 하단 글로우 표시 여부 (default: false)
 */
export default function PhoneMockup({ src, alt = '', width = 'md', glow = false }) {
  const sizeClass = width === 'sm'
    ? 'w-[180px] sm:w-[210px]'
    : 'w-[230px] sm:w-[270px]'

  return (
    <div className="relative">
      {glow && (
        <div
          aria-hidden
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-12 rounded-full blur-2xl"
          style={{ background: 'linear-gradient(90deg, #553FF3, #5ce8d4)', opacity: 0.5 }}
        />
      )}
      <div
        className={`relative ${sizeClass} rounded-[2rem] bg-black p-[8px] shadow-[0_32px_80px_rgba(0,0,0,0.22)] ring-1 ring-black/10`}
      >
        {/* 다이나믹 아일랜드 */}
        <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-[64px] h-[15px] bg-black rounded-full z-10" />
        <div className="overflow-hidden rounded-[1.5rem]">
          <img
            src={src}
            alt={alt}
            className="w-full object-cover"
            draggable={false}
          />
        </div>
      </div>
    </div>
  )
}
