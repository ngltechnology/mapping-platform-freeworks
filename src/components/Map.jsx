import React from "react"
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"

import "../styles/Map.scss"

const InnerMap = withGoogleMap(({quests,location,markerClicked,actionFirestore}) => {
  console.log("innermap:",Array.isArray(quests),quests)
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={location}
      center={location}
    >
      { quests instanceof Object
          ? quests.map( quest => {
            console.log("marker quest:",quest)
            return( 
              <Marker 
                position={quest.location}
                key={quest.key}
                onClick={markerClicked.bind(this, quest)}
              />
            )}) 
          : actionFirestore()
      } 
    </GoogleMap>
)});
  
const Map = props => (
  <InnerMap
    containerElement={(<div className="map" />)}
    mapElement={(<div className="map" />)}
    quests={props.quests}
    location={props.location}
    markerClicked={props.markerClicked}
    actionFirestore={props.actionFirestore}
  />
)
export default Map;
