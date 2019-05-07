import { connect } from "react-redux"
import App from "../components/App"
import { cardOn, getLocationSuc, getLocationErr } from "../actions";


const mapStateToProps = state => ({
  checked: state.card.checked,
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
  }
})

const AppContainer = connect( mapStateToProps, mapDispatchToProps )(App)
export default AppContainer;
