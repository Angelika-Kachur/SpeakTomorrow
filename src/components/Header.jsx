import React, { Component } from "react";
import Logo from "./Logo";
import BurgerMenu from "./BurgerMenu";
import Navigation from "./Navigation";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="holder">
          <Logo />
          <BurgerMenu />
          <Navigation />
        </div>
      </header>
    );
  }
}

export default Header;
