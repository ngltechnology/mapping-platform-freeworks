import { connect } from "react-redux"
import { firestore } from "../firebase"

import App from "../components/App"
import { cardOn, getLocationSuc, getLocationErr,loadQuestsSuccess, loadQuestsError } from "../actions";


const mapStateToProps = state => ({
  checked: state.card.checked,
  name: state.quest.name,
  rewards: state.quest.reward,
  photoURL: state.quest.photoURL,
  uid: state.auth.uid,
})
const mapDispatchToProps = dispatch => ({
  handleOn: () => dispatch(cardOn()),
  currentLocation: () => {
    if( navigator.geolocation ) {
      navigator.geolocation.getCurrentPosition(
        position => dispatch(getLocationSuc(position)),
        error => dispatch(getLocationErr(error))
      )
    } else {
      console.log("Geolocation is offline")
      return null;
    }
  },
  receiveQuests: () => (dispatch => {
    firestore.collection("quests").where("partner", "===", "").onSnapshot(
      snapshot => (dispatch(loadQuestsSuccess(snapshot))),
      error    => (dispatch(loadQuestsError(error)))
    )
  })
})

const AppContainer = connect( mapStateToProps, mapDispatchToProps )(App)
export default AppContainer;
