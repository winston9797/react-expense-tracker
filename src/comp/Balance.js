import React, { Component } from 'react'
import './Balance.css'

export default class Balance extends Component {
  render() {
    return (
      <div className='balance'>
        <p className='balance-text'>your Balance :</p>
        <h3 className='balance-num'>{this.props.balance} $</h3>
        <div className='balance-row'>
        <div className='card'>
            <p>Income : </p>
            <p className='text-green'>{this.props.income} $</p>
        </div>
        <div className='card'>
            <p>Expense : </p>
            <p className='text-red'>{this.props.expense} $</p>
        </div>
        </div>
      </div>
    )
  }
}
