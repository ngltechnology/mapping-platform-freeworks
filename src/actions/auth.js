export const LOGIN_OK = 'LOGIN_OK'
export const LOGOUT = 'LOGOUT'

export const loginOk = user => ({
  type: LOGIN_OK,
  user
})

export const logOut = () => ({
  type: LOGOUT
})
