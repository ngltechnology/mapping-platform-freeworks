export const CARD_ON = "CARD_ON"
export const CARD_OFF = "CARD_OFF"

export const cardOn = () => ({
  type: CARD_ON,
  checked: true,
})
export const cardOff = () => ({
  type: CARD_OFF,
  checked: false,
})