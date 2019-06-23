import React, { Fragment } from "react"
import { Route, Redirect } from "react-router-dom"
import Auth from "./Auth.jsx"
import StartStepper from "../containers/StepperContainer.js"
import AppContainer from "../containers/AppContainer.js"
import CssBaseLine from "@material-ui/core/CssBaseLine"

const Routing = () => (
  <Fragment>
    <CssBaseLine />
    <Route path='/login' component={Auth} />
    <Route path='/start' component={StartStepper} />
    <Route exact path="/" component={()=><Redirect to="/login" />} />
    <Route path="/app" component={AppContainer}/>
  </Fragment>
)
export default Routing;
