import React from "react"
import ReactMapGL,{Marker} from "react-map-gl"
import Button from "@material-ui/core/Button"
import "../styles/Map.scss"
import Pin from "./Pin.jsx"

const MAPBOX_TOKEN = process.env.REACT_APP_DEV_API_URL;

class Map extends React.Component{
  
  handleClick = () => {
    console.log("button clicked!!")
    const { locate_user } = this.props
    locate_user()
  }
  componentDidMount(){
    this.props.actionFirestore()
    console.log("componentDidMount")
  }
  render(){
    console.log("render!!")
    const { on_viewport_change, map, quests } = this.props
    return (
      <div>
        <Button
          variant="contained"
          onClick={this.handleClick}
        >
          現在地
        </Button>
        <ReactMapGL
          style={{textAlign:"left"}}
          {...map.viewport}
          mapStyle="mapbox://styles/mapbox/streets-v10"
          onViewportChange={viewport=>on_viewport_change({viewport})}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        >
          {quests instanceof Object 
              ? quests.map(quest => (
                <Marker
                  key={quest.key}
                  latitude={quest.location.lat}
                  longitude={quest.location.lng}
                  
                >
                  <Pin size={20} /> 
                </Marker>
              )) 
              : console.log("quests is not object") }  
      </ReactMapGL>
      </div>
    )
  }
}
export default Map;
