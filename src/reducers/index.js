import { combineReducers } from "redux"

import card from "./card"
// import quests from "./quests"
import dummy from "./dummy"
import quest from "./quest"
import getLocation from "./getLocation"

const reducers = combineReducers({
  card,
  quest,
  // quests,
  dummy,
  getLocation,
})

export default reducers;