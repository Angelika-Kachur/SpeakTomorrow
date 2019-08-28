import React, { Component } from "react";
import TitleSection from "../components/TitleSection.jsx";

var pageTitle = "Преимущества:";

class advantages extends Component {
  render() {
    return (
      <section className="advantages-section section" data-aos="fade-left">
        <TitleSection title={pageTitle} />
        <div className="holder">
          <div className="advantages">
            <div className="col">
              <ul className="list">
                <li>
                  Мы не орем, как школьные училки, и не гнобим, если студент
                  сделал ошибку. Все учатся на своих ошибках. Ошибки — это
                  нормально.
                </li>
                <li>
                  Все преподаватели творческие люди и создают программу
                  конкретно под студента. Поэтому уроки не монотонные и не
                  тянутся вечность
                </li>
                <li>
                  Мы структурируем весь учебный материал. Все слова учатся через
                  специальное приложение, которое делает запоминание слов легким
                  и быстрым
                </li>
              </ul>
            </div>
            <div className="col">
              <ul className="list">
                <li>
                  Главное внимание уделяем регулярности занятий. Изучение
                  английским должно войти в привычку и быть с удовольствием.
                  Поэтому у каждого студента есть личный куратор, который следит
                  за прогрессом.
                </li>
                <li>
                  Мы ведем небольшое количество занятий в день, что значит, что
                  для нас преподавание это не про конвейер, а про любовь к
                  людям.
                </li>
                <li>
                  Нам правда важен ваш результат. Поверьте, если бы нам было все
                  равно, мы бы этим не занимались
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default advantages;
