import React from "react"
import {connect} from "react-redux"
import {Route,Redirect} from "react-router"

export default connect(mapStateToProps)(
  ({ user, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => 
      user!==null ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
  )
)

const mapStateToProps = state => ({
  user: state.auth.user
})
