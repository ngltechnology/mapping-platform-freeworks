import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import Account from "../components/Account"

export default withRouter(connect()(Account))