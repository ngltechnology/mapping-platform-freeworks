import { connect } from "react-redux"
import { firestore } from "../firebase"
import {
  loadQuestsSuccess,
  loadQuestsError,
  cardOn,
  markerClicked
} from "../actions"
import { dummyQuests } from "../actions/dummy";


const mapStateToProps = state => ({
  quests: state.quests,
  location: state.getLocation.location,
})

const mapDispatchToProps = dispatch => ({
  markerClicked: quest => dispatch(cardOn(),markerClicked(quest)),
  receiveQuests: () => (dispatch => {
    firestore.collection("quests").where("partner", "===", null).onSnapshot(
      snapshot => (dispatch(loadQuestsSuccess(snapshot))),
      error    => (dispatch(loadQuestsError(error)))  
    )
  }),
  receiveDummy: () => dispatch(dummyQuests()),
  
})
const MapContainer = connect(mapStateToProps, mapDispatchToProps)(Map)
export default MapContainer;