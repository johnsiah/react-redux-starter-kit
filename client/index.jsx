import React from "react"
import ReactDOM from "react-dom"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import LanguageProvider from "./containers/LanguageProvider"

import reducer from "./reducers"
import App from "./containers/App"
import translationMessages from "./translations/i18n"

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

const render = messages => {
    ReactDOM.render(
        <Provider store={store}>
            <LanguageProvider messages={messages}>
                <App />
            </LanguageProvider>
        </Provider>,
        document.getElementById("root")
    )
}

if (!window.intl) {
    require.ensure([
        "intl",
        "intl/locale-data/jsonp/en.js"
    ], require => {
        require("intl")
        require("intl/locale-data/jsonp/en.js")
        render(translationMessages)
    })
} else render(translationMessages)
