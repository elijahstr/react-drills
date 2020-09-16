import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
import NewTask from './NewTask';
import Todo from './Todo';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    }
    this.addItem = this.addItem.bind(this);
  }
  
  addItem(task){
    this.setState({list: [...this.state.list, task]})
  }
  
  
  
  
  render() {
    return (
      <div>
        <h2>To Do List:</h2>
        <NewTask add={this.addItem}/>
        <Todo theList={this.state.list}/>

      </div>
    )
  }
}

