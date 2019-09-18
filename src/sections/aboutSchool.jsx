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
                Школа английского языка Speak Tomorrow это место, где вас
                гарантированно научат говорить по-английскии и чувствовать себя
                уверенно с любым собеседником. Какой смысл в сотне переводов или
                упражнениях, где нужно выбрать «а» или «б», если у человека
                остается большой страх говорить и совершать ошибки. Смысл
                изучения языка – доносить свою информацию и понимать других.
              </p>
              <p>
                Главным и самым основным в работе со студентами мы считаем
                индивидуальный подход к каждому. Английский должен помогать вам
                решать ваши задачи, поэтому мы учитываем вашу специфику работы и
                ваши личные цели.
              </p>
              <button className="btn btn-read-more">Читать полностью</button>
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
