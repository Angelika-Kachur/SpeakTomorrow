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
          <button className="btn btn-ask-question">Задать вопрос</button>
        </div>
      </header>
    );
  }
}

export default Header;
