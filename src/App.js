import React, { Component } from 'react'
import Dice from './components/Dice'

export class App extends Component {
  state = {
    dice: [20, 12, 10, 8, 4, 100],
  }

  render() {
    return (
      <main>
        {this.state.dice.map((dice) => {
          return <Dice numberOfSides={dice} />
        })}
      </main>
    )
  }
}

export default App
