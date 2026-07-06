import { Plx } from '../hooks/useParallax'
import { Reveal } from '../hooks/useReveal'
import { AWARDS, EDUCATION } from '../data/content'

export function Education() {
  return (
    <section id="education" className="section">
      <Plx factor={0.3} className="ghost-num" style={{ left: '2%' }}>
        04
      </Plx>
      <Reveal type="fade">
        <p className="mono-label" style={{ marginBottom: 'clamp(40px, 7vh, 80px)' }}>
          04 / EDUCATION &amp; HONOURS
        </p>
      </Reveal>

      <div className="edu-grid">
        <Reveal type="scale">
          <div className="edu-card" data-hover style={{ height: '100%' }}>
            <div className="grid-overlay" style={{ backgroundSize: '36px 36px' }} />
            <p className="mono-label" style={{ position: 'relative' }}>
              EDUCATION
            </p>
            <h3 className="edu-degree" style={{ position: 'relative' }}>
              {EDUCATION.degree}
            </h3>
            <p className="about-copy" style={{ position: 'relative' }}>
              {EDUCATION.school}
            </p>
            <div style={{ position: 'relative', marginTop: 'auto', display: 'flex', flexWrap: 'wrap', gap: '8px 24px' }}>
              <span className="xp-period" style={{ margin: 0 }}>
                {EDUCATION.period}
              </span>
              <span className="mono-dim" style={{ fontSize: 11 }}>
                {EDUCATION.meta}
              </span>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal type="fade">
            <p className="mono-label" style={{ marginBottom: 18 }}>
              AWARDS
            </p>
          </Reveal>
          {AWARDS.map((a) => (
            <Reveal type="scale" key={a.title}>
              <div className="award-row" data-hover>
                <div>
                  <h3 className="award-title">{a.title}</h3>
                  <p className="mono-dim" style={{ marginTop: 8, fontSize: 11 }}>
                    {a.org}
                  </p>
                </div>
                <span className="xp-period" style={{ margin: 0 }}>
                  {a.year}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
