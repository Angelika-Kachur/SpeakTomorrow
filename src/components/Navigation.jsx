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
              to="aboutSchool-section"
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
              to="about-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="howItWorks-section"
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
              to="blog-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Blog
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
          <li>
            <Link
              to="editor-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Add Article
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
