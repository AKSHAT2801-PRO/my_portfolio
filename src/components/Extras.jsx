import Reveal from './Reveal.jsx'
import { cocurricular, learning } from '../data.js'

export function Cocurricular() {
  return (
    <section id="cocurricular" className="section">
      <Reveal>
        <h2 className="section__title">
          <span>05 //</span> Co-curricular
        </h2>
      </Reveal>

      <div className="cocards">
        {cocurricular.map((c, idx) => (
          <Reveal key={c.title} delay={idx * 70} className="cocard">
            <span className="tag">{c.tag}</span>
            <h3>{c.title}</h3>
            <p>{c.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function Learning() {
  return (
    <section id="learning" className="section">
      <Reveal>
        <h2 className="section__title">
          <span>06 //</span> Currently Learning
        </h2>
      </Reveal>

      <ul className="learn">
        {learning.map((l, idx) => (
          <Reveal key={l.title} as="li" delay={idx * 80} className="learn__item">
            <span className="pulse" aria-hidden="true" />
            <div>
              <strong>{l.title}</strong>
              <small>{l.note}</small>
            </div>
            <em>IN PROGRESS</em>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
