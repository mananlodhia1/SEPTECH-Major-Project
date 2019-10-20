import React, { Component } from 'react'
import LoginComponent from './LoginComponent';
import {Link} from 'react-router-dom'
import ProfileService from '../../api/sept/ProfileService';
import AuthenticationService from './AuthenticationService';

class LogoutComponent extends Component {

    componentDidMount() {
        AuthenticationService.logout();
    }

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