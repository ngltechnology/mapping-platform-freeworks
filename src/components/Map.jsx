import React from "react"
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const InnerMap = withGoogleMap((quests,location,markerClicked) => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={location}
      center={location}
    >
      {(quests)=>{
        console.log("marker create method!")
        return(quests.map((quest,index) => (
          <Marker 
            position={quest.location}
            key={index}
            onClick={markerClicked(quest)}
          />
        )
      ))}}
    </GoogleMap>
));
  
const Map = (props) => {
  return (
  <InnerMap
    containerElement={(<div />)}
    mapElement={(<div className="map" />)}
    quests={props.quests}
    location={props.location}
    markerClicked={props.markerClicked}
  />
)}
export default Map;
