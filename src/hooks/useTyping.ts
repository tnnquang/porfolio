'use client'

import { useEffect, useState } from 'react'

export function useTyping(words: string[], speed = 75, pause = 2200, deleteSpeed = 40) {
    const [displayed, setDisplayed] = useState('')
    const [wordIdx, setWordIdx] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        if (!words.length) return
        const word = words[wordIdx % words.length]
        let timeout: ReturnType<typeof setTimeout>

        if (!isDeleting && displayed.length < word.length) {
            timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), speed)
        } else if (!isDeleting && displayed.length === word.length) {
            timeout = setTimeout(() => setIsDeleting(true), pause)
        } else if (isDeleting && displayed.length > 0) {
            timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), deleteSpeed)
        } else {
            setIsDeleting(false)
            setWordIdx((i) => (i + 1) % words.length)
        }

        return () => clearTimeout(timeout)
    }, [displayed, isDeleting, wordIdx, words, speed, pause, deleteSpeed])

    return displayed
}
