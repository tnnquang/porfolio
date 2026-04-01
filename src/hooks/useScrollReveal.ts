'use client'

import { useEffect, useRef } from 'react'
import { animate } from 'animejs'

interface ScrollRevealOptions {
    translateY?: number
    translateX?: number
    duration?: number
    delay?: number
    once?: boolean
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
    options: ScrollRevealOptions = {},
) {
    const ref = useRef<T>(null)
    const { translateY = 32, translateX = 0, duration = 700, delay = 0, once = true } = options

    useEffect(() => {
        const el = ref.current
        if (!el) return

        // Set initial invisible state
        el.style.opacity = '0'
        if (translateY) el.style.transform = `translateY(${translateY}px)`
        if (translateX) el.style.transform = `translateX(${translateX}px)`

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    animate(el, {
                        opacity: [0, 1],
                        translateY: translateY ? [translateY, 0] : [0, 0],
                        translateX: translateX ? [translateX, 0] : [0, 0],
                        duration,
                        delay,
                        easing: 'easeOutExpo',
                    })
                    if (once) observer.disconnect()
                }
            },
            { threshold: 0.12 },
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [translateY, translateX, duration, delay, once])

    return ref
}
