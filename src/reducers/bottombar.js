import { HANDLE_CHANGE } from "../actions/bottombar";

const initialState = {
  barValue: 0,
}
export default (state=initialState, action) => {
    switch(action.type){
      case HANDLE_CHANGE:
        return Object.assign({},{
          barValue: action.barValue,
        })
      default:
        return state;
    }
  }