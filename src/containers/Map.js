import { connect } from "react-redux"
import { firestore } from "../firebase"
import { loadQuestsSuccess, loadQuestsError } from "../actions"
import { dummyQuests } from "../actions/dummy";


const mapStateToProps = state => ({
  quests: state.quests,
})
const mapDispatchToProps = dispatch => ({
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