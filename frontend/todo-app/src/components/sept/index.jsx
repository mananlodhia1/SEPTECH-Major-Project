import React, { Component } from 'react';
import './index.css';
import AppMenu from './AppMenu';

class Index extends Component {
    constructor(props) {
        super(props);
      }
    
      render() {
        let links = [
            { label: 'Home', link: '/index', active: true },
            { label: 'Chat', link: '/index', },
            { label: 'User Posts', link: '/posts' },
            { label: 'Profile', link: '/profile' },
            { label: 'Logout', link: '/logout' },
        ];
    
        return (
          <div>
          <div className="container center">
            <AppMenu links={links} history={this.props.history}/>
          </div>
          <img className="image" src={require('../Images/logo.png') } />
          </div>
        );
      }
    }

    export default Index;