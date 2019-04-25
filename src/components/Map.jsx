import React from "react"
import PropTypes from "prop-types"
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const InnerMap = withGoogleMap( ({location, marker, quests, markerClick}) => (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={location}
      center={location}
    >
        <Marker 
            {...marker}
        />
        {quests.map(quest => (
            <Marker 
              position={quest.location}
              key={quest.key}
              markerClick={markerClick}
            />
          )
        )}
    </GoogleMap>
));
  
const Map = ({location,markerClick,quests}) => {
  return (
  <InnerMap
      containerElement={(<div />)}
      mapElement={(<div className="map" />)}
      center={location}
      location={location}
      marker={{position: location, onClick: markerClick}}
      markerClick={markerClick}
      quests={quests}
  />
)}

Map.propTypes = {
  location: PropTypes.objectOf(PropTypes.number).isRequired,
}


export default Map;