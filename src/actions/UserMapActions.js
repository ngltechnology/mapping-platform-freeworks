export const LOCATE_USER = "LOCATE_USER"
export const ON_VIEWPORT_CHANGE = "ON_VIEWPORT_CHANGE"

export const locate_user = position => ({
  type: LOCATE_USER,
  latitude: position.coords.latitude,
  longitude: position.coords.longitude,
})
  

export const on_viewport_change = ({viewport}) => {
  return {
    type: ON_VIEWPORT_CHANGE,
    payload: viewport,
  }
}
