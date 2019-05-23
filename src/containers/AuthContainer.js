import { withRouter } from "react-router-dom"
import { auth, firestore } from '../firebase'
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
        console.log(user)
        if (!user) {
          return
        }
        firestore.collection("partner").doc(user.uid).set({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL
        })
        .then(()=>{
          dispatch(loginOk(user))
        })
      })
    }
  }
}
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth))