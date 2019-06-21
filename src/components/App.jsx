import React from 'react';
import { Route, Redirect } from "react-router-dom"
import '../styles/App.scss';
import Auth from './Auth.jsx'
import AccountContainer from "../containers/AccountContainer"
import MapContainer from "../containers/MapContainer"
import StartStepper from "../containers/StepperContainer.js"

/* eslint-disable-nextline */
require('dotenv').config()

// eslint-disable-next-line react/display-name
export default () => {
  return(
    <React.Fragment>
      <Route path='/login' component={Auth} />
      <Route path='/start' component={StartStepper} />
      <Route exact path="/" component={()=><Redirect to="/login" />} />
      <Route path="/map" component={MapContainer} />
      <Route path="/account" component={AccountContainer} />
    </React.Fragment>
)}
