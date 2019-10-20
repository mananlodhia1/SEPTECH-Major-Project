import React, { Component } from 'react'
import ChatInput from './ChatInp'
import ChatMessage from './ChatMsg'
import './Chat.css'

const URL = 'ws://localhost:3030'

//message array
class Chat extends Component{
    state = {
        name: '',
        messages: [],
    }

    ws = new WebSocket(URL)

    //WebSockets
    componentDidMount(){
        this.ws.onopen = () => {
            console.log('connected')
        }
        
        this.ws.onmessage = evt => {
            const message = JSON.parse(evt.data)
            this.addMessage(message)
        }

        this.ws.onclose = () => {
            console.log('disconnected')
            this.setState({
                ws: new WebSocket(URL),
            })
        }
    }
    
    //add message to array
    addMessage = message => this.setState( 
        state => ({
            messages: [message, ...state.messages]
        })
    )
    
    //json websocket handler
    submitMessage = messageString => {
        const message = { name: this.state.name, message: messageString}
        this.ws.send(JSON.stringify(message))
        this.addMessage(message)
    }
    render(){
        return(
            <div>
                <label htmlFor="name">
                    <input type="text"
                    id={'name'}
                    placeholder={'Enter your name....'}
                    value={this.state.name}
                    onChange={this.handleUser1}>
                    </input>
                </label>
                
                <ChatInput
                ws = {this.ws}
                onSubmitMessage = {messageString=>
                this.submitMessage(messageString)}>
                </ChatInput>
                {this.state.messages.map((message,index)=>
                    <ChatMessage 
                    key = {index}
                    message = {message.message}
                    name = {message.name}>,

                    </ChatMessage>)}
            </div>
        )
    }

    handleUser1 = (e) => {
        this.setState({name: e.target.value});
    };
  
}

export default Chat
