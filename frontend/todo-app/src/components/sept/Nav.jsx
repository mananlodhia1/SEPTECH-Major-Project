import React, { Component } from 'react';
import AppMenu from './AppMenu';

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let links = [
      { label: 'Chat', link: '#Chat', active: true },
      { label: 'Wall', link: '/posts' },
      { label: 'Profile', link: '/profile' },
      { label: 'Login', link: '/login' },
      { label: 'Search', link: '/search'}
    ];

    return (
      <div className="container center">
        <AppMenu links={links} history={this.props.history}/>
      </div>
    );
  }
}

export default Nav;