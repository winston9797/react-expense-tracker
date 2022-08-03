import React, { Component } from 'react'
import './AddTrans.css'

export default class 
h1 extends Component {
  render() {
    return (
      <>
        <h1>Add Transaction : </h1>
        <form className='addTrans' onSubmit={this.props.handleSubmit}>
        <label>Text : </label>
        <input type="text" placeholder='enter text...'  />
        <label>Amount : 
        <p>(negative - expense , postivie - income)</p>
        </label>
        <input type="number" placeholder='0'  />
        <button className='btn'>Submit</button>
        </form>
      </>
    )
  }
}
