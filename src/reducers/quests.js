import { RECEIVE_QUESTS_SUCCESS, RECEIVE_QUESTS_ERROR } from "../actions/index.js"

const initialState = [
  {"name": "", "location": {lat: 0, lng: 0}, key: "" }
]

const quests = (state=initialState, action) => {
  console.log("snapshot::",action.snapshot)
  switch( action.type ) {
    case RECEIVE_QUESTS_SUCCESS:
      return Object.assign({},{
        quests: action.snapshot,
      })
    case RECEIVE_QUESTS_ERROR:
      console.log("receive firestore ERR : ",action.error);
      return state;
    default:
       return state;
  }
}
export default quests;
