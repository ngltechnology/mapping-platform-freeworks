import { connect } from "react-redux"
import { handle_change } from "../actions/bottombar.js";
import BottomBar from "../components/BottomBar.jsx";

const mapStateToProps = state => ({
  barValue: state.bottombar.barValue,
})

const mapDispatchToProps = dispatch => ({
  handle_change: barValue => dispatch(handle_change(barValue)),
})

const BottomBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
  )(BottomBar)
export default BottomBarContainer;
