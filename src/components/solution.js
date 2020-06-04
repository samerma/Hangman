import React, { Component } from 'react'
import Letter from './letter'
class Solution extends Component {
    render() {
        const letters = this.props.solution.word.split('')
        const letterStatus = this.props.letterStatus
        return (
            <div>
                <p>{letters.map(l => <Letter key={l} letter={letterStatus[l] ? l : '_ '} />)}</p>
                <p>{this.props.solution.hint}</p>
            </div>
        )
    }
}

export default Solution