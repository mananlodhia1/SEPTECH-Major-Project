import React, { Component } from 'react'
import './sept.css';
import Profile from './Profile.jsx'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ProfileService from '../../api/sept/ProfileService.js'


class EditProfile extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			course: '',
      		bio: ''
    	};

		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleCourseChange = this.handleCourseChange.bind(this);
		this.handleBioChange = this.handleBioChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	cancel = () => {
		this.props.history.push('/profile')
	}

	handleNameChange(event) {
		this.setState({name: event.target.value});
	}

	handleCourseChange(event) {
		this.setState({course: event.target.value});
	}

	handleBioChange(event) {
		this.setState({bio: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		ProfileService.updateProfile(this.state.name, this.state.course, this.state.bio)
		.then(reponse => {
			this.props.history.push("/profile");
		})
		.catch(() => {
			alert("Error")
		})
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="Registration">
					
					<h1>Edit Profile</h1>
					<hr></hr>

					<img className="avatar" src={require('../Images/img_avatar.png') } />

					<label for="name"> <b>Full Name</b></label>
					<input type="text" placeholder="Enter full name" name="name" onChange={this.handleNameChange} ></input>
			
					<label for="course"> <b>Course</b></label>
					<input type="text" placeholder="Enter Course" name="course" onChange={this.handleCourseChange} ></input>
			
					<label for="bio"> <b>Bio</b></label>
					<input type="text" placeholder="Enter Bio" name="bio" onChange={this.handleBioChange} ></input>
			
					<div class="clearfix">
						<button type="button" class="cancelbtn" onClick={this.cancel}>Cancel</button>
						<button type="submit" class="signupbtn">Update</button>
					</div>

				</div>
			</form>
		);
	}
}

export default EditProfile;
