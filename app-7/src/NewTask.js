import React, { Component } from 'react'

export default class NewTask extends Component {
    constructor() {
        super();
        this.state = {
            newItem: ""
        }
        this.handleAdd = this.handleAdd.bind(this);
    }
    
    handleChange(val){
        this.setState({newItem: val})
    }

    handleAdd(){
        this.props.add(this.state.newItem);
        this.setState({newItem: ""});
    }
    
    
    
    render() {
        return (
            <div>
               <input className="newItems" placeholder="New Item" onChange={(e)=> this.handleChange(e.target.value)}></input>

            <button className="addItem" onClick={this.handleAdd}>Add Item</button> 
            </div>
        )
    }
}
