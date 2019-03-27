import React, { Component } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
class Header extends Component {

    render() {
        return (
            <header className="App-header">
                <Logo />

                <Navigation />
            </header>
        );
    };
};
  
export default Header;