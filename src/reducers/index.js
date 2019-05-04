import { combineReducers } from "redux"

import card from "./card"
// import quests from "./quests"
import dummy from "./dummy"
import quest from "./quest"

const reducers = combineReducers({
  card,
  quest,
  // quests,
  dummy,
})

export default reducers;