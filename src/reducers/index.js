import { combineReducers } from "redux"

import card from "./card"
// import quests from "./quests"
import dummy from "./dummy"

const reducers = combineReducers({
  card,
  // quests,
  dummy,
})

export default reducers;