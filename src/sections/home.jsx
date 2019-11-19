import React, { Component } from "react";
import Welcome from "../sections/welcome.jsx";
import AboutSchool from "../sections/aboutSchool.jsx";
import Advantages from "../sections/advantages.jsx";
import Groups from "../sections/groups.jsx";
import OurTeam from "../sections/ourTeam.jsx";
import Reviews from "../sections/reviews.jsx";
import Contacts from "../sections/contacts.jsx";
import ForWho from "../sections/forWho.jsx";

class homePage extends Component {
  render() {
    return (
      <div id="home-section" className="page-content">
        <Welcome />
        <AboutSchool />
        <Advantages />
        <Groups />
        <OurTeam />
        <ForWho />
        <Reviews />
        <Contacts />
      </div>
    );
  }
}

export default homePage;
