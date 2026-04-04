import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'

const CASES = [
  { label: '편의점', desc: '도시락 8,900원', img: '/assets/mockup/EX-convenience.png' },
  { label: '마일리지', desc: '국내 이용 50,000원', img: '/assets/mockup/EX-mile.png' },
  { label: '앱스토어', desc: '인앱 결제 33,000원', img: '/assets/mockup/EX-app.png' },
  { label: 'KTX', desc: '서울-부산 119,600원', img: '/assets/mockup/EX-ktx.png' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Example() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <SectionWrapper id="example" bg="#F3F5F8" maxWidth="xl" center>
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        className="flex flex-col items-center gap-10 w-full"
      >
        {/* 헤드라인 */}
        <div className="flex flex-col items-center gap-6">
          <motion.span
            variants={item}
            className="text-xs font-semibold tracking-widest uppercase pl-3.5 pr-3 py-1 rounded-full text-(--color-primary) border-1 border-(--color-primary)"
          >
            Example
          </motion.span>
          <motion.h2
            variants={item}
            className="text-[1.75rem] sm:text-[2.25rem] font-bold tracking-tight text-(--color-text-1)"
          >
            몰랐던 혜택도 찾아요
          </motion.h2>
          {/*}
          <motion.p variants={item} className="text-base sm:text-lg text-(--color-text-2) leading-relaxed">
            다 아는 혜택 말고, 몰랐던 혜택이 진짜예요.
          </motion.p>
          */}
        </div>

        {/* 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CASES.map((c, i) => (
            <motion.div key={c.label} variants={item} className="flex flex-col gap-2">
              {/* 라벨 */}
              <div className="text-center">
                <p className="text-xl font-semibold text-(--color-text-1)">{c.label}</p>
                <p className="text-base text-(--color-text-2) pb-1">{c.desc}</p>
              </div>
              {/* 이미지 */}
              <div className="relative rounded-t-3xl overflow-hidden"
                  style={{ height: '388px', maxWidth: '280px', margin: '0 auto' }}>
                <img 
                  src={c.img} 
                  alt={`${c.label} 결과 화면`}
                  className="w-full h-auto object-cover object-top" 
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
