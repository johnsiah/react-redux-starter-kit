import { SWITCH_LANGUAGE } from "../actions/language"
import { DEFAULT_LOCALE } from "../translations/i18n"

const initialState = {
    locale: DEFAULT_LOCALE
}

export default function language(state = initialState, action) {
    switch (action.type) {
        case SWITCH_LANGUAGE:
            return { ...state, locale: action.locale }
        default:
            return state
    }
}
