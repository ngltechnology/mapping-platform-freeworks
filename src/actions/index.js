export const CARD_ON = "CARD_ON"
export const CARD_OFF = "CARD_OFF"
export const RECEIVE_QUESTS_SUCCESS = "RECEIVE_QUESTS_SUCCESS"
export const RECEIVE_QUESTS_ERROR = "RECEIVE_QUESTS_ERROR"
export const CURRENT_LOCATION_SUC = "CURRENT_LOCATION_SUC"
export const CURRENT_LOCATION_ERR = "CURRENT_LOCATION_ERR"
export const MARKER_CLICKED = "MARKER_CLICKED"
export const DIALOG_ON = "DIALOG_ON"
export const DIALOG_OFF = "DIALOG_OFF"

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
  heading: location.coords.heading,

})
export const getLocationErr = error => ({
  type: CURRENT_LOCATION_ERR,
  error,
})
export const markerClicked = quest => ({
  type: MARKER_CLICKED,
  quest,
})

export const dialog_on = () => ({
  type: DIALOG_ON,
  payload: true
})
export const dialog_off = () => ({
  type: DIALOG_OFF,
  payload: false
})
