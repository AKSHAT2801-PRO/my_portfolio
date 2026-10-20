import Reveal from './Reveal.jsx'
import { skillGroups } from '../data.js'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <Reveal>
        <h2 className="section__title">
          <span>03 //</span> Skills
        </h2>
      </Reveal>

      <div className="skills">
        {skillGroups.map((g, idx) => (
          <Reveal key={g.title} delay={idx * 80} className="skill-card">
            <h3>
              <span>{String(idx + 1).padStart(2, '0')}</span> {g.title}
            </h3>
            <div className="chips">
              {g.items.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
