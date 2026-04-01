'use client'

import { useEffect, useRef } from 'react'
import { animate, stagger } from 'animejs'

export function useStaggerReveal<T extends HTMLElement = HTMLDivElement>(
  childSelector = '.reveal-item',
  staggerDelay = 90
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const children = Array.from(container.querySelectorAll<HTMLElement>(childSelector))
    if (children.length === 0) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      children.forEach((el) => {
        el.style.opacity = '1'
        el.style.transform = 'none'
      })
      return
    }

    children.forEach((el) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(48px)'
    })

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(children, {
            opacity: [0, 1],
            translateY: [48, 0],
            duration: 700,
            delay: stagger(staggerDelay),
            easing: 'easeOutQuart'
          })
          observer.disconnect()
        }
      },
      { threshold: 0.08 }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [childSelector, staggerDelay])

  return ref
}
