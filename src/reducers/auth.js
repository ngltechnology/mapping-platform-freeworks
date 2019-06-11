const initialState = {
  uid: null,
  displayName: null
}

export default (state=initialState, action) => {
  switch (action.type) {
    case "LOGIN_OK": {
      return Object.assign({}, {
        uid: action.user.uid,
        displayName: action.user.displayName,
        email: action.user.email,
        photoURL: action.user.photoURL
      })
    }
    case 'LOGOUT': {
      return Object.assign({}, {
        uid: null,
        displayName: null,
        email: null,
        photoURL: null,
      })
    }
    default: {
      return state
    }
  }
}