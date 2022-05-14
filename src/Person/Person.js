import React from 'react'

function Person(props) {
  return (
    <div>
      <h1>
        I am {props.name}, I am {props.age} years old
      </h1>
      <p>{props.children}</p> {/* hello world*/}
    </div>
  )
}

export default Person
