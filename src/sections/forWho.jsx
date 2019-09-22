import React, { Component } from "react";
import TitleSection from "../components/TitleSection.jsx";

var pageTitle = "С кем мы работаем:";

class forWho extends Component {
  render() {
    return (
      <section className="how-it-works-section section" data-aos="fade-left">
        <TitleSection title={pageTitle} />
        <div className="holder">
          <div className="how-it-works">
            <ul className="list">
              <li>100 раз начинал учить, и вечно сдавался</li>
              <li>переехал в другую страну и без английского не может</li>
              <li>боится показаться смешным, когда говорит на английском</li>
              <li>думает, что никогда не заговорит</li>
              <li>кто слишком стар для английского</li>
              <li>должен срочно сдавать экзамен на работе</li>
              <li>думает, что он дуб</li>
              <li>стесняется говорить на митингах</li>
              <li>путешествует и не может объясниться заграницей</li>
              <li>думает, что у него нет дисциплины</li>
              <li>все понимает, как собака, а сказать не может</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default forWho;
