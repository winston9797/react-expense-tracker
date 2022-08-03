import React, { Component } from 'react'
import Transaction from './Transaction'
import './List.css'

export default class List extends Component {
  render() {
    return (
      <div className='list'>
        <h1>History : </h1>
        <ul className='list'>
          {this.props.list.map(item => {
            let css = '';
            if(item.amount <= 0){
              css = 'red-border'
            }else{
              css = 'green-border'
            }
            return <Transaction key={item.id} border={css} transaction={item.amount} title={item.title} ></Transaction>
          })}
        </ul>
      </div>
    )
  }
}
