import React, { Component } from 'react';
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardActionArea from "@material-ui/core/CardActionArea"
import Avatar from "@material-ui/core/Avatar"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import CardMedia from "@material-ui/core/CardMedia"
import Grow from "@material-ui/core/Grow"
import IconButton from "@material-ui/core/IconButton"
import Link from "@material-ui/core/Link"
import { Link as RouterLink } from "react-router-dom"
import Clear from "@material-ui/icons/Clear"
import '../styles/App.scss';
import MapContainer from '../containers/Map';

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

        <Grow
          in={this.props.checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(this.props.checked ? { timeout: 1000 } : {})}
        >
          <Card className="InfoCard">
              <CardHeader avatar={
                <IconButton className="shopAvatar">
                  <Avatar>L</Avatar>
                </IconButton>
              }
              action={
                <IconButton onClick={this.props.handleOff}>
                  <Clear/>
                </IconButton>
              }
              title={this.props.name}
              subheader={this.props.rewards}
              />
            <CardActionArea>
              <CardMedia
                image={this.props.photoURL}
                style={{height: "15vh"}}
              />
              <CardContent>
              <Typography component="p">
                Time List
              </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              
              <Button size="small" color="primary">
                時間を選ぶ
              </Button>
              <Button size="small" color="primary">
                キャンセル
              </Button>
            </CardActions>
            
          </Card>  
        </Grow>
      </div>
    );
  }
}

export default App;
