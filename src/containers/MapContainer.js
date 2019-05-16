import { connect } from "react-redux"
import { locate_user, on_viewport_change } from "../actions/UserMapActions.js"
import { firestore } from "../firebase"
import { loadQuestsSuccess, markerClicked, cardOn } from "../actions"
import Map from '../components/Map'

const mapStateToProps = state => ({
  state: state,
  map: state.map,
  quests: state.quests.quests
})
const mapDispatchToProps = dispatch => ({
  locate_user: () => {
    if( navigator.geolocation ) {
      navigator.geolocation.getCurrentPosition(
        position => dispatch(locate_user(position)),
        error => console.log(error.message)
      )
    } else {
      console.log("Geolocation is offline")
      return null;
    }
  },
  markerClicked: quest => (
    // eslint-disable-next-line
    dispatch(cardOn()),
    dispatch(markerClicked(quest))
  ),
  on_viewport_change: viewport => {
    dispatch(on_viewport_change(viewport))
  },
  actionFirestore: () => {
    firestore.collection("quests").where("partner", "==", "").get()
      .then( querySnapshot => {
        var snapshot = []
        querySnapshot.forEach(docs =>{
          snapshot.push({
            key: docs.id,
            ...docs.data()
          })
        })
        return dispatch(loadQuestsSuccess(snapshot))
      })
      .catch(error => console.log(error.message))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Map)
