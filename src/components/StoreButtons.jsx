const STORE_LINKS = {
  google: 'https://play.google.com/store/apps/details?id=kr.arcoa.peeca',
  apple: 'https://apps.apple.com/kr/app/peeca/id6758100118',
  toss: 'https://minion.toss.im/JSMQF2K7',
}

function trackStore(store, device) {
  window.gtag?.('event', 'click_store', {
    app_name: 'peeca',
    store: store,
    device: device,
  })
}

export default function StoreButtons({ compact = false }) {
  if (compact) {
    return (
      <div className="flex gap-3 items-center justify-center">
        <a
          href={STORE_LINKS.apple}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackStore('apple', 'mobile')}
          className="flex items-center justify-center w-11.5 h-11.5 rounded-full border border-white/70 bg-black/80 shadow-sm hover:bg-(--color-primary) "
        >
          <img src="/assets/icon-apple.png" alt="App Store" className="w-9.5" />
        </a>
        <a
          href={STORE_LINKS.google}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackStore('google', 'mobile')}
          className="flex items-center justify-center w-11.5 h-11.5 rounded-full border border-white/70 bg-black/80 shadow-sm hover:bg-(--color-primary) "
          >
          <img src="/assets/icon-google.png" alt="Google Play" className="w-9" />
        </a>
        <a
          href={STORE_LINKS.toss}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackStore('toss', 'mobile')}
          className="flex items-center justify-center w-11.5 h-11.5 rounded-full border border-white/70 bg-black/80 shadow-sm hover:bg-(--color-primary) "
        >
          <img src="/assets/icon-toss.png" alt="앱인토스 미니앱" className="w-9.5" />
        </a>
      </div>
    )
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2 items-center">
        <a href={STORE_LINKS.apple} target="_blank" rel="noopener noreferrer" onClick={() => trackStore('apple', 'pc')}>
          <img src="/assets/AppStore.png" alt="App Store" className="h-10" />
        </a>
        <a href={STORE_LINKS.google} target="_blank" rel="noopener noreferrer" onClick={() => trackStore('google', 'pc')}>
          <img src="/assets/PlayStore.png" alt="Google Play" className="h-10" />
        </a>
      </div>
      <div className="flex items-center mt-2.5 text-(--color-text-1) text-base font-medium">
        <img src="/assets/toss_s.png" alt="toss" className="h-4.5" />
        <p className="ml-1"><b>미니앱</b>은 모바일에서 만나보세요.</p>
      </div>
    </div>
  )
}
