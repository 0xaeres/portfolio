import { Reveal } from '../hooks/useReveal'
import { LINKS } from '../data/content'

const LETTERS: { ch: string; delay: number; accent?: boolean; gap?: boolean }[] = [
  { ch: 'L', delay: 0 },
  { ch: 'E', delay: 50 },
  { ch: 'T', delay: 100 },
  { ch: "'", delay: 150, accent: true },
  { ch: 'S', delay: 200 },
  { ch: ' ', delay: 0, gap: true },
  { ch: 'T', delay: 280 },
  { ch: 'A', delay: 330 },
  { ch: 'L', delay: 380 },
  { ch: 'K', delay: 430 },
]

export function Contact() {
  return (
    <footer id="contact" className="contact">
      <Reveal type="fade">
        <p className="mono-label" style={{ position: 'relative', textAlign: 'center', marginBottom: 'clamp(24px, 4vh, 48px)' }}>
          05 / HAVE AN IDEA?
        </p>
      </Reveal>

      <a href={`mailto:${LINKS.email}`} className="contact-title-link" data-hover>
        <div className="contact-title">
          {LETTERS.map((l, i) =>
            l.gap ? (
              <span key={i} style={{ display: 'inline-block', width: 'clamp(16px, 3vw, 56px)' }} />
            ) : (
              <Reveal type="up" delay={l.delay} inline key={i}>
                <span className={l.accent ? 'accent' : undefined}>{l.ch}</span>
              </Reveal>
            ),
          )}
        </div>
        <Reveal type="fade" delay={550} style={{ textAlign: 'center' }}>
          <span className="contact-email-pill">
            <span className="dot" />
            {LINKS.email}
            <span>↗</span>
          </span>
        </Reveal>
      </a>

      <Reveal type="fade" delay={650}>
        <div className="contact-socials">
          <a className="social-pill" href={LINKS.github} target="_blank" rel="noreferrer">
            GITHUB <span>↗</span>
          </a>
          <a className="social-pill" href={LINKS.linkedin} target="_blank" rel="noreferrer">
            LINKEDIN <span>↗</span>
          </a>
        </div>
      </Reveal>

      <div className="contact-meta">
        <span>© 2026 SUDHANSHU SHEKHAR</span>
        <span>{LINKS.location.toUpperCase()}</span>
        <span>APPLIED AI × BLOCKCHAIN</span>
        <span>DESIGNED IN THE DARK ◆</span>
      </div>
    </footer>
  )
}
