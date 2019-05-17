import { auth } from '../firebase'
import firebase from "firebase/app"
import "firebase/auth"
import { connect } from 'react-redux'
import Auth from '../components/Auth'
import { loginOk } from '../actions/auth'

const mapStateToProps = state => ({
  isAuth: state.isAuth
})


const mapDispatchToProps = dispatch => {
  return {
    doLogin: () => {
      let provider = new firebase.auth.GoogleAuthProvider()
      auth.signInWithRedirect(provider)
    },
    refLogin: () => {
      auth.onAuthStateChanged(user => {
        if (!user) {
          return
        }
        dispatch(loginOk(user))
      })
    }
  }
}

const AuthContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth)

export default AuthContainer
