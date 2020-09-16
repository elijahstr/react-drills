import React, {Component, createElement} from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from "./Todo"

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: "",
      list: []
    }
  }

  handleChange(val){
    this.setState({newItem: val});
  } 

  addItem(item){
    let updateList = this.state.list;
    updateList.push(item)
    this.setState({list: updateList});
  }
 

  
  render() {
    const mappedList = this.state.list.map((item)=> <li>{item}</li>)

    return (
      <div>
        <h1>To-Do List:</h1>
      
      <input className="newItems" placeholder="New Item" onChange={(e)=> this.handleChange(e.target.value)}></input>

      <button className="addItem" onClick={() => {this.addItem(this.state.newItem)}}>Add Item</button>

      <Todo mappedList={mappedList}/>
      
      </div>
    )
  }
}
