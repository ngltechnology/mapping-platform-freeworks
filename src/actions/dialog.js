export const DIALOG_ON = "DIALOG_ON"
export const DIALOG_OFF = "DIALOG_OFF"

export const dialog_on = () => ({
  type: DIALOG_ON,
  payload: true,
})
export const dialog_off = () => ({
  type: DIALOG_OFF,
  payload: false,
})