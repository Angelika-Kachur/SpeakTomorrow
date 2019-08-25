import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

class Navigation extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="navigation">
        <ul className="navigation-list">
          <li>
            <Link
              to="about-school-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About School
            </Link>
          </li>
          <li>
            <Link
              to="how-it-works-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              How it works
            </Link>
          </li>
          <li>
            <Link
              to="our-team-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Our Team
            </Link>
          </li>
          <li>
            <Link
              to="groups-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Groups
            </Link>
          </li>
          <li>
            <Link
              to="reviews-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Reviews
            </Link>
          </li>
          <li>
            <Link
              to="contacts-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
