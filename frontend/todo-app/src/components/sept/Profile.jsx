import React, { Component } from 'react';
import './sept.css';
import ProfileService from '../../api/sept/ProfileService.js';
import AppMenu from './AppMenu';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import EditProfile from './EditProfile.jsx'
import AuthenticationService from './AuthenticationService';




class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            sid: '',
            course: '',
            bio: ''
        };
    }


    componentDidMount() {
        // Create dummy profile: (comment out after testing)
        // this.setState({
        //     name: 'Eyup Keskin',
        //     sid: 3686150,
        //     course: 'SoftEng',
        //     bio: 'I am very boring'
        // })

        // Retrieve profile
        ProfileService.retrieveProfile(3686150)
            .then(
                response => {
                    this.setState({
                        name: response.data.name,
                        sid: AuthenticationService.getLoggedInUserName(),
                        course: response.data.course,
                        bio: response.data.bio
                    })
                }
            )
    }

    onClick = () => this.props.history.push("/editProfile");
    

    render() {
        return (
            <div>
                <div className="container center">
                    <AppMenu link="Profile" history={this.props.history} />
                </div>

                <div class="container_profile">
                    <img className="avatar" src={require('../Images/img_avatar.png')} />
                    <hr />
                    <div className="container_left_profile_name"> {this.state.name}</div>
                    <div className="container_left_profile"><img className="icon-id-profile" src={require('../Images/id.png')} />{this.state.sid}</div>
                    <div className="container_left_profile"><img className="icon-profile" src={require('../Images/course.png')} /> {this.state.course}</div>
                    <hr />
                    <div className="container_left_profile_bio"><img className="icon-profile" src={require('../Images/bio.png')} /> {this.state.bio}</div>
                    <br/>
                </div>

            </div>
        );
    }

}

export default Profile;
