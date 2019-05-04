import { CURRENT_LOCATION_SUC, CURRENT_LOCATION_ERR } from "../actions"

const getLocation = (state=null, action) => {
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