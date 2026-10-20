import { useState } from 'react'
import Reveal from './Reveal.jsx'
import { profile, education, experience } from '../data.js'

export default function About() {
  const [photoOk, setPhotoOk] = useState(true)

  return (
    <section id="about" className="section">
      <Reveal>
        <h2 className="section__title">
          <span>01 //</span> About Me
        </h2>
      </Reveal>

      <div className="about">
        <Reveal className="about__photo-wrap">
          <div className="photo">
            {photoOk ? (
              <img src={profile.photo} alt={profile.name} onError={() => setPhotoOk(false)} />
            ) : (
              <div className="photo__empty">
                <span>YOUR PHOTO</span>
                <small>public/photo.jpg</small>
              </div>
            )}
            <i className="corner corner--tl" />
            <i className="corner corner--br" />
          </div>
        </Reveal>

        <div className="about__body">
          <Reveal delay={80}>
            <p className="lead">
              I'm <b>Akshat</b>, a B.Tech Information Technology student in Pune. My work sits
              across three lanes: <b className="red">MERN</b> web apps, <b className="red">Java</b>{' '}
              backend, and <b className="red">AI / ML</b>.
            </p>
            <p>
              I build full-stack products end to end, from the React interface to the API and the
              database, and I'm just as comfortable training an anomaly-detection model or
              simulating uncertainty in scientific data. My projects solve real problems: farmer
              communities, government scheme monitoring, and meteor trajectory analysis.
            </p>
            <p>
              I currently lead the technical side of my college's AI club, and I've shipped a live
              freelance website with its own domain. I'm looking for internships where I can learn
              from a strong team and own meaningful work.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <h3 className="sub">Education</h3>
            <ul className="edu">
              {education.map((e) => (
                <li key={e.school}>
                  <div>
                    <strong>{e.school}</strong>
                    <span>{e.degree}</span>
                  </div>
                  <div className="edu__right">
                    <em>{e.score}</em>
                    <span>{e.period}</span>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      <Reveal>
        <h3 className="sub sub--spaced">Experience &amp; Leadership</h3>
      </Reveal>
      <div className="timeline">
        {experience.map((x, idx) => (
          <Reveal key={x.title} delay={idx * 100} className="timeline__item">
            <span className="timeline__node" />
            <div className="timeline__head">
              <h4>{x.title}</h4>
              <span className="tag">{x.period}</span>
            </div>
            <p className="timeline__org">
              {x.orgLink ? (
                <a href={x.orgLink} target="_blank" rel="noreferrer">
                  {x.org} ↗
                </a>
              ) : (
                x.org
              )}
            </p>
            <ul>
              {x.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
