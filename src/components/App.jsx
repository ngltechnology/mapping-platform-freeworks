import React, { Component } from 'react';
import { Card, CardHeader, CardActionArea, Avatar, CardMedia, CardContent, CardActions, Button, Typography } from "@material-ui/core"
import Grow from "@material-ui/core/Grow"
import IconButton from "@material-ui/core/IconButton"
import Clear from "@material-ui/icons/Clear"
import Map from "./Map"
import '../styles/App.scss';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      location: {
        lat: 35.6585805,
        lng: 139.7454329,
      },
      checked: false,
      quests: [
        {"key": "Ei8qnzPeAOLgexP9t1Sq", "location": {"lat": 35.6671141, "lng": 139.7401657}, "name": "ArkHillsでカフェスタッフ！",reward: 3000, photoURL: "https://media-cdn.tripadvisor.com/media/photo-s/0c/0e/61/91/cafe-amore.jpg"},
        {"key": "1ypiZ4bfopN5nxEA7kC8", "location": {"lat": 35.7056396, "lng": 139.7518913}, "name": "東京ドームのお手伝いスタッフ！",reward:6000,photoURL: "https://www.tokyo-dome.co.jp/dome/img/ogp.jpg" }
      ],
      quest: {
        key: "",
        name: "",
        photoURL: "",
        reward: null,
      },
    }
  }
  
  markerClick = quest => {
    this.setState({ checked: true });
    console.log(quest)
    this.setState({ 
      quest: {
        key: quest.key,
        name: quest.name,
        photoURL: quest.photoURL,
        reward: quest.reward,
      } 
    })
    console.log("state.quest:",this.state.quest)
    
  };
  closeIcon = () => {
    this.setState({checked: false});
  }

  setErrorMessage = message => {
    this.setState({
      address: message,
      location: {
        lat: 0,
        lng: 0,
      },
    })
  }
  
  render() {
    
    return (
      <div className="App">
        <Map
          location={this.state.location}
          markerClick={this.markerClick}
          quests={this.state.quests}
        />
        <Grow
          in={this.state.checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(this.state.checked ? { timeout: 1000 } : {})}
        >
          <Card className="InfoCard">
              <CardHeader avatar={
                <Avatar>R</Avatar>
              }
              action={
                <IconButton onClick={this.closeIcon}>
                  <Clear/>
                </IconButton>
              }
              title={this.state.quest.name}
              subheader={`Rewards : ${this.state.quest.reward}円`}
              />
            <CardActionArea>
              <CardMedia 
                style={{height: "15vh"}}
                image={this.state.quest.photoURL} />
              <CardContent>
              {this.state.quest.name}
              <Typography component="p">
                Time List
              </Typography>
              {/* <div className="timegrid">
                <GridList className="gridlist" cols={1.0}>
                  {["11am","12am","1pm","2pm"].map((tile,index) => (
                    <GridListTile key={index}>
                      <Button
                        variant="contained"
                        color="inherit"
                      >
                        {tile}
                      </Button>
                    </GridListTile>
                  ))}
                </GridList>
              </div> */}
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
