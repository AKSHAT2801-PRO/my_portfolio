import { useState } from 'react'
import Reveal from './Reveal.jsx'
import { profile } from '../data.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  // No backend needed: opens the visitor's mail app with the message pre-filled.
  const submit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n- ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section contact">
      <Reveal>
        <h2 className="section__title">
          <span>07 //</span> Contact
        </h2>
      </Reveal>

      <div className="contact__grid">
        <Reveal>
          <p className="contact__big">
            Let's build <span className="red">something</span>.
          </p>
          <ul className="contact__list">
            <li>
              <small>EMAIL</small>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <small>PHONE</small>
              <a href={`tel:${profile.phone.replace(/-/g, '')}`}>{profile.phone}</a>
            </li>
            <li>
              <small>BASE</small>
              <span>{profile.location}</span>
            </li>
          </ul>
          <div className="contact__links">
            {Object.entries(profile.links).map(([k, v]) => (
              v ? (
                <a
                  key={k}
                  className="btn btn--sm btn--ghost"
                  href={v}
                  target="_blank"
                  rel="noreferrer"
                >
                  {k} ↗
                </a>
              ) : (
                <button
                  key={k}
                  className="btn btn--sm btn--ghost disabled"
                  type="button"
                  disabled
                  title="Link coming soon"
                >
                  {k} ↗
                </button>
              )
            ))}
            <a className="btn btn--sm btn--red" href={profile.resume} download>
              Resume ↓
            </a>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form className="form" onSubmit={submit}>
            <label>
              <span>Name</span>
              <input required value={form.name} onChange={set('name')} placeholder="Your name" />
            </label>
            <label>
              <span>Email</span>
              <input
                required
                type="email"
                value={form.email}
                onChange={set('email')}
                placeholder="you@company.com"
              />
            </label>
            <label>
              <span>Message</span>
              <textarea
                required
                rows="5"
                value={form.message}
                onChange={set('message')}
                placeholder="Tell me about the role or project..."
              />
            </label>
            <button className="btn btn--red" type="submit">
              Send Message
            </button>
          </form>
        </Reveal>
      </div>

      <footer className="footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span className="mono">BUILT WITH REACT + VITE</span>
      </footer>
    </section>
  )
}
