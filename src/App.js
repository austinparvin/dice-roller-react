import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'

export class App extends Component {
  state = {
    roll: '?',
  }

  rollDice = (e) => {
    const roll = Math.floor(Math.random() * 7)
    console.log(roll)
    this.setState({
      roll: roll,
    })
  }

  render() {
    return (
      <main>
        <p className="result">{this.state.roll}</p>
        <button onClick={this.rollDice} className="roll-button">
          Roll D6
        </button>
      </main>
    )
  }
}

export default App
