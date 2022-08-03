import React, { Component } from 'react'
import './App.css';
import Balance from './comp/Balance';
import Header from './comp/Header';
import List from './comp/List';
import AddTrans from './comp/AddTrans';

export default class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      list:[],
      balance: parseInt(0),
      income:parseInt(0),
      expense:parseInt(0)
    }
  }
  handleSubmit = e =>{
    e.preventDefault();
    this.setState({
      list : [...this.state.list,{title:e.target[0].value,amount:e.target[1].value}],
      balance : this.state.balance + parseInt(e.target[1].value)
    })
    if(e.target[1].value < 0){
      this.setState({expense:this.state.income - parseInt(Math.abs(e.target[1].value))})
    }else{
      this.setState({income:this.state.income + parseInt(Math.abs(e.target[1].value))})
    }
    e.target[0].value = '';
    e.target[1].value = '';
  }

  componentDidMount(){
  }

  componentWillUpdate(){
    console.log(localStorage.getItem('list'))
    localStorage.setItem('list', JSON.stringify(this.state.list));
  }


  render() {
    return (
    <div className="App">
      <Header />
      <div className='container'>
        <Balance balance={this.state.balance} income={this.state.income} expense={this.state.expense} />
        <List list={this.state.list} />
        <AddTrans handleSubmit={this.handleSubmit} />
      </div>
    </div>
    )
  }
}
