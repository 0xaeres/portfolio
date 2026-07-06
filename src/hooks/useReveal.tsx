import {
  CSSProperties,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from 'react'

type RevealType = 'up' | 'fade' | 'scale'

type RevealProps = PropsWithChildren<{
  type?: RevealType
  delay?: number
  className?: string
  style?: CSSProperties
  /** Extra class on the overflow-hidden mask (type="up" only). */
  maskClassName?: string
  inline?: boolean
}>

const HIDDEN: Record<RevealType, CSSProperties> = {
  up: { transform: 'translateY(110%)' },
  fade: { transform: 'translateY(36px)', opacity: 0 },
  scale: { transform: 'translateY(50px) scale(0.96)', opacity: 0 },
}

/**
 * Scroll-triggered reveal, ported from the design prototype: masked slide-up,
 * fade-rise, or scale-in, driven by an IntersectionObserver. For "up" the
 * observer watches the overflow-hidden mask (the shifted child never
 * intersects on its own).
 */
export function Reveal({
  type = 'fade',
  delay = 0,
  className,
  style,
  maskClassName,
  inline = false,
  children,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)
  const [settled, setSettled] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true)
      setSettled(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!shown || settled) return
    // Hand transform/opacity control back to CSS once the reveal finishes so
    // hover transitions on the same element behave normally.
    const t = setTimeout(() => setSettled(true), delay + 1150)
    return () => clearTimeout(t)
  }, [shown, settled, delay])

  const innerStyle: CSSProperties = settled
    ? { ...style }
    : {
        ...style,
        ...(shown ? { transform: 'translateY(0) scale(1)', opacity: 1 } : HIDDEN[type]),
        transition: `transform 1.1s cubic-bezier(.16,1,.3,1) ${delay}ms, opacity .9s ease ${delay}ms`,
        willChange: 'transform, opacity',
      }

  const display = inline ? 'inline-block' : 'block'

  if (type === 'up') {
    return (
      <span
        ref={ref}
        className={`reveal-mask ${maskClassName ?? ''}`}
        style={{ display }}
      >
        <span className={className} style={{ display, ...innerStyle }}>
          {children}
        </span>
      </span>
    )
  }

  return (
    <div ref={ref} className={className} style={innerStyle}>
      {children}
    </div>
  )
}
