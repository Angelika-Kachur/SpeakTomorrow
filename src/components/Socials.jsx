import React, { Component } from "react";

class Socials extends Component {
  render() {
    return (
      <ul className="socials">
        <li>
          <a
            href="https://www.instagram.com/toma.tomorrow"
            target="_blank"
            className="icon-social-instagram"
          />
        </li>
        <li>
          <a
            href="https://www.facebook.com/tachilina"
            target="_blank"
            className="icon-social-facebook"
          />
        </li>
        <li>
          <a href="#twitter" target="_blank" className="icon-social-twitter" />
        </li>
      </ul>
    );
  }
}

export default Socials;
