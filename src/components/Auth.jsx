import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { Button } from "@material-ui/core"
import { push } from "connected-react-router"

import { loginOk } from '../actions/auth'
import { auth, firestore } from "../firebase"
import firebase from "firebase/app"
import "firebase/auth"

class Auth extends Component {

  componentDidMount() {
    this.props.refLogin()
  }

  render(){
    return (
      <div>        
        {this.props.uid===null 
          ? (
            <Button
              variant="outlined"
              onClick={this.props.doLogin}
              color="primary"
            >
              SIGN IN
            </Button>
            )
            : 
            (<Button
                variant="outlined"
                onClick={this.props.push}
                color="primary"
                margin="normal"
              >
              START UP
            </Button>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  uid: state.auth.uid,
})
const mapDispatchToProps = dispatch => {
  return {
    push: () => dispatch(push("/start")),
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
