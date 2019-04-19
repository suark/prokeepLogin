import React, { Component } from 'react'
import './App.css'

import Login from '../loginScreen/login/Login'

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
        <Login />
        </header>
      </div>
    )
  }
}

export default App
