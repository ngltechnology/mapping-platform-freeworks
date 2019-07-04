import React, { Fragment } from "react"
import { Route, Redirect } from "react-router-dom"
import firebase from "firebase/app"
import "firebase/auth"
import Auth from "./Auth.jsx"
import StartStepper from "../containers/StepperContainer.js"
import AppContainer from "../containers/AppContainer.js"
// import CssBaseLine from "@material-ui/core/CssBaseLine"
// import LinearProgress from '@material-ui/core/LinearProgress'

function PrivateRoute({ component: Component, ...rest }) {
  console.log("auth:",firebase.auth.currentUser)
  return (
    <Route
      {...rest}
      render={props => 
        firebase.auth.currentUser === undefined ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  )
}

const Routing = () => (
  <Fragment>
    {/*<CssBaseLine />*/} 
    {/* <LinearProgress /> */}
    <Route path='/login' component={Auth} />
    <Route path='/start' component={StartStepper} />
    <Route exact path="/" component={()=><Redirect to="/app" />} />
    <Route path="/app" component={AppContainer}/>
  </Fragment>
)
export default Routing;
