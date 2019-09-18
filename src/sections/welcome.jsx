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
            <p>
              Speak tomorrow это школа английского, где вас научат говорить
              уверенно.
            </p>
            <p>
              Главным в работе со студентами мы считаем индивидуальный подход к
              каждому. Английский должен помогать решать Ваши задачи. Именно
              поэтому, мы учитываем Вашу специфику работы и Ваши личные цели.
            </p>
            <p>
              Мы научим вас общаться, объясняться, спорить, шутить и доказывать
              свою точку зрения. Вы будете жить на английском и считать его
              частью своей жизни.
            </p>
            <button btn="btn btn-courses">Курсы</button>
          </div>
        </div>
      </section>
    );
  }
}

export default welcome;
