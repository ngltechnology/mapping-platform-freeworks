import { connect } from "react-redux"
import BottomBar from "./BottomBar.jsx"

export const HANDLE_CHANGE = "HANDLE_CHANGE"

export const handle_change = value => ({
  type: HANDLE_CHANGE,
  value,
})

const initialState = {
  value: 0,
}
export const bottombar = (state=initialState, action) => {
  switch(action.type){
    case HANDLE_CHANGE:
      return Object.assign({},{
        value: action.value,
      })
    default:
      return state;
  }
}

const mapStateToProps = state => ({
  value: state.bottombar.value,
})
const mapDispatchToProps = dispatch => ({
  handle_change: value => dispatch(handle_change(value)),
})
const BottomBarContainer = connect(mapStateToProps, mapDispatchToProps)(BottomBar)
export default BottomBarContainer;
