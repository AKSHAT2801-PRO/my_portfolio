import { useEffect, useRef } from 'react'

// Custom red cursor. Disabled on touch devices and for reduced-motion users.
export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || calm) return

    document.documentElement.classList.add('has-cursor')
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let rx = x
    let ry = y
    let raf

    const move = (e) => {
      x = e.clientX
      y = e.clientY
      if (dot.current) dot.current.style.transform = `translate(${x}px, ${y}px)`
    }
    const over = (e) => {
      const hot = e.target.closest('a, button, input, textarea, [data-hot]')
      ring.current?.classList.toggle('hot', !!hot)
    }
    const loop = () => {
      rx += (x - rx) * 0.16
      ry += (y - ry) * 0.16
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px)`
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    raf = requestAnimationFrame(loop)

    return () => {
      document.documentElement.classList.remove('has-cursor')
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={ring} className="cursor-ring" aria-hidden="true" />
      <div ref={dot} className="cursor-dot" aria-hidden="true" />
    </>
  )
}
