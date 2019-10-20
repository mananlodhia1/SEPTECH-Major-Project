import React, { Component } from 'react';
import './index.css';
import AppMenu from './AppMenu';
import ListPost from '../Wall/ListPosts';
import moment from 'moment';
import '../Wall/ListPosts';

import ProfileService from '../../api/sept/ProfileService.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EditProfile from './EditProfile.jsx';
import AuthenticationService from './AuthenticationService';

class Index extends ListPost {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('componentDidMount')
        this.refreshPosts();
        console.log(this.state)
    ProfileService.retrieveProfile()
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

  render() {
    return (
      <div>

        <div className="container center">
          <AppMenu link="Home" history={this.props.history} />
        </div>

        <div class="container_mini_profile">
          <h4>My Profile</h4>
          <img className="avatar_mini" src={require('../Images/img_avatar.png')} />
          <hr />
          <div className="container_left"><img className="icon" src={require('../Images/name.png')} /> {this.state.name}</div>
          <div className="container_left"><img className="icon_id" src={require('../Images/id.png')} />{this.state.sid}</div>
          <div className="container_left"><img className="icon" src={require('../Images/course.png')} /> {this.state.course}</div>
          <div className="container_left"><img className="icon" src={require('../Images/bio.png')} /> {this.state.bio}</div>
          <br />
        </div>
        <div className="post-container-container-home">
          {
            this.state.posts.map(
              post =>
                <div className="post-container-home" key={post}>
                  <p>{post.description}</p>
                  <div className="date">{moment(post.targetDate).format('YYYY-MM-DD')}</div>
                </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default Index;
