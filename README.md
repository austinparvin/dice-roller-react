# Dice Roller React

This is a web app that allows you to roll virtual dice, created using React 

# Objectives

- Build on your knowledge of HTML, CSS, & Javascript
- Use React Components
- Learn to identify parts of a web site as Components
- Understand and use "props" in React

# Includes: 

- [REACT](https://reactjs.org/docs/getting-started.html)

## Live Site

[LIVE SITE](https://react-intro-austinparvin.netlify.app/)

![Dice Roller React](http://g.recordit.co/CywTXdGcgC.gif)

## Featured Code

### Main App Component Mapping Over Array Creating 'Dice' Components

```JSX
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

 ```
 
