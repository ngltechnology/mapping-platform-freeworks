import React from 'react';
import { Route } from "react-router-dom"
import { makeStyles } from "@material-ui/styles"
import '../styles/App.scss'
import AccountContainer from "../containers/AccountContainer"
import Schedule from "./Schedule.jsx"
import MapContainer from "../containers/MapContainer"
import BottomBar from "../containers/BottomBarContainer.js"

/* eslint-disable-nextline */
require('dotenv').config()

const useStyles = makeStyles({
  bottombar: {
    position: "fixed",
    width: "100vw",
    display: "inline-block",
    bottom: 0,
  }
})

// eslint-disable-next-line react/display-name
export default function App() {
  const classes = useStyles();
  return(
    <React.Fragment>
      <Route path="/app/map" component={MapContainer} />
      <Route path="/app/schedule" component={Schedule} />
      <Route path="/app/account" component={AccountContainer} />
      <BottomBar className={classes.bottombar} />
    </React.Fragment>
)}
