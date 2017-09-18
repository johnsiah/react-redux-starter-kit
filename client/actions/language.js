export const SWITCH_LANGUAGE = "SWITCH_LANGUAGE"

export const switchLanguage = locale => ({ type: SWITCH_LANGUAGE, locale: locale.toLowerCase() })
