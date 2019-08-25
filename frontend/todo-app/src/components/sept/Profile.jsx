import React, {Component} from 'react';
import './sept.css'

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
        this.setState({
            name: 'Eyup Keskin',
            sid: 3686150,
            course: 'SoftEng',
            bio: 'I am very boring'
        })
    }

    render() {
        return (
            <div className="Profile">
                <div className='proffield' id='profname'>{this.state.name}</div>
                <div className='proffield' id='profsid'>s{this.state.sid}</div>
                <div>
                    <span className='proffield' id='profcourselabel'>Course:</span>
                    <span className='proffield' id='profcourse'>{this.state.course}</span>
                </div>
                <div className='proffield' id='profbio'>{this.state.bio}</div>
                <br/>
            </div>
        )
    }

}

export default Profile;
