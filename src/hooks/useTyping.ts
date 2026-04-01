'use client'

import { useEffect, useState } from 'react'

export function useTyping(words: string[], speed = 75, pause = 2200, deleteSpeed = 40) {
  const [displayed, setDisplayed] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (!words.length || prefersReducedMotion) return

    const word = words[wordIdx % words.length]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), speed)
    } else if (!isDeleting && displayed.length === word.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), deleteSpeed)
    } else {
      timeout = setTimeout(() => {
        setIsDeleting(false)
        setWordIdx((i) => (i + 1) % words.length)
      }, 0)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, wordIdx, words, speed, pause, deleteSpeed, prefersReducedMotion])

  return prefersReducedMotion ? (words[0] ?? '') : displayed
}
