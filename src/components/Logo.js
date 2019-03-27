import React, { Component } from 'react';
import logoImage from '../logo.svg';

class Logo extends Component {

    render() {
        return (
            <div className="logo">
                <img src={logoImage} className="App-logo" alt="logo" />
            </div>
        );
    };
};
  
export default Logo;