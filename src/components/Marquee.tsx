import { MARQUEE_ITEMS } from '../data/content'

export function Marquee() {
  const strip = (ariaHidden: boolean) => (
    <div aria-hidden={ariaHidden || undefined} style={{ display: 'flex' }}>
      {MARQUEE_ITEMS.map((item) => (
        <span key={item} className="marquee-item">
          {item}
          <span className="diamond">◆</span>
        </span>
      ))}
    </div>
  )

  return (
    <div className="marquee">
      <div className="marquee-track">
        {strip(false)}
        {strip(true)}
      </div>
    </div>
  )
}
