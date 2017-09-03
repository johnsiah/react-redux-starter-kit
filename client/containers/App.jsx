import React from "react"
import PropTypes from "prop-types"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom"
import * as ExampleActions from "../actions"
import Home from "./Home"
import NotFound from "./NotFound"
import PropsRoute from "../components/PropsRoute"

const App = ({ example, actions }) => (
    <Router>
        <Switch>
            <PropsRoute exact path="/" component={Home} />
            <Route component={NotFound} />
        </Switch>
    </Router>
)

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
