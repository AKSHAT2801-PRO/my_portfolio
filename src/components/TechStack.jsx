import { useState } from 'react'
import Reveal from './Reveal.jsx'
import { techStack, techCategories } from '../data.js'

const logo = (slug) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-original.svg`

function Logo({ t }) {
  const [broken, setBroken] = useState(false)
  return (
    <div className={`logo ${t.invert ? 'logo--inv' : ''}`} data-hot>
      {broken ? (
        <span className="logo__fallback">{t.name.slice(0, 2)}</span>
      ) : (
        <img
          src={logo(t.slug)}
          alt={`${t.name} logo`}
          loading="lazy"
          width="44"
          height="44"
          onError={() => setBroken(true)}
        />
      )}
      <span>{t.name}</span>
    </div>
  )
}

export default function TechStack() {
  const [cat, setCat] = useState('All')
  const list = cat === 'All' ? techStack : techStack.filter((t) => t.cat === cat)

  return (
    <section id="stack" className="section">
      <Reveal>
        <h2 className="section__title">
          <span>04 //</span> Tech Stack
        </h2>
      </Reveal>

      <Reveal>
        <div className="filters" role="tablist" aria-label="Filter technologies">
          {techCategories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={cat === c}
              className={cat === c ? 'active' : ''}
              onClick={() => setCat(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="logos">
        {list.map((t) => (
          <Logo key={t.name} t={t} />
        ))}
      </div>
    </section>
  )
}
