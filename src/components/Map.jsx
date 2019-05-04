import React from "react"
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const InnerMap = withGoogleMap(() => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={this.props.location}
      center={this.props.location}
    >
      {this.props.quests.map((quest,index) => (
          <Marker 
            position={quest.location}
            key={index}
            onClick={this.props.markerClicked(quest)}
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
