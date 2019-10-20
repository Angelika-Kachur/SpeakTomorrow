import React, { Component } from "react";
import Socials from "../components/Socials";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="holder">
          <Socials />
          <div className="copyright">
            © 2019 Speak Tomorrow. All Rights Reserved.
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
