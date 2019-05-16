export const LOCATE_USER = "LOCATE_USER"
export const ON_VIEWPORT_CHANGE = "ON_VIEWPORT_CHANGE"

export const locate_user = () => {
  const getPosition = options => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve,reject,options)
    })
  }
  return dispatch => {
    getPosition().then(position => {
      console.log(position.coords)
      dispatch({
        type: LOCATE_USER,
        longitude: position.coords.longitude,
        latitude: position.coords.latitude,
      })
    })
      .catch(err => console.log(err.message))
  }
}

export const on_viewport_change = ({viewport}) => {
  return {
    type: ON_VIEWPORT_CHANGE,
    payload: viewport,
  }
}
