import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { IntlProvider } from "react-intl"

const LanguageProvider = ({ locale, messages, children }) => (
    <IntlProvider
        locale={locale}
        messages={messages[locale]}>
        {React.Children.only(children)}
    </IntlProvider>
)

LanguageProvider.propTypes = {
    locale  : PropTypes.string.isRequired,
    messages: PropTypes.object.isRequired,
    children: PropTypes.element.isRequired
}

const mapStateToProps = state => ({
    locale: state.language.locale
})

export default connect(mapStateToProps)(LanguageProvider)
