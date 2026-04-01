'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import i18n from '@/lib/i18n'
import { I18nextProvider } from 'react-i18next'

type Lang = 'vi' | 'en'

interface LangContextValue {
  lang: Lang
  setLang: (l: Lang) => void
}

const LangContext = createContext<LangContextValue>({ lang: 'vi', setLang: () => {} })

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'vi'
    const saved = localStorage.getItem('lang') as Lang | null
    return saved === 'en' || saved === 'vi' ? saved : 'vi'
  })

  useEffect(() => {
    i18n.changeLanguage(lang)
    localStorage.setItem('lang', lang)
    document.documentElement.setAttribute('lang', lang)
  }, [lang])

  const setLang = (l: Lang) => {
    setLangState(l)
  }

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
