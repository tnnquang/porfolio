'use client'

import { useLang } from '@/contexts/I18nProvider'
import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang()
  const { t } = useTranslation()
  const isVi = lang === 'vi'

  return (
    <button
      onClick={() => setLang(isVi ? 'en' : 'vi')}
      aria-label={isVi ? t('lang.switch_to_en') : t('lang.switch_to_vi')}
      className='flex items-center gap-1.5 px-3 h-9 rounded-full text-sm font-semibold transition-colors duration-200 hover:bg-[color-mix(in_srgb,var(--primary)_12%,transparent)]'
      style={{ color: 'var(--text-2)', fontSize: '0.8125rem' }}
    >
      <span aria-hidden='true' className='text-sm leading-none'>
        {isVi ? '🇻🇳' : '🇬🇧'}
      </span>
      <span>{isVi ? 'VI' : 'EN'}</span>
    </button>
  )
}
