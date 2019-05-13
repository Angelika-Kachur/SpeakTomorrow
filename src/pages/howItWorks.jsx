import React, { Component } from "react";
import TitleSection from "../components/TitleSection.jsx";
import imageAbout2 from "../images/skype-student-image-big.png";
import imageAbout1 from "../images/photo-toma.png";
import Socials from "../components/Socials.jsx";

var pageTitle = "Как мы работаем:";

class howItWorks extends Component {
  render() {
    return (
      <div className="page-content">
        <TitleSection title={pageTitle} />

        <section className="how-it-works-section">
          <div className="holder">
            <div className="how-it-works">
              <ul className="list">
                <li>
                  главное внимание уделяем регулярности занятий. Изучение
                  английским должно войти в привычку и быть с удовольствием.
                  Поэтому у каждого студента есть личный куратор, который следит
                  за прогрессом.
                </li>
                <li>
                  мы структурируем весь учебный материал. Все слова учатся через
                  специальное бесплатное приложение, которое делает запоминание
                  слов легким и быстрым
                </li>
                <li>
                  мы не орем, как школьные училки, и не гнобим, если студент
                  сделал ошибку. Все учатся на своих ошибках. Ошибки — это
                  нормально.
                </li>
                <li>
                  мы ведем небольшое количество занятий в день, что значит, что
                  для нас преподавание это не про конвейер, а про любовь к людям
                </li>
                <li>
                  все преподаватели очень творческие люди, и мы вечно что-то
                  придумываем, а уроки не монотонные и не тянутся вечность
                </li>
                <li>
                  нам правда важен ваш результат. Поверьте, если бы нам было все
                  равно, мы бы этим не занимались 
                </li>
                <li>
                  наши преподаватели любят свою работу, и вы это чувствуете
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default howItWorks;
