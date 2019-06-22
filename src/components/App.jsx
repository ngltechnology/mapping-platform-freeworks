import React from 'react';
import { Route } from "react-router-dom"
import '../styles/App.scss'
import AccountContainer from "../containers/AccountContainer"
import MapContainer from "../containers/MapContainer"

/* eslint-disable-nextline */
require('dotenv').config()

// eslint-disable-next-line react/display-name
export default () => {
  return(
    <React.Fragment>
      <Route path="/app/map" component={MapContainer} />
      <Route path="/app/account" component={AccountContainer} />
    </React.Fragment>
)}
