import React, { Component } from 'react';
import logoImage from '../images/logo.png';

class Logo extends Component {

    render() {
        return (
            <div className="logo">
                <img src={logoImage} className="logo-image" alt="logo" />
            </div>
        );
    };
};
  
export default Logo;