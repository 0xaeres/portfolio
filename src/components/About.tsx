import { Plx } from '../hooks/useParallax'
import { Reveal } from '../hooks/useReveal'
import { SKILL_GROUPS } from '../data/content'

export function About() {
  return (
    <section id="about" className="section">
      <Plx factor={0.3} className="ghost-num" style={{ right: '2%' }}>
        01
      </Plx>
      <div className="about-grid">
        <div>
          <Reveal type="fade">
            <p className="mono-label" style={{ marginBottom: 20 }}>
              01 / ABOUT
            </p>
          </Reveal>
          <h2 className="about-h2">
            <Reveal type="up">I ship systems where</Reveal>
            <Reveal type="up" delay={100}>
              intelligence meets
            </Reveal>
            <Reveal type="up" delay={200}>
              <span style={{ color: 'var(--accent)' }}>cryptographic trust.</span>
            </Reveal>
          </h2>
        </div>
        <Reveal type="scale" style={{ alignSelf: 'end' }}>
          <p className="about-copy">
            From retrieval pipelines and agentic LLM workflows to zero-knowledge proof
            systems and on-chain protocols — I work across the full stack of applied AI
            and web3, with a bias for production over prototypes.
          </p>
        </Reveal>
      </div>

      <div className="skills-grid">
        {SKILL_GROUPS.map((g) => (
          <Reveal type="scale" key={g.num}>
            <div className="skill-card" data-hover style={{ height: '100%' }}>
              <div className="grid-overlay" />
              <div className="skill-card-num">{g.num}</div>
              <div className="skill-card-head">
                <span className="dot" />
                <p className="mono-label" style={{ fontSize: 12 }}>
                  {g.label}
                </p>
              </div>
              <h3>{g.title}</h3>
              <div className="skill-card-chips">
                {g.items.map((it) => (
                  <span key={it} className="chip">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
