import React, { Component } from "react";
import TitleSection from "../components/TitleSection.jsx";
import About from "../pages/about.jsx";
import Groups from "../pages/groups.jsx";
import Reviews from "../pages/reviews.jsx";
import Contacts from "../pages/contacts.jsx";
import HowItWorks from "../pages/howItWorks.jsx";

var pageTitle = "Home";

class homePage extends Component {
  render() {
    return (
      <div className="page-content">
        {/* <TitleSection title={pageTitle} /> */}

        <section className="" />

        <About />
        <HowItWorks />
        <Groups />
        <Reviews />
        <Contacts />
      </div>
    );
  }
}

export default homePage;
