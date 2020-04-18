import React, { Component } from 'react'

class Dice extends Component {
  state = {
    roll: '?',
    numberOfSides: this.props.numberOfSides,
  }

  rollDice = () => {
    const roll = Math.ceil(Math.random() * this.state.numberOfSides)
    this.setState({
      roll: roll,
    })
  }

  render() {
    return (
        
      <>
        <p className="result">{this.state.roll}</p>
        <button onClick={this.rollDice} className="roll-button">
          Roll D{this.props.numberOfSides}
        </button>
      </>
    )
  }
}

export default Dice
