import React from 'react';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ExampleActions from '../actions'

const App = ({example, actions}) => (
    <div>{example.text}</div>
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
