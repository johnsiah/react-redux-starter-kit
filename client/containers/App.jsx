import React from "react"
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom"
import Home from "./Home"
import NotFound from "./NotFound"
import PropsRoute from "../components/PropsRoute"

const App = () => (
    <Router>
        <Switch>
            <PropsRoute exact path="/" component={Home} />
            <Route component={NotFound} />
        </Switch>
    </Router>
)

export default App
