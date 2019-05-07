import React, { Component } from 'react'

export default class Auth extends Component {

  componentDidMount() {
    this.props.refLogin()
  }

  render() {
    return (
      <div>
        <button onClick={this.props.doLogin}>Login</button>
      </div>
    )
  }
}
