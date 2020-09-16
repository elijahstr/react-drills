import React, { Component } from 'react'

export default class Login extends Component {
    constructor() {
        super();

        this.state = {
            username: "",
            password: ""
        }
    }
    
    changeUsername(val){
        this.setState({username: val});
    }

    changePassword(val){
        this.setState({password: val});
    }
    
    display(){
        window.alert(`Username: ${this.state.username}, Password: ${this.state.password}`)
    }
    
    
    
    render() {
        return (
            <div>
                <input className="username" placeholder="Username" onChange={(e)=> this.changeUsername(e.target.value)}></input>
                <input className="password" type="password" placeholder="Password" onChange={(e)=> this.changePassword(e.target.value)}></input>
                <button className="submit" onClick={()=>{this.display()}}>Submit</button>
            </div>
        )
    }
}
