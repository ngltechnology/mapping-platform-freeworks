import React, { Component } from 'react';
import { Card, CardHeader, CardActionArea, Avatar, CardContent, CardActions, Button, Typography } from "@material-ui/core"
import Grow from "@material-ui/core/Grow"
import IconButton from "@material-ui/core/IconButton"
import Clear from "@material-ui/icons/Clear"
//import Map from "./Map"
import '../styles/App.scss';


class App extends Component {
  render() {
    
    return (
      <div className="App">
        <Grow
          in={this.props.checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(this.props.checked ? { timeout: 1000 } : {})}
        >
          <Card className="InfoCard">
              <CardHeader avatar={
                <Avatar>L</Avatar>
              }
              action={
                <IconButton onClick={this.props.handleOff}>
                  <Clear/>
                </IconButton>
              }
              title="{this.state.quest.name}"
              subheader="subheader"
              />
            <CardActionArea>
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
