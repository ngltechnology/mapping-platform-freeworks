import { connect } from "react-redux"
import { push } from "connected-react-router"
import App from "../components/App.jsx"

const mapStateToProps = state => ({
  bottomNumber: state.bottombar.barValue,
})
const mapDispatchToProps = dispatch => ({
  pushMap: () => dispatch(push("/map")),
  pushSchedule: () => dispatch(push("/schedule")),
  pushAccount: () => dispatch(push("/account")),
})

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)
export default AppContainer;
