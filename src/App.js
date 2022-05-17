import React, { Component } from 'react'
import Person from './Person/Person'
import './App.css'
class App extends Component {
  //js syntax
  //variable: var,let,const
  //call a function: fun(para)
  state = {
    persons: [
      { name: 'Lisa', age: '20' },
      { name: 'Mary', age: '21' },
      { name: 'Peter', age: '22' },
    ],
    otherState: 'anything is possible(for the third component)',
  }
  changeName = (myName, myAge, no) => {
    this.setState({
      persons: [
        { name: myName, age: myAge },
        { name: 'Mary', age: '21' },
        { name: 'Peter', age: '22' },
      ],
    })
  }

  changeNameHandle = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: '23' },
        { name: 'Mary', age: '21' },
        { name: 'Peter', age: '22' },
      ],
    })
  }

  render() {
    //jsx syntax:
    //variable: {}
    //call a function: ()=>fun(para) || fun().bind(this,para)
    return (
      <div className="App">
        <button onClick={this.changeName.bind(this, 'Li', '23', '1')}>
          change state
        </button>
        <Person
          onChange={this.changeNameHandle}
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          myclick={this.changeName.bind(this, 'Qiao', '23')}
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          myclick={this.changeName.bind(this, 'Qiao', '23')}
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        >
          {this.state.otherState}
        </Person>
      </div>
    )
  }
}

export default App
