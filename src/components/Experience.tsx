import { Plx } from '../hooks/useParallax'
import { Reveal } from '../hooks/useReveal'
import { EXPERIENCE } from '../data/content'

export function Experience() {
  return (
    <section id="experience" className="section">
      <Plx factor={0.3} className="ghost-num" style={{ left: '2%' }}>
        02
      </Plx>
      <Reveal type="fade">
        <p className="mono-label" style={{ marginBottom: 'clamp(40px, 7vh, 80px)' }}>
          02 / EXPERIENCE
        </p>
      </Reveal>

      {EXPERIENCE.map((xp, i) => (
        <Reveal type="scale" key={`${xp.company}-${i}`}>
          <div className="xp-row" data-hover>
            <div>
              <h3 className="xp-company">{xp.company}</h3>
              <p className="mono-dim xp-role">{xp.role}</p>
              <p className="xp-period">{xp.period}</p>
              <p className="mono-dim" style={{ marginTop: 8, fontSize: 11 }}>
                {xp.meta}
              </p>
            </div>
            <div className="xp-bullets">
              {xp.bullets.map((b, j) => (
                <div className="xp-bullet" key={j}>
                  <span className="arrow">→</span>
                  <p>
                    {b.text}
                    {b.badge && <span className="xp-badge">{b.badge}</span>}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  )
}
