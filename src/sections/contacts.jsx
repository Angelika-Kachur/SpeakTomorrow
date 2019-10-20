import React, { Component } from "react";
//import Map from "../components/Map";
import TitleSection from "../components/TitleSection.jsx";

var pageTitle = "Contacts";

class contactsPage extends Component {
  render() {
    return (
      <section
        id="contacts"
        className="contacts-section section"
        data-aos="fade-up">
        <TitleSection title={pageTitle} />
        <div className="holder">
          <form className="contacts-form" action="#">
            <label>
              Name:
              <input className="input" type="text" name="name" />
            </label>
            <label>
              Phone:
              <input  className="input" type="tel" name="name" />
            </label>
            <label>
              Email:
              <input  className="input" type="email" name="name" />
            </label>
            <label>
              Message:
              <textarea>Hello there, this is some text in a text area</textarea>
            </label>

            <input type="submit" className="btn" value="Submit" />
          </form>
        </div>
        {/* <Map /> */}
      </section>
    );
  }
}

export default contactsPage;
