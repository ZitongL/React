import React, { Component } from 'react'
import Person from './Person/Person'
import './App.css'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Person name="Lisa" age="20" />
        <Person name="Mary" age="21" />
        <Person name="Peter" age="22">
          hello world
        </Person>
      </div>
    )
  }
}

export default App
