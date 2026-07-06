import { useEffect, useRef, useState } from 'react'

/**
 * Custom cursor: accent dot tracks the pointer 1:1, difference-blend ring
 * lerps behind it and scales up over interactive elements. Only rendered on
 * fine-pointer devices.
 */
export function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setEnabled(fine && !reduced)
  }, [])

  useEffect(() => {
    if (!enabled) return
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    document.body.classList.add('has-cursor')

    let mx = -100
    let my = -100
    let rx = -100
    let ry = -100
    let ringScale = 1
    let rafId = 0

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
    }
    const onOver = (e: MouseEvent) => {
      const target = e.target as Element | null
      ringScale = target?.closest('a, button, [data-hover]') ? 2.2 : 1
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })

    const loop = () => {
      rx += (mx - rx) * 0.14
      ry += (my - ry) * 0.14
      dot.style.transform = `translate(${mx - 3}px, ${my - 3}px)`
      ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px) scale(${ringScale.toFixed(2)})`
      rafId = requestAnimationFrame(loop)
    }
    rafId = requestAnimationFrame(loop)

    return () => {
      document.body.classList.remove('has-cursor')
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(rafId)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  )
}
