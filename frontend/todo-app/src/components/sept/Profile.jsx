import React, { Component } from 'react';
import './sept.css';
import ProfileService from '../../api/sept/ProfileService.js';
import AppMenu from './AppMenu';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            sid: 0,
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
                        sid: response.data.sid,
                        course: response.data.course,
                        bio: response.data.bio
                    })
                }
            )
    }

    render() {
        let links = [
            { label: 'Home', link: '/index', },
            { label: 'Chat', link: '/index', },
            { label: 'User Posts', link: '/posts', },
            { label: 'Profile', link: '/profile', active: true },
            { label: 'Logout', link: '/logout' },
        ];

        return (
            <div>
                <div className="container center">
                    <AppMenu links={links} history={this.props.history} />
                </div>
        
                <div className="Profile">
                    <div className='profileField' id='profileName'>{this.state.name}</div>
                    <div className='profileField' id='profileSid'>s{this.state.sid}</div>
                    <div>
                        <span className='profileField' id='profileCourseLabel'>Course:</span>
                        <span className='profileField' id='profileCourse'>{this.state.course}</span>
                    </div>
                    <div className='profileField' id='profileBio'>{this.state.bio}</div>
                    <br/>
                </div>
            </div>
        );
    }

}

export default Profile;
