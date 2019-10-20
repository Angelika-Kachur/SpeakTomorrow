import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

class Navigation extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="navigation">
        <ul className="navigation-list">
          <li>
            <Link
              to="groups-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Наши курсы
            </Link>
          </li>
          <li>
            <Link
              to="our-team-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Преподаватели
            </Link>
          </li>
          <li>
            <Link
              to="how-it-works-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Как мы работаем
            </Link>
          </li>
          <li>
            <Link
              to="reviews-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Отзывы студентов
            </Link>
          </li>
          <li>
            <Link
              to="contacts-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Контакты
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
