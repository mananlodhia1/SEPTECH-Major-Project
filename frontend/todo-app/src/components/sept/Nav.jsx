import React, { Component } from 'react';
import AppMenu from './AppMenu';

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let links = [
      { label: 'Home', link: '/index', active: true },
      { label: 'Chat', link: '/index', },
      { label: 'User Posts', link: '/posts', },
      { label: 'Profile', link: '/profile' },
      { label: 'Login', link: '/login' },
    ];

    return (
      <div className="container center">
        <AppMenu links={links} history={this.props.history}/>
      </div>
    );
  }
}

export default Nav;