import React, { Component } from 'react'
import './sept.css';
import Profile from './Profile.jsx'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


class EditProfile extends React.Component {

  onClick = () => this.props.history.push("/Profile");

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
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

            <label for="fname"> <b>First Name</b></label>
            <input type="text" placeholder="Enter first name" name="fName" value={this.state.value} onChange={this.handleChange} ></input>
    
            <label for="lname"> <b>Last Name</b></label>
            <input type="text" placeholder="Enter last name" name="lName" value={this.state.value} onChange={this.handleChange} ></input>
    
            <label for="course"> <b>Course</b></label>
            <input type="text" placeholder="Enter Course" name="course" value={this.state.value} onChange={this.handleChange} ></input>
    
            <label for="bio"> <b>Bio</b></label>
            <input type="text" placeholder="Enter Bio" name="bio" value={this.state.value} onChange={this.handleChange} ></input>
    
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
