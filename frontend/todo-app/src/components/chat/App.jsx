import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Chat from './chat'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Chat</h1>
        </header>
        <Chat />
      </div>
    )
  }
}

export default App