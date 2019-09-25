import React, { Component } from 'react'
import LoginComponent from './LoginComponent';
import {Link} from 'react-router-dom'

class LogoutComponent extends Component {
    render() {
        return (
            <div className="logmessage">
                <h1>You are logged out</h1>
                <div className="container">
                    Thank You for Using Our Application.<br/>

                    <Link to='/login'>
                    <button className="btn2" type="button" >Click Here To Login</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default LogoutComponent