/**
 * Button
 * Props:
 *   variant  — 'primary' | 'dark' | 'outline' | 'store' (default: 'primary')
 *   href     — 있으면 <a>, 없으면 <button>
 *   children
 *   className — 추가 클래스
 */
export default function Button({ variant = 'primary', href, children, className = '', ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold transition-all rounded-2xl px-6 py-3 text-sm'

  const variants = {
    primary: 'bg-(--color-primary) text-white hover:opacity-90',
    dark:    'bg-(--color-text-1) text-white hover:bg-(--color-neutral-1)',
    outline: 'border-2 border-(--color-primary) text-(--color-primary) hover:bg-(--color-alt)',
    store:   'bg-white/70 backdrop-blur-sm border border-white/60 shadow-sm text-gray-800 hover:bg-white px-5 py-3.5',
  }

  const cls = `${base} ${variants[variant]} ${className}`

  if (href) {
    return <a href={href} className={cls} {...props}>{children}</a>
  }
  return <button className={cls} {...props}>{children}</button>
}
