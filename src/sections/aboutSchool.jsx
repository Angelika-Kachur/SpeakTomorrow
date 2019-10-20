import React, { Component } from "react";
import TitleSection from "../components/TitleSection.jsx";
import Socials from "../components/Socials.jsx";

var titleAboutSchool = "Про школу:";
var titleSocials = "Мы в социальных сетях:";

class aboutSchool extends Component {
  render() {
    return (
      <section className="about-school-section section">
        <div className="holder">
          <div className="about-school">
            <div className="col">
              <TitleSection title={titleAboutSchool} />
              <p>
                Speak Tomorrow это школа английского, где вас научат говорить уверенно.
              </p>
              <p>
                Главным в работе со студентами мы считаем индивидуальный подход к каждому. Английский должен помогать решать Ваши задачи. Именно поэтому, мы учитываем Вашу специфику работы и Ваши личные цели.
              </p>
              <p>
                Мы научим вас общаться, объясняться, спорить, шутить и доказывать свою точку зрения. Вы будете жить на английском и считать его частью своей жизни.
              </p>
            </div>
            <div className="col">
              <TitleSection title={titleSocials} />
              <Socials />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default aboutSchool;
