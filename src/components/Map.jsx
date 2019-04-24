import React from "react"
import PropTypes from "prop-types"
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const InnerMap = withGoogleMap( ({location, marker}) => (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={location}
      center={location}
    >
        <Marker 
            {...marker}
        />
        
    </GoogleMap>
));
  
const Map = ({location,markerClick}) => {
  return (
  <InnerMap
      containerElement={(<div />)}
      mapElement={(<div className="map" />)}
      center={location}
      location={location}
      marker={{position: location, onClick: markerClick}}
  />
)}

Map.propTypes = {
  location: PropTypes.objectOf(PropTypes.number).isRequired,
}


export default Map;