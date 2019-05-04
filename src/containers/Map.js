import { connect } from "react-redux"
import { firestore } from "../firebase"
import { loadQuestsSuccess, loadQuestsError } from "../actions"
import { getLocationSuc, getLocationErr } from "../actions"
import { dummyQuests } from "../actions/dummy";


const mapStateToProps = state => ({
  quests: state.quests,
  location: state.location,
})
const mapDispatchToProps = dispatch => ({
  receiveQuests: () => (dispatch => {
    firestore.collection("quests").where("partner", "===", null).onSnapshot(
      snapshot => (dispatch(loadQuestsSuccess(snapshot))),
      error    => (dispatch(loadQuestsError(error)))  
    )
  }),
  receiveDummy: () => dispatch(dummyQuests()),
  currentLocation: () => {
    if( navigator.geolocation ) {
      navigator.geolocation.getCurrentPosition(
        position => dispatch(getLocationSuc(position)),
        error => dispatch(getLocationErr(error))
      )
    }else{
      console.log("Geolocation is offline")
      return null;
    }
  }
})
const MapContainer = connect(mapStateToProps, mapDispatchToProps)(Map)
export default MapContainer;