import React, { Component } from 'react'

export default class UserInfo extends Component {

  render() {
    return (
      <div>
        Hello, {this.props.displayName}
        <button onClick={this.props.doLogout}>Logout</button>
      </div>
    )
  }
}
