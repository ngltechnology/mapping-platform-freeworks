import React, { Component } from 'react';
import IconButton from "@material-ui/core/IconButton"
import Avatar from "@material-ui/core/Avatar"
import Link from "@material-ui/core/Link"
import { Link as RouterLink } from "react-router-dom"

import '../styles/App.scss';
import MapContainer from '../containers/Map';
import GrowCard from "./Card"


class App extends Component {
  componentDidMount(){
    this.props.currentLocation()
  }
  render() {
    return (
      <div className="App">
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
