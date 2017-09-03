import React from "react"
import PropTypes from "prop-types"
import { Route } from "react-router-dom"

const PropsRoute = ({ component, ...rest }) => (
    <Route
        {...rest}
        render={routeProps => renderMergedProps(component, routeProps, rest)} />
)

PropsRoute.propTypes = {
    component: PropTypes.func.isRequired
}

const renderMergedProps = (component, ...rest) => (
    React.createElement(component, Object.assign({}, ...rest))
)

export default PropsRoute
