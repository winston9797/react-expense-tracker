import React, { Component } from 'react'

export default class Transaction extends Component {
  render() {
    return (
      <li className={`list-item ${this.props.border}`}>
        <div>
        {this.props.title} 
        </div>
        <div>
        {this.props.transaction} $
        </div>
      </li>
    )
  }
}
