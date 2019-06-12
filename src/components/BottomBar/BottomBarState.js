import { connect } from "react-redux"
import BottomBar from "./BottomBar.jsx"

export const HANDLE_CHANGE = "HANDLE_CHANGE"

export const handle_change = barValue => ({
  type: HANDLE_CHANGE,
  barValue,
})

const initialState = {
  barValue: 0,
}
export const bottombar = (state=initialState, action) => {
  switch(action.type){
    case HANDLE_CHANGE:
      return Object.assign({},{
        barValue: action.barValue,
      })
    default:
      return state;
  }
}

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
