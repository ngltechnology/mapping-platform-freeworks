export const DIALOG_ON = "DIALOG_ON"
export const DIALOG_OFF = "DIALOG_OFF"
export const CARD_DIALOG_ON = "CARD_DIALOG_ON"

export const dialog_on = contents => ({
  type: DIALOG_ON,
  payload: {
    open: true,
    contents,
  },
})
export const dialog_off = () => ({
  type: DIALOG_OFF,
  payload: false,
})
export const card_dialog_on = () => ({
  type: CARD_DIALOG_ON,
  payload: true,
})
