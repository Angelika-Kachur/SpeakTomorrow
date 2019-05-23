import React, { Component } from "react";
import logoImage from "../images/logo.png";
import { Link, animateScroll as scroll } from "react-scroll";

class Logo extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <div className="logo">
        <img
          to="home-section"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          src={logoImage}
          className="logo-image"
          alt="Logo"
          onClick={this.scrollToTop}
        />{" "}
      </div>
    );
  }
}

export default Logo;
