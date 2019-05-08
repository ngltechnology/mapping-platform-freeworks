import React, { Component } from 'react';
import IconButton from "@material-ui/core/IconButton"
import Avatar from "@material-ui/core/Avatar"
import Link from "@material-ui/core/Link"
import { Link as RouterLink } from "react-router-dom"

import '../styles/App.scss';
import MapContainer from '../containers/MapContainer';
import GrowCard from "./Card"

import UserInfoContainer from '../containers/UserInfoContainer'
import AuthContainer from '../containers/AuthContainer'

class App extends Component {
  componentDidMount(){
    this.props.currentLocation()
  }
  render() {
    return (
      <div className="App">
        <div>
          { this.props.uid ? <UserInfoContainer /> : <AuthContainer /> }
        </div>
        <MapContainer />

        <div className="avatarContain">
          <Link component={RouterLink} to="/account">
            <IconButton className="avatar">
              <Avatar className="avatar">T</Avatar>
            </IconButton>
          </Link>
        </div>

        <GrowCard />
      </div>
    );
  }
}


export default App;
