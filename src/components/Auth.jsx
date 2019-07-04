import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { Button, CircularProgress } from "@material-ui/core"
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
    const styles = {
      sprit: {
        backgroundColor: "#060A27",
        height: "100vh"
      },
      progress: {
        textAlign: "center",
        position: "absolute",
        top: "50vh"
      },
      logo: {
        width: "70vw",
        height: "70vw"
      }
    }

    return (
      <div style={styles.sprit}>
        <img alt="logo" src="/src/images/FREEWORKS_bb.png" styles={styles.logo} />
        <CircularProgress style={styles.progress}/>
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
            : this.props.pushApp()
        }
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
    },
    pushApp: () => dispatch(push("/app/map"))
  }
}
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth))
