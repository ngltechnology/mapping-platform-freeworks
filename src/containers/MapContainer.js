import { connect } from "react-redux"
import { locate_user, on_viewport_change } from "../actions/UserMapActions.js"

import Map from '../components/Map'

const mapStateToProps = state => (state)

export default connect(mapStateToProps, {
  locate_user,
  on_viewport_change
})(Map)
