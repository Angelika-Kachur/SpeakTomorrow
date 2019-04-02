import React, { Component } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
class Header extends Component {

    render() {
        return (
            <header className="header">
                <div className="holder">
                    <Logo />
                    <Navigation />
                </div>
            </header>
        );
    };
};
  
export default Header;