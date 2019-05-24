import React, { Component } from 'react'
import { Button } from "@material-ui/core"
export default class Auth extends Component {

  componentDidMount() {
    this.props.refLogin()
  }

  render(){
    return (
      <div>
        <Button
          variant="outlined"
          onClick={this.props.doLogin}
          color="primary"
        >
          Login
        </Button>
      </div>
    )
  }
}
