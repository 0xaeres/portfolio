import { Plx } from '../hooks/useParallax'
import { Reveal } from '../hooks/useReveal'
import { SUMMARY } from '../data/content'

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-bg">
        <div className="hero-aurora" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <Plx factor={0.25} style={{ position: 'absolute', inset: 0 }}>
          <div
            className="hero-stroke"
            style={{
              top: '8%',
              right: '-6%',
              fontSize: 'clamp(200px, 42vw, 640px)',
              WebkitTextStroke: '1px rgba(242,241,236,0.08)',
            }}
          >
            AI
          </div>
          <div
            className="hero-stroke"
            style={{
              bottom: '4%',
              left: '-4%',
              fontSize: 'clamp(160px, 32vw, 480px)',
              WebkitTextStroke: '1px rgba(242,241,236,0.06)',
            }}
          >
            ZK
          </div>
        </Plx>
        <div className="grid-overlay" />
      </div>

      <div style={{ position: 'relative' }}>
        <Reveal type="up">
          <p className="hero-kicker">◆ HEY THERE, I'M SUDHANSHU SHEKHAR — AN</p>
        </Reveal>
        <h1 className="hero-title">
          <Reveal type="up" delay={80}>
            Applied AI
          </Reveal>
          <Reveal type="up" delay={180}>
            &amp; Blockchain
          </Reveal>
          <Reveal type="up" delay={280}>
            <span className="stroke">Engineer</span>
          </Reveal>
        </h1>
        <div className="hero-foot">
          <Reveal type="fade" delay={420}>
            <p className="hero-sub">{SUMMARY}</p>
          </Reveal>
          <Reveal type="fade" delay={520}>
            <div className="hero-scroll">
              <span className="hero-scroll-circle">↓</span>
              SCROLL TO EXPLORE
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
