import { combineReducers } from "redux"
import { connectRouter } from 'connected-react-router'

import authentication from "./authentication"
import card from "./card"
import quests from "./quests"
import quest from "./quest"
import auth from "./auth"
import map from "./UserMap.js"
import dialog from "./dialog"
import bottombar from "./bottombar"

export default history => combineReducers({
  router: connectRouter(history),
  authentication,
  card,
  quest,
  quests,
  auth,
  map,
  dialog,
  bottombar
})
