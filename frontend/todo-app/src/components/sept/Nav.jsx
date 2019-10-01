import React, { Component } from 'react';
import AppMenu from './AppMenu';

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container center">
        <AppMenu history={this.props.history}/>
      </div>
    );
  }
}

export default Nav;