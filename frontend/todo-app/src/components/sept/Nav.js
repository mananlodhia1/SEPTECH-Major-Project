import React, { Component } from 'react';
import AppMenu from './AppMenu';

class Nav extends Component {
  render() {
    let links = [
      { label: 'Chat', link: '#Chat', active: true },
      { label: 'Wall', link: '#Wall' },
      { label: 'Profile', link: '#Profile' },
      { label: 'Login', link: '#Login' },
    ];

    return (
      <div className="container center">
        <AppMenu links={links} />
      </div>
    );
  }
}

export default Nav;