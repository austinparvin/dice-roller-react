# Dice Roller React

This is a web app that allows you to roll virtual dice, created using React 

# Objectives

- Build on your knowledge of HTML, CSS, & Javascript
- Use React Components
- Learn to identify parts of a web site as Components
- Understand and use "props" in React

# Includes: 

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://www.w3schools.com/css/)
- [FLEXBOX](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- [REACT](https://reactjs.org/docs/getting-started.html)
- [NETLIFY](https://docs.netlify.com/?_ga=2.56383019.1272475466.1587169866-1421079835.1583768648)

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
 
