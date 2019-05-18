import React from 'react';
import { Route, Redirect } from "react-router-dom"

import '../styles/App.scss';
// import MapContainer from "../containers/MapContainer"
import AuthContainer from '../containers/AuthContainer.js'
import AccountContainer from "../containers/AccountContainer"
import MapContainer from "../containers/MapContainer"
import { connect } from "react-redux"

/* eslint-disable-nextline */
require('dotenv').config()

// eslint-disable-next-line react/display-name
export default () => (
  <React.Fragment>
    <Route path='/login' component={AuthContainer} />
    <Route exact path="/" component={MapContainer} />
    <Route path="/account" component={AccountContainer} />
  </React.Fragment>
)


const PrivateRoute = connect(state=>({uid: state.auth.uid}))(
  ({ uid, component: Component, ...rest }) => {
    console.log(rest,uid)
    return (
      <Route
        {...rest}
        render={ props =>
        uid!==null ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )}
      />
    )
  }  
)