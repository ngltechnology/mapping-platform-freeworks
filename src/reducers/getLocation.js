import { CURRENT_LOCATION_SUC, CURRENT_LOCATION_ERR } from "../actions"
const initialState = {
  location: {"lat": 35.6671141, "lng": 139.7401657}
}
const getLocation = (state=initialState, action) => {
  switch (action.type) {
    case CURRENT_LOCATION_SUC:
      return Object.assign({},{
        location: action.location,
        heading: action.heading,
      })
    case CURRENT_LOCATION_ERR:
      return state;
    default:
      return state;
  }
}
export default getLocation;