import { connect } from "react-redux"
import { auth } from "../firebase"
import { logOut } from '../actions/auth.js'
import { withRouter } from "react-router-dom"
import Account from "../components/Account"

const mapStateToProps = state => ({
  uid: state.auth.uid,
  photoURL: state.auth.photoURL,
  displayName: state.auth.displayName,
})
const mapDispatchToProps = dispatch => ({
  doLogout: () => {
    if(window.confirm("ログアウトしますか？")){
      auth.signOut()
      dispatch(logOut())
    }else{
      return
    }
  }
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Account))
