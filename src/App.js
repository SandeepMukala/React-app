import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ExpenseList from './ExpenseList';

class App extends Component {
  addItem() {
    console.log("clicked!!");
  } 
  
  render() {
     return(<ExpenseList/> );
  }
   
}



export default App;
