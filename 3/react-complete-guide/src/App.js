import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Kamel", age: 24 },
      { name: "KamelMillionaire", age: 25 },
      { name: "KamelBillionaire", age: 26 }

    ]
  }
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 24 },
        { name: "KamelMillionaire", age: 25 },
        { name: "KamelBillionaire", age: 26 }
      ]
    })
  }
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 24 },
        { name: "KamelMillionaire", age: 25 },
        { name: "KamelBillionaire", age: 26 }
      ]
    })
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    };
    return (
      <div className="App">
        <h1>Hi, I'm a React App!!!</h1>
        <p>This is my first page using react</p>
        <input 
        type="text" 
        onChange={this.nameChangedHandler} 
        value={this.state.persons[0].name} 
        />
        <button 
        onClick={this.switchNameHandler.bind(this, "Kamel")}
        style={style}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
      </div>
    );

  }
}

export default App;
