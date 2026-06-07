import { STORE_LINKS, trackStore } from './gaUtils'

export default function StoreButtons({ compact = false }) {
  if (compact) {
    return (
      <div className="flex gap-3 items-center justify-center">
        <a
          href={STORE_LINKS.apple}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackStore('apple', 'hero')}
          className="flex items-center justify-center w-11.5 h-11.5 rounded-full border border-white/70 bg-black/80 shadow-sm hover:bg-(--color-primary) "
        >
          <img src="/assets/icon-apple.png" alt="App Store" className="w-9.5" />
        </a>
        <a
          href={STORE_LINKS.google}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackStore('google', 'hero')}
          className="flex items-center justify-center w-11.5 h-11.5 rounded-full border border-white/70 bg-black/80 shadow-sm hover:bg-(--color-primary) "
        >
          <img src="/assets/icon-google.png" alt="Google Play" className="w-9" />
        </a>
        <a
          href={STORE_LINKS.toss}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackStore('toss', 'hero')}
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
        <a href={STORE_LINKS.apple} target="_blank" rel="noopener noreferrer" onClick={() => trackStore('apple', 'hero')}>
          <img src="/assets/AppStore.png" alt="App Store" className="h-10" />
        </a>
        <a href={STORE_LINKS.google} target="_blank" rel="noopener noreferrer" onClick={() => trackStore('google', 'hero')}>
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