import React from 'react'

function Person(props) {
  return (
    <div>
      <h1 onClick={props.myclick}>
        I am {props.name}, I am {props.age} years old
      </h1>
      <p>Hello world</p>
      <p onClick={props.myclick}>{props.children}</p> {/* hello world*/}
      <input type="text" onChange={props.onChange}></input>
    </div>
  )
}

export default Person
