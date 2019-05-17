import { auth } from '../firebase'
import { connect } from 'react-redux'
import { logOut } from '../actions/auth'
import UserInfo from '../components/UserInfo'

const mapStateToProps = state => ({
    uid: state.auth.uid,
    displayName: state.auth.displayName
})
const mapDispatchToProps = dispatch => ({
  doLogout: () => {
    auth.signOut()
    dispatch(logOut())
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo)