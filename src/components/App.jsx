import React from 'react';
import { Route } from "react-router-dom"

import '../styles/App.scss';
//import PrivateRoute from "./PrivateRoute.jsx"
import MapContainer from "../containers/MapContainer"
import AuthContainer from '../containers/AuthContainer.js'
import AccountContainer from "../containers/AccountContainer"

/* eslint-disable-nextline */
require('dotenv').config()

const App = () => (
  <React.Fragment>
    <Route path='/login' component={AuthContainer} />
    <Route path="/map" component={MapContainer} />
    <Route path="/account" component={AccountContainer} />
  </React.Fragment>
 )

export default App;