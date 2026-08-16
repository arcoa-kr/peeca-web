export const STORE_LINKS = {
  google: 'https://play.google.com/store/apps/details?id=kr.arcoa.peeca',
  apple: 'https://apps.apple.com/kr/app/peeca/id6758100118',
  toss: 'https://minion.toss.im/lGlSc7hC',
}

export function trackStore(store, location) {
  // 클릭한 순간 화면 가로 크기가 1024px 미만이면 'mobile', 이상이면 'pc'
  const currentDevice = window.innerWidth < 1024 ? 'mobile' : 'pc';

  window.gtag?.('event', 'click_store', {
    app_name: 'peeca',
    store: store,
    device: currentDevice, // 👈 자바스크립트가 알아서 'pc' 또는 'mobile'
    location: location,    // 👈 'hero', 'cta', 'footer'
  })
}

export function trackContact(label, location) {
  // 클릭한 순간 화면 가로 크기 기준으로 pc/mobile 판단
  const currentDevice = window.innerWidth < 1024 ? 'mobile' : 'pc';

  window.gtag?.('event', 'click_contact', {
    app_name: 'peeca',
    contact_label: label,      // 'Contact', 'Terms of Service', 'Privacy Policy' 구분
    device: currentDevice,     // 'pc' 또는 'mobile' 자동 판별
    location: location,        // 'footer' 위치 기록
  })
}