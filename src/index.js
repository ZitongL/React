import React from 'react'
//version 17
// import ReactDOM from 'react-dom'
//version 18
import ReactDOM from 'react-dom/client'
import App from './App'
//version 17

// ReactDOM.render(<App />, document.getElementById('root'))
//version 18
const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<App />)
