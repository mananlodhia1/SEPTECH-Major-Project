import React, { Component } from 'react'
import './sept.css';
import ProfileService from '../../api/sept/ProfileService.js'

class Registration extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sid: '',
			password: '',
			name: '',
			course: '',
			bio: ''
		}
	}

	handleChange = (event) => {
		this.setState({[event.target.name] : event.target.value});
	}

	cancel = () => {
		this.props.history.push("/login");
	}

	register = () => {
		ProfileService.register(this.state.sid, this.state.password, this.state.name, this.state.course, this.state.bio)
			.then(response => {
				this.props.history.push("/login");
			})
			.catch(() => {
				alert('Error');
			})
	}

	
	render() {
		return (
			<div className="Registration">
				<h1>Registration Form</h1>
				<p>Please enter all details to successfully create an account</p>
				<hr></hr>

				<label for="name"> <b>Name</b></label>
				<input type="text" placeholder="Enter full name" name="name" onChange={this.handleChange} required></input>

				<label for="sid"> <b>Enter student ID</b></label>
				<input type="text" placeholder="Enter student ID" name="sid" onChange={this.handleChange} required></input>

				<label for="course"> <b>Course</b></label>
				<input type="text" placeholder="Enter Course" name="course" onChange={this.handleChange} required></input>

				<label for="bio"> <b>Bio</b></label>
				<input type="text" placeholder="Enter Bio" name="bio" onChange={this.handleChange} required></input>

				<label for="psw"> <b>Password</b></label>
				<input type="password" placeholder="Enter password" name="password" onChange={this.handleChange} required></input>

				<label for="psw-repeat"> <b>Re-enter Password</b></label>
				<input type="password" placeholder="Confirm password " name="psw-repeat"></input>
			
				<p> By creating an account you agree to our <a href="#">Terms and Privacy conditions</a>.</p> 

				<div class="clearfix">
					<button type="button" class="cancelbtn" onClick={this.cancel}>Cancel</button>
					<button type="submit" class="signupbtn" onClick={this.register}>Register</button>
				</div>

			</div>
		);
	}
}

export default Registration;
