import React from "react"
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"

import "../styles/Map.scss"

const InnerMap = withGoogleMap(({quests,location,markerClicked}) => {
  return(
    <GoogleMap
      defaultZoom={15}
      defaultCenter={location}
      center={location}
    >
      {quests.map((quest,index) => (
          <Marker 
            position={quest.location}
            key={index}
            onClick={markerClicked.bind(this, quest)}
          />
        )
      )}
    </GoogleMap>
)});
  
const Map = props => (
  <InnerMap
    containerElement={(<div className="map" />)}
    mapElement={(<div className="map" />)}
    quests={props.quests}
    location={props.location}
    markerClicked={props.markerClicked}
  />
)
export default Map;
