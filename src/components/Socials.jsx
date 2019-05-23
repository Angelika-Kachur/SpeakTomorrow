import React, { Component } from "react";

class Socials extends Component {
  render() {
    return (
      <ul className="socials">
        <li>
          <a
            href="https://www.instagram.com/toma.tomorrow"
            className="icon-social-instagram"
          />
        </li>
        <li>
          <a href="#facebook" className="icon-social-facebook" />
        </li>
        <li>
          <a href="#twitter" className="icon-social-twitter" />
        </li>
      </ul>
    );
  }
}

export default Socials;
