import React, { Component } from "react";
import TitleSection from "../components/TitleSection.jsx";

class welcome extends Component {
  render() {
    return (
      <section className="welcome-section section">
        <div className="image">
          <div class="title-holder">
            <h1 class="title">Let’s speak tomorrow!</h1>
          </div>
        </div>
        <div className="holder">
          <div className="text">
            <p>
              Speak Tomorrow это школа английского, где вас научат говорить
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
            <button className="btn btn-courses">Наши курсы</button>
          </div>
        </div>
      </section>
    );
  }
}

export default welcome;
