import { connect } from "react-redux"
import { 
  cardOn,
  markerClicked,
  loadQuestsSuccess,
  loadQuestsError
} from "../actions"
import { dummyQuests } from "../actions/dummy";
import Map from '../components/Map'
import { firestore } from "../firebase"

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
  actionFirestore: () => {
    firestore.collection("quests").where("partner", "==", "").get()
      .then(querySnapshot => {
        var quests = []
        querySnapshot.forEach(docs => { 
          quests.push({
            key: docs.id,
            ...docs.data()
          })
          return dispatch(loadQuestsSuccess(quests))
        })}
      )
      .catch(error => dispatch(loadQuestsError(error)))
  }
})
const MapContainer = connect(mapStateToProps, mapDispatchToProps)(Map)
export default MapContainer;
