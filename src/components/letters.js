import React, { Component } from 'react'
import Letter from './letter'
class Letters extends Component {
    render() {
        return (
            <div>
                {Object.keys(this.props.letterStatus).map(l =>
                    <Letter key={l} className={this.props.letterStatus[l] ? 'selected' : 'non-selected'} letter={l} letterClick={this.props.letterClick} />)}
            </div>
        )
    }
}

export default Letters