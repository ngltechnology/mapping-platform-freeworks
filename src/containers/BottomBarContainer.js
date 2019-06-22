import { connect } from "react-redux"
import { push } from "connected-react-router"
import { handle_change } from "../actions/bottombar.js";
import BottomBar from "../components/BottomBar.jsx";

const mapStateToProps = state => ({
  barValue: state.bottombar.barValue,
})

const mapDispatchToProps = dispatch => ({
  handle_change: barValue => dispatch(handle_change(barValue)),
  pushMap: () => dispatch(push("/app/map")),
  pushSchedule: () => dispatch(push("/app/schedule")),
  pushAccount: () => dispatch(push("/app/account"))
})

const BottomBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
  )(BottomBar)
export default BottomBarContainer;
