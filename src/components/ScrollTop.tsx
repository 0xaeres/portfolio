import { useEffect, useState } from 'react'
import { scrollToHash } from '../lib/scroll'

export function ScrollTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      className={`scroll-top${visible ? ' visible' : ''}`}
      onClick={() => scrollToHash('#top')}
      data-hover
      aria-label="Scroll to top"
    >
      ↑
    </button>
  )
}
