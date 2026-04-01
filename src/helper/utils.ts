import i18n from '@/lib/i18n'

type TranslateVariables = Record<string, string | number>

export function translateText(key: string, variables?: TranslateVariables): string {
  return i18n.t(key, variables ?? {}) as string
}
