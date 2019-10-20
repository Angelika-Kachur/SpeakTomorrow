import React, { Component } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="holder">
          <Logo />
          <Navigation />
          <a className="btn btn-ask-question" target="_blank" href="https://www.facebook.com/tachilina">Записаться</a>
        </div>
      </header>
    );
  }
}

export default Header;
