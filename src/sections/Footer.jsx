export default function Footer() {
  return (
    <footer className="border-t border-(--color-line) bg-white py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-(--color-text-3)">
        <span>© 2026 peeca</span>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-(--color-text-2) transition-colors">개인정보처리방침</a>
          <span>·</span>
          <a href="#" className="hover:text-(--color-text-2) transition-colors">이용약관</a>
        </div>
      </div>
    </footer>
  )
}
