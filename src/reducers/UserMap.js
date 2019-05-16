import { LOCATE_USER, ON_VIEWPORT_CHANGE } from "../actions/UserMapActions.js"

const initialState = {
  viewport: {
    width: "100%",
    height: "100vh",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 10,
  },
  marker: {
    latitude: 37.7577,
    longitude: -122.4376,
  }
}

export default (state=initialState, actions) => {
  switch (actions.type) {
    case LOCATE_USER:
      return Object.assign({},{
        ...state,
        viewport: {
          ...state.viewport,
          latitude: actions.latitude,
          longitude: actions.longitude
        },
        marker: {
          ...state.marker,
          latitude: actions.latitude,
          longitude: actions.longitude
        }
      })
    case ON_VIEWPORT_CHANGE:
      return {
        ...state,
        viewport: actions.payload
      }
    default:
      return state;
  }
}
