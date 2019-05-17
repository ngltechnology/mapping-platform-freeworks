import { combineReducers } from "redux"
import { connectRouter } from 'connected-react-router'

import card from "./card"
import quests from "./quests"
import quest from "./quest"
import auth from "./auth"
import map from "./UserMap.js"

export default history => combineReducers({
  router: connectRouter(history),
  card,
  quest,
  quests,
  auth,
  map
})
