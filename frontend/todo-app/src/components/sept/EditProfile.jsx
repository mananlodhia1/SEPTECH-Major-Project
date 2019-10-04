import React, { Component } from 'react'
import './sept.css';

class EditProfile extends React.Component {
    render() {
        return (
          <form action="action_page.php" >
            <div className="Registration">
                <h1>Edit Profile</h1>
             <hr></hr>

            <img className="avatar" src={require('../Images/img_avatar.png') } />

            <label for="fname"> <b>First Name</b></label>
            <input type="text" placeholder="Enter first name" name="fName" ></input>
    
            <label for="lname"> <b>Last Name</b></label>
            <input type="text" placeholder="Enter last name" name="lName" ></input>
    
            <label for="course"> <b>Course</b></label>
            <input type="text" placeholder="Enter Course" name="course" ></input>
    
            <label for="bio"> <b>Bio</b></label>
            <input type="text" placeholder="Enter Bio" name="bio" ></input>
    
            <div class="clearfix">
              <button type="button" class="cancelbtn">Cancel</button>
              <button type="submit" class="signupbtn">Update</button>
           </div>
    
          </div>
        </form>
        );
      }
    }

export default EditProfile;
