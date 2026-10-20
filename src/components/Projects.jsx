import Reveal from './Reveal.jsx'
import { projects } from '../data.js'

function LinkBtn({ href, children, variant }) {
  const off = !href
  const className = `btn btn--sm ${variant} ${off ? 'disabled' : ''}`

  if (off) {
    return (
      <button type="button" className={className} disabled title="Link coming soon">
        {children}
      </button>
    )
  }

  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <Reveal>
        <h2 className="section__title">
          <span>02 //</span> Projects
        </h2>
      </Reveal>

      <div className="projects">
        {projects.map((p, idx) => (
          <Reveal key={p.id} delay={idx * 90} className="project" as="article">
            <div className="project__num">{p.id}</div>
            <div className="project__main">
              <div className="project__top">
                <span className="tag tag--red">{p.domain}</span>
              </div>
              <h3>{p.title}</h3>
              <p className="project__sub">{p.subtitle}</p>
              <p className="project__blurb">{p.blurb}</p>
              <ul>
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <div className="chips">
                {p.tags.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
              <div className="project__links">
                <LinkBtn href={p.live} variant="btn--red">
                  Live Demo ↗
                </LinkBtn>
                <LinkBtn href={p.repo} variant="btn--ghost">
                  Source Code ↗
                </LinkBtn>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
