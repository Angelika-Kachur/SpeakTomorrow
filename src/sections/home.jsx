import React, { Component } from "react";
import About from "../sections/about.jsx";
import AboutSchool from "../sections/aboutSchool.jsx";
import Groups from "../sections/groups.jsx";
import Blog from "../sections/blog.jsx";
import Reviews from "../sections/reviews.jsx";
import Contacts from "../sections/contacts.jsx";
import HowItWorks from "../sections/howItWorks.jsx";
import ForWho from "../sections/forWho.jsx";

class homePage extends Component {
  render() {
    return (
      <div id="home-section" className="page-content">
        <AboutSchool />
        <HowItWorks />
        <ForWho />
        <About />
        <Groups />
        <Reviews />
        <Contacts />
        <Blog />
      </div>
    );
  }
}

export default homePage;
