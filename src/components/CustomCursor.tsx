'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const [enabled] = useState(() => {
    if (typeof window === 'undefined') return false
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    return finePointer && !reducedMotion
  })
  const [active, setActive] = useState(false)
  const [pressed, setPressed] = useState(false)
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!enabled) return

    document.body.classList.add('custom-cursor-enabled')

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let ringX = mouseX
    let ringY = mouseY
    let rafId = 0

    const isInteractive = (target: EventTarget | null) => {
      if (!(target instanceof Element)) return false
      return Boolean(target.closest('a, button, [role="button"], input, textarea, select, summary, label'))
    }

    const onPointerMove = (e: PointerEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`
      }
    }

    const onPointerOver = (e: PointerEvent) => {
      setActive(isInteractive(e.target))
    }

    const onPointerDown = () => setPressed(true)
    const onPointerUp = () => setPressed(false)

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.2
      ringY += (mouseY - ringY) * 0.2
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX - 18}px, ${ringY - 18}px, 0)`
      }
      rafId = requestAnimationFrame(animateRing)
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('pointerover', onPointerOver, { passive: true })
    window.addEventListener('pointerdown', onPointerDown, { passive: true })
    window.addEventListener('pointerup', onPointerUp, { passive: true })
    rafId = requestAnimationFrame(animateRing)

    return () => {
      document.body.classList.remove('custom-cursor-enabled')
      cancelAnimationFrame(rafId)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerover', onPointerOver)
      window.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('pointerup', onPointerUp)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden='true'
        className={`custom-cursor-ring ${active ? 'is-active' : ''} ${pressed ? 'is-pressed' : ''}`}
      />
      <div
        ref={dotRef}
        aria-hidden='true'
        className={`custom-cursor-dot ${active ? 'is-active' : ''} ${pressed ? 'is-pressed' : ''}`}
      />
    </>
  )
}
