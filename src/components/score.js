import React, { Component } from 'react'
class Score extends Component {
    state = {}
    render() {
        let scoreColor = 'green-score'
        if (this.props.score < 80 && this.props.score >= 50)
            scoreColor = 'yellow-score'
        if (this.props.score < 50)
            scoreColor = 'red-score'

        return (
            <div className={scoreColor}>
                {this.props.score}
            </div>
        )
    }
}

export default Score