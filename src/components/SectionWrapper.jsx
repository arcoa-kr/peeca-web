/**
 * SectionWrapper
 * Props:
 *   id        — section id
 *   bg        — 배경색 (CSS 색상값, default: '#ffffff')
 *   maxWidth  — 'md' | 'lg' | 'xl' (default: 'lg')
 *   center    — 내부 컨텐츠 중앙 정렬 여부 (default: false)
 *   className — 추가 클래스
 *   children
 */
const MAX_WIDTHS = {
  md: 'max-w-3xl',
  lg: 'max-w-5xl',
  xl: 'max-w-6xl',
}

export default function SectionWrapper({
  id,
  bg = '#ffffff',
  maxWidth = 'lg',
  center = false,
  className = '',
  children,
}) {
  return (
    <section id={id} className={`py-30 px-6 ${className}`} style={{ backgroundColor: bg }}>
      <div className={`${MAX_WIDTHS[maxWidth]} mx-auto ${center ? 'flex flex-col items-center text-center' : ''}`}>
        {children}
      </div>
    </section>
  )
}
