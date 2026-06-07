export const STORE_LINKS = {
  google: 'https://play.google.com/store/apps/details?id=kr.arcoa.peeca',
  apple: 'https://apps.apple.com/kr/app/peeca/id6758100118',
  toss: 'https://minion.toss.im/JSMQF2K7',
}

// store: 'apple' | 'google' | 'toss'
// device: 'pc' | 'mobile'
// location: 'hero' | 'cta' | 'footer'
export function trackStore(store, device, location) {
  window.gtag?.('event', 'click_store', {
    app_name: 'peeca',
    store: store,
    device: device,
    location: location,
  })
}