import React, { Component } from 'react';
import List from "./List"

export default class Todo extends Component {
    render() {
        return (
            <div>
                <List unMapped={this.props.theList} />
            </div>
        )
    }
}
