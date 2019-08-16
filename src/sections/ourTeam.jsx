import React, { Component } from "react";
import TitleSection from "../components/TitleSection.jsx";
import imageAbout from "../images/photo-toma.png";

var pageTitle = "Наши учителя";

class ourTeam extends Component {
  render() {
    return (
      <section className="about-section" data-aos="fade-right">
        <TitleSection title={pageTitle} />
        <div className="holder">
          <div className="about">
            <div className="image">
              <img src={imageAbout} alt="" />
            </div>
            <p>Информация об учителях</p>
          </div>
        </div>
      </section>
    );
  }
}

export default ourTeam;
