import React from "react"
//import {connect} from "react-redux"
import {Route,Redirect} from "react-router"
import { auth } from "../firebase"

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => 
      auth.currentUser!==null ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
)
export default PrivateRoute
