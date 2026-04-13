const STORE_LINKS = {
  google: 'https://play.google.com/store/apps/details?id=kr.arcoa.peeca',
  apple: 'https://apps.apple.com/us/app/peeca/id6758100118',
  toss: 'intoss://peeca',
}

export default function StoreButtons({ compact = false }) {
  if (compact) {
    return (
      <div className="flex gap-3 items-center justify-center">
        <a
          href={STORE_LINKS.google}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-11.5 h-11.5 rounded-full border border-white/70 bg-black/80 shadow-sm hover:bg-(--color-primary) "
          >
          <img src="/assets/icon-google.png" alt="Google Play" className="w-9" />
        </a>
        <a
          href={STORE_LINKS.apple}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-11.5 h-11.5 rounded-full border border-white/70 bg-black/80 shadow-sm hover:bg-(--color-primary) "
        >
          <img src="/assets/icon-apple.png" alt="App Store" className="w-9.5" />
        </a>
        <a
          href={STORE_LINKS.toss}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-11.5 h-11.5 rounded-full border border-white/70 bg-black/80 shadow-sm hover:bg-(--color-primary) "
        >
          <img src="/assets/icon-toss.png" alt="앱인토스 미니앱" className="w-9.5" />
        </a>
      </div>
    )
  }

  return (
    <div className="flex flex-wrap gap-3 items-center">
      <a href={STORE_LINKS.google} target="_blank" rel="noopener noreferrer">
        <img src="/assets/PlayStore.png" alt="Google Play" className="h-10" />
      </a>
      <a href={STORE_LINKS.apple} target="_blank" rel="noopener noreferrer">
        <img src="/assets/AppStore.png" alt="App Store" className="h-10" />
      </a>
       {/* 토스 미니앱
      <a href="#" target="_blank" rel="noopener noreferrer">
        <img src="/assets/Toss.png" alt="토스 미니앱" className="h-10" />
      </a>
        */}
    </div>
  )
}
