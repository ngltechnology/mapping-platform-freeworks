import { DIALOG_ON, DIALOG_OFF } from "../actions"

const initialState = { open: false }

export default (state=initialState, action) => {
  switch(action.type) {
    case DIALOG_ON:
      return Object.assign({},{
        open: action.payload
      });
    case DIALOG_OFF:
      return Object.assign({},{
        open: action.payload
      });
    default:
      return state;
  }
}
