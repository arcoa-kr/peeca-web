export default function Footer() {
  return (
    <footer className="border-t border-(--color-line) bg-white py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-(--color-text-3)">
        <span>© 2026 peeca by <a href="https://arcoa.kr">ARCOA</a></span>
        <div className="flex items-center gap-4">
        <a href="https://arcoa-kr.notion.site/330b0d619bef80a6b5d1e69c7b600865"
          target="_blank" rel="noopener noreferrer"
          className="hover:text-(--color-text-2) transition-colors">문의하기</a>
        <span>·</span>
        <a href="https://arcoa-kr.notion.site/peeca-Privacy-Policy-cd5b0d619bef8201815d0197eaddcc02"
          target="_blank" rel="noopener noreferrer"
          className="hover:text-(--color-text-2) transition-colors">개인정보처리방침</a>
        <span>·</span>
        <a href="https://arcoa-kr.notion.site/peeca-Terms-of-Service-5f8b0d619bef8390ba548133160f417f"
          target="_blank" rel="noopener noreferrer"
          className="hover:text-(--color-text-2) transition-colors">이용약관</a>
      </div>
      </div>
    </footer>
  )
}
