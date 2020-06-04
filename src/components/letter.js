import React, { Component } from 'react'
class Letter extends Component {
    state = {}
    render() {
        return (
            <em className={this.props.className}>
                {this.props.letter}
            </em>
        )
    }
}

export default Letter 