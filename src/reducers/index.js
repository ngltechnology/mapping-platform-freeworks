import { combineReducers } from "redux"
import { connectRouter } from 'connected-react-router'

import authenticatin from "../components/authentication/AuthenticationState"
import card from "./card"
import quests from "./quests"
import quest from "./quest"
import auth from "./auth"
import map from "./UserMap.js"
import dialog from "./dialog.js"

export default history => combineReducers({
  router: connectRouter(history),
  authenticatin,
  card,
  quest,
  quests,
  auth,
  map,
  dialog
})
