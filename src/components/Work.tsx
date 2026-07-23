import { Plx } from '../hooks/useParallax'
import { Reveal } from '../hooks/useReveal'
import { PROJECTS } from '../data/content'

export function Work() {
  return (
    <section id="work" className="section">
      <Plx factor={0.3} className="ghost-num" style={{ right: '2%' }}>
        03
      </Plx>
      <Reveal type="fade">
        <p className="mono-label" style={{ marginBottom: 12 }}>
          03 / SELECTED WORK
        </p>
      </Reveal>
      <h2 className="work-h2">
        <Reveal type="up">Things I've</Reveal>
        <Reveal type="up" delay={120}>
          <span className="stroke">built &amp; shipped</span>
        </Reveal>
      </h2>

      <div className="work-list">
        {PROJECTS.map((p) => (
          <div className={`project${p.flip ? ' flip' : ''}`} key={p.num}>
            <Plx factor={-0.06} className="project-visual-wrap">
              <Reveal type="scale">
                <a
                  className="project-visual"
                  data-hover
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.name} on GitHub`}
                >
                  <div className="grid-overlay" />
                  <span className="project-visual-tag">{p.tag}</span>
                  <span className="project-visual-num">{p.num}</span>
                  <span className="project-visual-arrow">↗</span>
                </a>
              </Reveal>
            </Plx>
            <div className="project-text">
              <Reveal type="fade">
                <p className="mono-dim" style={{ marginBottom: 14, fontSize: 12, letterSpacing: '.16em' }}>
                  {p.num} — {p.kind} · {p.period}
                </p>
              </Reveal>
              <Reveal type="up">
                <h3 className="project-name">{p.name}</h3>
              </Reveal>
              <Reveal type="fade" delay={120}>
                <p className="project-desc">{p.desc}</p>
              </Reveal>
              <Reveal type="fade" delay={200}>
                <div className="project-stack">
                  {p.stack.map((s) => (
                    <span key={s} className="chip" style={{ fontSize: 11, letterSpacing: '.1em', padding: '8px 16px' }}>
                      {s}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
