import React, { Component } from 'react'
import ChatInput from './chatInp'
import ChatMessage from './chatMsg'

const URL = 'ws://localhost:3030'

//message array
class chat extends Component{
    state = {
        name: 'Bob',
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
                    Name:&nbsp;
                    <input type="text"
                    id={'name'}
                    placeholder={'Enter your name....'}
                    value={this.state.name}
                    onChange={e=> this.setState( {name: e.target.value})}>
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

}

export default chat