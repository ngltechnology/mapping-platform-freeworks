import { DIALOG_ON, CARD_DIALOG_ON, DIALOG_OFF } from "../actions/dialog";

const initialState = {
  open: false,
  contentURL: ""
}
export default (state=initialState, action) => {
  switch(action.type) {
    case DIALOG_ON:
      return Object.assign({},{
        open: action.payload.open,
        dialogURL: action.payload.contents.url,
        dialogTitle: action.payload.contents.name
      })
    case CARD_DIALOG_ON:
      return Object.assign({},{
        open: action.payload,
      })
    case DIALOG_OFF:
      return Object.assign({},{
        open: action.payload.open,
        contentURL: "",
      });
    default:
      return state;
  }
}
