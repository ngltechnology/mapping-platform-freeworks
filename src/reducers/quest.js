import { MARKER_CLICKED } from "../actions"

const initialState = {
  key: null,
  name: "情報を取得できませんでした",
  photoURL: "url not found",
  reward: null,
}

export default (state=initialState, action) => {
  switch (action.type) {
    case MARKER_CLICKED:
      return Object.assign({},{
        key: action.quest.key,
        name: action.quest.name,
        photoURL: action.quest.photoURL,
        reward: action.quest.reward,
      })
    default:
      return state;
  }
}