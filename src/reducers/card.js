import { CARD_ON, CARD_OFF } from "../actions"

const initialState = { checked: false }

const card = (state=initialState, action) => {
  switch(action.type){
    case CARD_ON:
      return Object.assign({},state,{
        checked: action.checked
      })
    case CARD_OFF:
      return Object.assign({},state,{
        checked: action.checked,
      })
    default:
      return state
  }
}