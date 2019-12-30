import React, { Component } from 'react'

export default class TodoItems extends Component {
    // createTasks = (item) => {
    //     return <li key={item.key}>{item.text}</li>
    // }
    render() {
        return (
            <ul>
                {this.props.xx.map(el=><><li key={el.key}>{el.text}</li> <button >fgkjfd</button></>)}
            </ul>
        )
    }
}
