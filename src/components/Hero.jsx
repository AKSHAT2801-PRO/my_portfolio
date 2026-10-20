import { useEffect, useState } from 'react'
import { profile, stats, marquee } from '../data.js'

function Counter({ value, decimals, suffix }) {
  const [n, setN] = useState(0)

  useEffect(() => {
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (calm) {
      setN(value)
      return
    }
    const start = performance.now()
    const dur = 1600
    let raf
    const tick = (t) => {
      const p = Math.min((t - start) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(value * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [value])

  const text = decimals ? n.toFixed(decimals) : Math.round(n).toLocaleString('en-IN')
  return (
    <>
      {text}
      {suffix}
    </>
  )
}

export default function Hero() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setI((x) => (x + 1) % profile.roles.length), 2400)
    return () => clearInterval(id)
  }, [])

  const [first, last] = profile.name.toUpperCase().split(' ')

  return (
    <section id="top" className="hero">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__slash" aria-hidden="true" />

      <div className="hero__inner">
        <p className="eyebrow">
          <span className="dot" /> OPEN TO INTERNSHIPS / PORTFOLIO 2026
        </p>

        <h1 className="hero__name">
          <span className="glitch" data-text={first}>
            {first}
          </span>
          <span className="glitch glitch--red" data-text={last}>
            {last}
          </span>
        </h1>

        <p className="hero__role" aria-live="polite">
          <span className="mono">&gt;</span>
          <span key={i} className="hero__role-text">
            {profile.roles[i]}
          </span>
          <span className="caret" />
        </p>

        <p className="hero__pitch">{profile.pitch}</p>

        <div className="hero__cta">
          <a className="btn btn--red" href={profile.resume} download>
            Download Resume
          </a>
          <a className="btn btn--ghost" href="#projects">
            View Projects
          </a>
          <a className="btn btn--ghost" href="#contact">
            Contact
          </a>
        </div>

        <ul className="hero__socials">
          {Object.entries(profile.links).map(([k, v]) => (
            <li key={k}>
              <a
                href={v || undefined}
                target="_blank"
                rel="noreferrer"
                aria-disabled={!v}
                className={!v ? 'disabled' : ''}
              >
                {k}
                <span>↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="hero__stats">
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <strong>
              <Counter value={s.value} decimals={s.decimals} suffix={s.suffix} />
            </strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[...marquee, ...marquee, ...marquee, ...marquee].map((m, idx) => (
            <span key={idx}>
              {m} <i>✕</i>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
