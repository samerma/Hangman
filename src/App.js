import React, { Component } from 'react'
import './App.css';
import Score from './components/score'
import Solution from './components/solution'
import Letters from './components/letters'

class App extends Component {
  constructor() {
    super()
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: {
        word: 'samer',
        hint: 'me'
      },
      score: 100
    }
  }

  generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    letterStatus['A'] = true
    return letterStatus
  }
  render() {
    return (
      <div className="App" >
        <Score score={this.state.score} />
        <Solution letterStatus={this.state.letterStatus} solution={this.state.solution} />
        <Letters letterStatus={this.state.letterStatus} />
      </div>
    )
  }

}

export default App;
