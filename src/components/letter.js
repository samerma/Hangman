import React, { Component } from 'react'
class Letter extends Component {
    letterClick = () => {
        this.props.letterClick(this.props.letter)
    }
    render() {
        return (
            <em className={this.props.className} onClick={this.letterClick}>
                {this.props.letter}
            </em>
        )
    }
}

export default Letter 