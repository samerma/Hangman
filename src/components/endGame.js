import React, { Component } from 'react';
class EndGame extends Component {
    render() {
        return (
            <div>
                {
                    this.props.gameOver === 'no' ?
                        null :
                        <div>
                            {this.props.gameOver === 'win' ?
                                <p>Congratulations You Win</p> :
                                <p>You Lose</p>}
                            <button onClick={this.props.restartGame}>restart game</button>
                        </div>
                }
            </div>
        );
    }
}

export default EndGame;