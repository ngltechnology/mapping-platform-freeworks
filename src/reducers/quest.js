import { MARKER_CLICKED } from "../actions"

const quest = (state=null, action) => {
  switch (action.type) {
    case MARKER_CLICKED:
      return Object.assign({},{
        key: action.quest.key,
        name: action.quest.name,
        photoURL: action.quest.photoURL,
        reward: action.quest.reward,
      })
    default:
      return Object.assign({},{
        key: null,
        name: "情報を取得できませんでした",
        photoURL: "",
        reward: null,
      })
  }
}
export default quest;