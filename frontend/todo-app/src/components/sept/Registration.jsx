import React, { Component } from 'react'
import './sept.css';

class Registration extends React.Component {
  render() {
    return (
      <form action="action_page.php" >
        <div className="Registration">
    
            <h1>Registration Form</h1>
            <p>Please enter all details to successfully create an account</p>
         <hr></hr>

        <label for="fname"> <b>First Name</b></label>
        <input type="text" placeholder="Enter first name" name="fName" required></input>

        <label for="lname"> <b>Last Name</b></label>
        <input type="text" placeholder="Enter last name" name="lName" required></input>

        <label for="sId"> <b>Enter student Id</b></label>
        <input type="text" placeholder="Enter student Id" name="sId" required></input>

        <label for="course"> <b>Course</b></label>
        <input type="text" placeholder="Enter Course" name="course" required></input>

        <label for="bio"> <b>Bio</b></label>
        <input type="text" placeholder="Enter Bio" name="bio" required></input>

        <label for="psw"> <b>Password</b></label>
        <input type="password" placeholder="Enter password" name="psw" required></input>

        <label for="psw-repeat"> <b>Re-enter Password</b></label>
        <input type="password" placeholder="Confirm password " name="psw-repeat" required></input>
       
        <p> By creating an account you agree to our <a href="#">Terms and Privacy conditions</a>.</p> 

        <div class="clearfix">
          <button type="button" class="cancelbtn">Cancel</button>
          <button type="submit" class="signupbtn">Register</button>
       </div>

      </div>
    </form>
    );
  }
}

export default Registration;
