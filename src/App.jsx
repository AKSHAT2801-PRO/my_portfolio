import Cursor from './components/Cursor.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import TechStack from './components/TechStack.jsx'
import { Cocurricular, Learning } from './components/Extras.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      {/* <Cursor /> */}
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <TechStack />
        <Cocurricular />
        <Learning />
        <Contact />
      </main>
    </>
  )
}
