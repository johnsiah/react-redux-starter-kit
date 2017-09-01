import React from 'react';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'
import * as ExampleActions from '../actions'
import Home from './Home'
import NotFound from "./NotFound";

const App = ({ example, actions }) => (
    <Router>
        <Switch>
            <PropsRoute exact path="/" component={Home}/>
            <Route component={NotFound}/>
        </Switch>
    </Router>
)

const PropsRoute = ({ component, ...rest }) => {
    return (
        <Route {...rest} render={routeProps => {
            return renderMergedProps(component, routeProps, rest);
        }}/>
    );
}

const renderMergedProps = (component, ...rest) => {
    return React.createElement(component, Object.assign({}, ...rest))
}

App.propTypes = {
    example: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    example: state.example
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ExampleActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
