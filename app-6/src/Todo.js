import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        return (
            <div>
                <ul>
                   {this.props.mappedList}
                </ul>
            </div>
        )
    }
}
