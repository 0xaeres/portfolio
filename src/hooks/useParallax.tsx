import { CSSProperties, PropsWithChildren, useEffect, useRef } from 'react'

type Entry = { el: HTMLElement; factor: number }

const entries = new Set<Entry>()
let rafId = 0

function tick() {
  const vh = window.innerHeight
  for (const { el, factor } of entries) {
    const host = el.parentElement ?? el
    const r = host.getBoundingClientRect()
    const off = (r.top + r.height / 2 - vh / 2) * factor
    el.style.transform = `translate3d(0, ${off.toFixed(1)}px, 0)`
  }
  rafId = requestAnimationFrame(tick)
}

function register(entry: Entry) {
  entries.add(entry)
  if (entries.size === 1) rafId = requestAnimationFrame(tick)
  return () => {
    entries.delete(entry)
    if (entries.size === 0) cancelAnimationFrame(rafId)
  }
}

type PlxProps = PropsWithChildren<{
  factor: number
  className?: string
  style?: CSSProperties
}>

/**
 * Parallax layer: offsets the element vertically against its parent's scroll
 * position. All instances share one rAF loop (same math as the prototype).
 */
export function Plx({ factor, className, style, children }: PlxProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    return register({ el, factor })
  }, [factor])

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform', ...style }}>
      {children}
    </div>
  )
}
