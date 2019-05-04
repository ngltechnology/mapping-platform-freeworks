import { firestore } from "../firebase"

export const CARD_ON = "CARD_ON"
export const CARD_OFF = "CARD_OFF"
export const RECEIVE_QUESTS_SUCCESS = "RECEIVE_QUESTS_SUCCESS"
export const RECEIVE_QUESTS_ERROR = "RECEIVE_QUESTS_ERROR"

export const cardOn = () => ({
  type: CARD_ON,
  checked: true,
})
export const cardOff = () => ({
  type: CARD_OFF,
  checked: false,
})

//これcontainerでは？
export const loadQuests = () => (dispatch => {
  firestore.collection("quests").where("partner", "===", null).onSnapshot(
    snapshot => (dispatch(loadQuestsSuccess(snapshot))),
    error    => (dispatch(loadQuestsError(error)))    
  )
})

export const loadQuestsSuccess = snapshot => ({
  type: RECEIVE_QUESTS_SUCCESS,
  snapshot,
})
export const loadQuestsError = error => ({
  type: RECEIVE_QUESTS_ERROR,
  error,
})

