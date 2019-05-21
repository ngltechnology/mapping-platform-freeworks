import React from 'react';
import { Route, Redirect } from "react-router-dom"

import '../styles/App.scss';
// import MapContainer from "../containers/MapContainer"
import AuthContainer from '../containers/AuthContainer.js'
import AccountContainer from "../containers/AccountContainer"
import MapContainer from "../containers/MapContainer"
import { connect } from "react-redux"
import { firestore } from "../firebase"

/* eslint-disable-nextline */
require('dotenv').config()

// eslint-disable-next-line react/display-name
export default () => {
  return(
  <React.Fragment>
    <Route path='/login' component={AuthContainer} />
    <Route exact path="/" component={MapContainer} />
    <Route path="/account" component={AccountContainer} />
  </React.Fragment>
)}


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
const startRoute = connect(state=>({uid:state.auth.uid}))(
  (uid)=>{
    const ref = firestore.collection("partner").doc(uid)
    ref.get()
      .then(user => {
      console.log("user:",user)
    }).catch(err => console.warn(err))
})