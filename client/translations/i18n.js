import { addLocaleData } from "react-intl"
import en from "react-intl/locale-data/en"
import zh from "react-intl/locale-data/zh"
import enTranslations from "./en.json"
import zhTranslations from "./zh.json"

export const DEFAULT_LOCALE = "en"

addLocaleData([...en, ...zh])

const getTranslations = (locale, messages) => {
    const flatMessages = flattenMessages(messages)

    if (locale === DEFAULT_LOCALE) return flatMessages

    const defaultMessages = getTranslations(DEFAULT_LOCALE, enTranslations)

    return Object.keys(defaultMessages).reduce((formattedMessages, key) => {
        let message = flatMessages[key]

        if (!message) message = defaultMessages[key]

        return Object.assign(formattedMessages, { [key]: message })
    }, {})
}

export const flattenMessages = (nestedMessages, prefix = "") => (
    Object.keys(nestedMessages).reduce((messages, key) => {
        const value       = nestedMessages[key]
        const prefixedKey = prefix ? `${prefix}.${key}` : key
        const m           = messages

        if (typeof value === "string") m[prefixedKey] = value
        else Object.assign(m, flattenMessages(value, prefixedKey))

        return m
    }, {})
)

const translationMessages = {
    en: getTranslations("en", enTranslations),
    zh: getTranslations("zh", zhTranslations)
}

export default translationMessages
