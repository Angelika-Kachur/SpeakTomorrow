import React, { Component } from "react";

class Socials extends Component {
  render() {
    return (
      <ul className="socials">
        <li>
          <a
            href="https://www.instagram.com/toma.tomorrow"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-social-instagram"
          >
            <span>
              Instagram 
            </span>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/tachilina"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-social-facebook"
          >
            <span>
              Facebook 
            </span> 
          </a>
        </li>
        <li>
          <a href="#twitter" target="_blank" rel="noopener noreferrer" className="icon-social-twitter">
            <span>
              Twitter 
            </span> 
          </a>
        </li>
      </ul>
    );
  }
}

export default Socials;
