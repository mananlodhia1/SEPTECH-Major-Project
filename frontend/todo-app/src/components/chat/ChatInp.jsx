import React, { Component } from 'react'
import PropTypes from 'prop-types'



class chatInp extends Component{
    //static message handler
    static propTypes ={
        onSubmitMessage: PropTypes.func.isRequired,
    }
    state={
        message: ''
    }

    //form handler
    render(){
        return(
            <form action="."
                className="send-message-form"
                onSubmit ={e => {
                    e.preventDefault()
                    this.props.onSubmitMessage(this.state.message)
                    this.setState({message: ''})
                    
            }}
            >
                <input type = "text"
                required
                placeholder={'Enter message...'}
                value={this.state.message}
                onChange={e => this.setState({ message: e.target.value })}>

                </input>
                <input type="submit" value={'Send'}></input>
            </form>
        )
    }
}

export default chatInp