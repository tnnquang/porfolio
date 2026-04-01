import i18n from 'i18next'
import viCommon from '../../public/locales/vi/common.json'
import enCommon from '../../public/locales/en/common.json'

if (!i18n.isInitialized) {
  i18n.init({
    resources: {
      vi: { common: viCommon },
      en: { common: enCommon }
    },
    lng: 'vi',
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common'],
    interpolation: { escapeValue: false }
  })
}

export default i18n
