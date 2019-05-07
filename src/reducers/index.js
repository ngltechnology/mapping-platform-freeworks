import { combineReducers } from "redux"
import { connectRouter } from 'connected-react-router'

import card from "./card"
// import quests from "./quests"
import dummy from "./dummy"
import quest from "./quest"
import getLocation from "./getLocation"

export default history => combineReducers({
  router: connectRouter(history),
  card,
  quest,
  // quests,
  dummy,
  getLocation,
})