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

  render(){
    const { locate_user, on_viewport_change, map } = this.props
    console.log(map.viewport)
    return (
      <div>
        <Button
          variant="contained"
          onClick={this.handleClick}
        >
          現在地を取得
        </Button>
        <ReactMapGL
          style={{textAlign:"left"}}
          {...map.viewport}
          mapStyle="mapbox://styles/mapbox/streets-v10"
          onViewportChange={viewport=>on_viewport_change({viewport})}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        >
        <Marker
          {...map.marker}
        >
          <Pin size={20} />
        </Marker>  
      </ReactMapGL>
      </div>
    )
  }
}
export default Map;
