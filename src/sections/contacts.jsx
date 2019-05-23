import React, { Component } from "react";
import Map from "../components/Map";
import TitleSection from "../components/TitleSection.jsx";

var pageTitle = "Contacts";

class contactsPage extends Component {
  render() {
    return (
      <section id="contacts" className="contacts-section" data-aos="fade-right">
        <TitleSection title={pageTitle} />
        <div className="holder">
          <div className="text">
            <h2 className="title">У вас есть вопрос?</h2>
            {/* <p>Hello {name}</p> */}
            <p>С нами ты можешь выучить английской с любого уголка Земли</p>
          </div>

          <form className="contacts-form" action="#">
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <label>
              Phone:
              <input type="tel" name="name" />
            </label>
            <label>
              Email:
              <input type="email" name="name" />
            </label>
            <label>
              Message:
              <textarea>Hello there, this is some text in a text area</textarea>
            </label>

            <input type="submit" value="Submit" />
          </form>
        </div>
        <Map />
      </section>
    );
  }
}

export default contactsPage;
