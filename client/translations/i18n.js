import { addLocaleData } from "react-intl"
import en from "react-intl/locale-data/en"
import enTranslations from "./en.json"

export const DEFAULT_LOCALE = "en"

addLocaleData([...en])

const formatTranslationMessages = (locale, messages) => {
    const defaultFormattedMessages = locale !== DEFAULT_LOCALE
        ? formatTranslationMessages(DEFAULT_LOCALE, enTranslations)
        : {}
    return Object.keys(messages).reduce((formattedMessages, key) => {
        let message = messages[key]

        if (!message && locale !== DEFAULT_LOCALE)
            message = defaultFormattedMessages[key]

        return Object.assign(formattedMessages, { [key]: message })
    }, {})
}

const flattenMessages = (nestedMessages, prefix = "") => (
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
    en: flattenMessages(formatTranslationMessages("en", enTranslations))
}

export default translationMessages
