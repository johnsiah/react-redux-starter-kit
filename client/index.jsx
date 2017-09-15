import React from "react"
import ReactDOM from "react-dom"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import { IntlProvider } from "react-intl"
import thunk from "redux-thunk"

import reducer from "./reducers"
import App from "./containers/App"
import translationMessages from "./translations/i18n"

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

const locale = "zh" // TODO change later (temp)

const render = messages => {
    ReactDOM.render(
        <Provider store={store}>
            <IntlProvider locale={locale} messages={messages[locale]}>
                <App />
            </IntlProvider>
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
