import React, { Component } from 'react'
import './Chat.css'
import Chat from './Chat.jsx'


class ChatMain extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"></h1>
        </header>
        <Chat />
      </div>
    )
  }
}

export default ChatMain