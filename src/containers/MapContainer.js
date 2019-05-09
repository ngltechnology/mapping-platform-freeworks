import { connect } from "react-redux"
import { cardOn, markerClicked } from "../actions"
import { dummyQuests } from "../actions/dummy";
import Map from '../components/Map'

const mapStateToProps = state => ({
  quests: state.dummy,
  location: state.getLocation.location,
})

const mapDispatchToProps = dispatch => ({

  markerClicked: quest => (
    // eslint-disable-next-line
    dispatch(cardOn()),
    dispatch(markerClicked(quest))
  ),
  receiveDummy: () => dispatch(dummyQuests()),
})
const MapContainer = connect(mapStateToProps, mapDispatchToProps)(Map)
export default MapContainer;