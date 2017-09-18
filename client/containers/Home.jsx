import React from "react"
import PropTypes from "prop-types"
import { FormattedMessage } from "react-intl"

const Home = ({ switchLanguage }) => (
    <div>
        <FormattedMessage id="Home.title" />
        <div // eslint-disable-line
            onClick={() => switchLanguage("en")}>Switch to English</div>
        <div // eslint-disable-line
            onClick={() => switchLanguage("zh")}>Switch to Chinese</div>
    </div>
)

Home.propTypes = {
    switchLanguage: PropTypes.func.isRequired
}

export default Home
