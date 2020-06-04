import React, { Component } from 'react'
class Score extends Component {
    state = {}
    render() {
        return (
            <div>
                {this.props.score}
            </div>
        )
    }
}

export default Score