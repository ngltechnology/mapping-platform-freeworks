import React from "react"
import ReactMapGL from "react-map-gl"
import "../styles/Map.scss"
import Pin from "./Pin.jsx"
import { Link as RouterLink } from "react-router-dom"
import { Link, Avatar, IconButton } from "@material-ui/core"
import GrowCard from "./Card"

const MAPBOX_TOKEN = process.env.REACT_APP_DEV_API_URL;

class Map extends React.Component{
  componentDidMount(){
    this.props.actionFirestore()
    this.props.locate_user()
  }
  render(){
    const {
      on_viewport_change,
      map,
      quests,
      photoURL,
      markerClicked
    } = this.props
    
    return (
      <div> 
        <ReactMapGL
          style={{textAlign:"left"}}
          {...map.viewport}
          mapStyle="mapbox://styles/mapbox/streets-v10"
          onViewportChange={viewport=>on_viewport_change({viewport})}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        >
        {quests instanceof Object 
          ? quests.map(quest => (
            <Pin
              key={quest.key}
              quest={quest}
              markerClicked={markerClicked}
            />))
          : console.log("quests is not object") }  
        </ReactMapGL>
        <div className="avatarContain">
          <Link component={RouterLink} to="/account">
            <IconButton className="avatar">
              <Avatar className="avatar" src={photoURL} />
            </IconButton>
          </Link>
        </div>
        <GrowCard />
      </div>
    )
  }
}
export default Map;
