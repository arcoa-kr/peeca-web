export default function Footer() {
  return (
    <footer className="border-t border-(--color-line) bg-white pt-8 pb-10 px-5 sm:px-10 sm:pt-10 sm:pb-15">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-12">

        {/* 로고 + 사업자 정보 */}
        <div className="flex flex-col order-2 md:order-1">
          <img src="/assets/ARCOA_w.png" alt="ARCOA" className="h-20 w-auto object-contain object-left" />
          <div className="pt-2 text-sm text-(--color-text-3) leading-relaxed">
            <p>사업자등록번호 : 343-02-03607</p>
            <p>대표 : 박지안</p>
            <p>문의 : help@arcoa.kr</p>
          </div>
          <p className="pt-7 text-sm text-(--color-text-3)">© 2026 peeca by <a href="https://arcoa.kr"><span className="font-medium text-(--color-text-2)">ARCOA</span></a></p>
        </div>

        {/* 링크 그룹 */}
        <div className="flex gap-16 order-1 md:order-2">
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-(--color-text-1) mb-1">Explore</h4>
            <a href="#problem" className="text-sm text-(--color-text-3) hover:text-(--color-text-2) transition-colors">Problems</a>
            <a href="#how-it-works" className="text-sm text-(--color-text-3) hover:text-(--color-text-2) transition-colors">How it works</a>
            <a href="#example" className="text-sm text-(--color-text-3) hover:text-(--color-text-2) transition-colors">Example</a>
            <a href="#faq" className="text-sm text-(--color-text-3) hover:text-(--color-text-2) transition-colors">FAQ</a>
            <a href="#cta" className="text-sm text-(--color-text-3) hover:text-(--color-text-2) transition-colors">Download</a>
          </div>
          <div className="flex flex-col gap-4">
          <h4 className="text-sm font-semibold text-(--color-text-1) mb-1">Support</h4>
          <a href="https://arcoa-kr.notion.site/330b0d619bef80a6b5d1e69c7b600865" target="_blank" rel="noopener noreferrer" className="text-sm text-(--color-text-3) hover:text-(--color-text-2) transition-colors">Contact</a>
            <a href="https://arcoa-kr.notion.site/peeca-Terms-of-Service-5f8b0d619bef8390ba548133160f417f" target="_blank" rel="noopener noreferrer" className="text-sm text-(--color-text-3) hover:text-(--color-text-1) transition-colors">Terms of Service</a>
            <a href="https://arcoa-kr.notion.site/peeca-Privacy-Policy-cd5b0d619bef8201815d0197eaddcc02" target="_blank" rel="noopener noreferrer" className="text-sm text-(--color-text-2) hover:text-(--color-text-1) transition-colors font-medium">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
