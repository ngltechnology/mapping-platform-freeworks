import React from "react"
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"

import { firestore } from "../firebase"
import "../styles/Map.scss"

const InnerMap = withGoogleMap(({location,markerClicked}) => {
  return(
    <GoogleMap
      defaultZoom={15}
      defaultCenter={location}
      center={location}
    >
      {firestore.collection("quests").where("partner", "==", "").get()
          .then(quertSnaphsot => {
            var quests = []
            quertSnaphsot.forEach(doc => {
              quests.push({
                id: doc.id,
                ...doc.data()
              })
              console.log("quests:",quests)
              return (
                quests.map(quest => (
                  <Marker 
                    position={quest.location}
                    key={quest.key}
                    onClick={markerClicked.bind(this, quest)}
                  />
                ))
              )
            })
        })}
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
