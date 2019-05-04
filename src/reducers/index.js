import { combineReducers } from "redux"

import card from "./card"
import quests from "./quests"

const reducers = combineReducers({
  card,
  quests,
})

export default reducers;