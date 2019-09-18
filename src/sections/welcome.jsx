import React, { Component } from "react";
import TitleSection from "../components/TitleSection.jsx";

var pageTitle = "Welcome!";

class welcome extends Component {
  render() {
    return (
      <section className="welcome-section section">
        <div className="holder">
          <TitleSection title={pageTitle} />
          <div className="text">
            <p>Let’s speak tomorrow!</p>
          </div>
        </div>
      </section>
    );
  }
}

export default welcome;
