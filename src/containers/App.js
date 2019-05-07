import { connect } from "react-redux"
import App from "../components/App"
import { cardOn, cardOff, getLocationSuc, getLocationErr } from "../actions";


const mapStateToProps = state => ({
  checked: state.card.checked,
  name: state.quest.name,
  rewards: state.quest.reward,
  photoURL: state.quest.photoURL,
  uid: state.auth.uid,
})
const mapDispatchToProps = dispatch => ({
  handleOn: () => dispatch(cardOn()),
  handleOff: () => dispatch(cardOff()),
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
  }
})

const AppContainer = connect( mapStateToProps, mapDispatchToProps )(App)
export default AppContainer;
