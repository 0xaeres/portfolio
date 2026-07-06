import Lenis from 'lenis'

let lenis: Lenis | null = null

export function initLenis(): () => void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return () => {}
  }
  lenis = new Lenis({ lerp: 0.1 })
  let rafId = 0
  const raf = (time: number) => {
    lenis?.raf(time)
    rafId = requestAnimationFrame(raf)
  }
  rafId = requestAnimationFrame(raf)
  return () => {
    cancelAnimationFrame(rafId)
    lenis?.destroy()
    lenis = null
  }
}

export function scrollToHash(hash: string) {
  const el = document.querySelector(hash)
  if (!el) return
  if (lenis) {
    lenis.scrollTo(el as HTMLElement, { offset: -80 })
  } else {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
