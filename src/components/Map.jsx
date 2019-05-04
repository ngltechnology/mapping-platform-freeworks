import React from "react"
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const InnerMap = withGoogleMap(props => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={props.location}
      center={props.location}
    >
      {props => props.quests.map((quest,index) => (
          <Marker 
            position={quest.location}
            key={index}
            onClick={props.markerClicked(quest)}
          />
        )
      )}
    </GoogleMap>
));
  
const Map = () => {
  return (
  <InnerMap
    containerElement={(<div />)}
    mapElement={(<div className="map" />)}
  />
)}


export default Map;
