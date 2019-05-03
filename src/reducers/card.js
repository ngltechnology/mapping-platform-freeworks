import { CARD_ON, CARD_OFF } from "../actions"

const initialState = { checked: true }

const card = (state=initialState, action) => {
  switch(action.type){
    case CARD_ON:
      return Object.assign({},state,{
        checked: true,
      })
    case CARD_OFF:
      return Object.assign({},state,{
        checked: false,
      })
    default:
      return state
  }
}
export default card;