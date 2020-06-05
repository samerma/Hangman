import React, { Component } from 'react'
import './App.css';
import Score from './components/score'
import Solution from './components/solution'
import Letters from './components/letters'
import EndGame from './components/endGame';

class App extends Component {
  constructor() {
    super()
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: {
        word: 'SAMER',
        hint: 'me'
      },
      score: 100,
      gameOver: 'no'
    }
  }
  letterClick = (letter) => {
    if (this.state.letterStatus[letter] || this.state.gameOver !== 'no') return
    let letterStatuses = { ...this.state.letterStatus }
    letterStatuses[letter] = true
    this.setState({ letterStatus: letterStatuses }, () => {
      let flag = true
      this.state.solution.word.split('').forEach(l => flag = flag * this.state.letterStatus[l])
      if (flag)
        this.setState({ gameOver: 'win' })
    })
    this.state.solution.word.split('').find(l => l === letter) ?
      this.setState({ score: this.state.score + 5 }, () => {
        if (this.state.score <= 0)
          this.setState({ gameOver: 'lose' })
      }) :
      this.setState({ score: this.state.score - 20 < 0 ? 0 : this.state.score - 20 }, () => {
        if (this.state.score <= 0)
          this.setState({ gameOver: 'lose' })
      })
  }
  restartGame = () => {
    this.setState({
      letterStatus: this.generateLetterStatuses(),
      solution: {
        word: 'WORD',
        hint: 'its a word'
      },
      score: 100,
      gameOver: 'no'
    })
  }

  generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }
  render() {

    return (
      <div className="App" >
        <Score score={this.state.score} />
        <Solution letterStatus={this.state.letterStatus} solution={this.state.solution} />
        <Letters letterStatus={this.state.letterStatus} letterClick={this.letterClick} />
        <EndGame gameOver={this.state.gameOver} restartGame={this.restartGame} />
      </div>
    )
  }
}

export default App;
