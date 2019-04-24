import React from "react"
import PropTypes from "prop-types"
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const InnerMap = withGoogleMap( ({location, marker, quests, markerClick1}) => (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={location}
      center={location}
      disableDefaultUI={0}
    >
        <Marker 
            {...marker}
        />
        {quests.map(quest => (
            <Marker 
              position={quest.location}
              key={quest.key}
              onClick={markerClick1(quest.key)}
            />
          )
        )}
    </GoogleMap>
));
  
const Map = ({location,markerClick,quests,markerClick1}) => {
  return (
  <InnerMap
      containerElement={(<div />)}
      mapElement={(<div className="map" />)}
      center={location}
      location={location}
      marker={{position: location, onClick: markerClick}}
      quests={quests}
      markerClick1={markerClick1}

  />
)}

Map.propTypes = {
  location: PropTypes.objectOf(PropTypes.number).isRequired,
}


export default Map;