import React, { Component } from 'react';
import './index.css';
import AppMenu from './AppMenu';

class Index extends Component {
    constructor(props) {
        super(props);
      }
    
      render() {
        return (
          <div>
          <div className="container center">
            <AppMenu link="Home" history={this.props.history}/>
          </div>
          <img className="image" src={require('../Images/logo.png') } />
          </div>
        );
      }
    }

    export default Index;
