import React, { Component } from 'react'
import './sept.css';
import Profile from './Profile.jsx'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


class EditProfile extends React.Component {

  onClick = () => this.props.history.push("/Profile");

  constructor(props) {
    super(props);
    this.state = {
        name: '',
        course: '',
        bio: ''};

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCourseChange = this.handleCourseChange.bind(this);
    this.handleBioChange = this.handleBioChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    alert('Profile updated');
    event.preventDefault();
  }

    render() {
        return (
          <form action="url" onSubmit={this.handleSubmit} >
            <div className="Registration">
                <h1>Edit Profile</h1>
             <hr></hr>

            <img className="avatar" src={require('../Images/img_avatar.png') } />

            <label for="fname"> <b>Full Name</b></label>
            <input type="text" placeholder="Enter full name" name="fName" value={this.state.value} onChange={this.handleNameChange} ></input>
    
            <label for="course"> <b>Course</b></label>
            <input type="text" placeholder="Enter Course" name="course" value={this.state.value} onChange={this.handleCourseChange} ></input>
    
            <label for="bio"> <b>Bio</b></label>
            <input type="text" placeholder="Enter Bio" name="bio" value={this.state.value} onChange={this.handleBioChange} ></input>
    
            <div class="clearfix">
              <button type="button" class="cancelbtn" onClick={this.onClick}>Cancel</button>
              <button type="submit" class="signupbtn" onClick={this.onClick}>Update</button>
           </div>

          <div>
              <Route path="/Profile" component={Profile}/>
          </div>

          </div>
        </form>
        );
      }
    }

export default EditProfile;
