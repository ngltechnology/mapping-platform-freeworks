import { dispatch } from "rxjs/internal/observable/range";

export const CARD_ON = "CARD_ON"
export const CARD_OFF = "CARD_OFF"
export const RECEIVE_QUESTS_SUCCESS = "RECEIVE_QUESTS_SUCCESS"
export const RECEIVE_QUESTS_ERROR = "RECEIVE_QUESTS_ERROR"
export const CURRENT_LOCATION_SUC = "CURRENT_LOCATION_SUC"
export const CURRENT_LOCATION_ERR = "CURRENT_LOCATION_ERR"

export const cardOn = () => ({
  type: CARD_ON,
  checked: true,
})
export const cardOff = () => ({
  type: CARD_OFF,
  checked: false,
})

export const loadQuestsSuccess = snapshot => ({
  type: RECEIVE_QUESTS_SUCCESS,
  snapshot,
})
export const loadQuestsError = error => ({
  type: RECEIVE_QUESTS_ERROR,
  error,
})


export const getLocationSuc = location => ({
  type: CURRENT_LOCATION_SUC,
  location: {
    lat: location.coords.latitude,
    lng: location.coords.longitude,
  },
  
})
export const getLocationErr = error => ({
  type: CURRENT_LOCATION_ERR,
  error,
})
