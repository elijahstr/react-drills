import React, { Component } from 'react'

export default class List extends Component {
    render() {
        const mappedList = this.props.unMapped.map((item)=> <li>{item}</li>)

        return (
            <div>
                <ul>
                    {mappedList}
                </ul>
            </div>
        )
    }
}
