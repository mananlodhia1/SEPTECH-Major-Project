import React, {Component} from 'react';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            sid: 0,
            course: ''
        };
    }


    componentDidMount() {
        // Create dummy profile:
        this.setState({
            name: 'Eyup',
            sid: 3686150,
            course: 'SoftEng'
        })
    }

    render() {
        return (
            <div className="Profile">
                <div>{this.state.name}</div>
                <div>s{this.state.sid}</div>
                <div>{this.state.course}</div>
            </div>
        )
    }

}

export default Profile;
