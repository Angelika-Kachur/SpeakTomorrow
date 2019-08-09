import React, { Component } from "react";
import TitleSection from "../components/TitleSection.jsx";

import imageGroup1 from "../images/can_by_myself.jpg";
import imageGroup2 from "../images/individual.png";
import imageGroup3 from "../images/command_player.jpg";
import imageGroup4 from "../images/intensive.png";

var pageTitle = "Действующие курсы";

class groupsPage extends Component {
  render() {
    return (
      <section className="groups-section" data-aos="fade-right">
        <TitleSection title={pageTitle} />
        <div className="holder">
          <div className="groups">
            <div className="group">
              <div className="tale">
                <div className="group-image">
                  <img src={imageGroup1} alt="" />
                </div>
                <h2 className="group-title">«Могу все сам»</h2>
                <div className="group-text">
                  <div className="list">
                    <ul>
                      <li>
                        Студент ежедневно (!) получает задания от куратора и
                        выполняет в течении 24 часов
                      </li>
                      <li>
                        Раз в неделю нужно подготовить речь на одну из тем
                      </li>
                      <li>Ежедневный фитбек от куратора</li>
                    </ul>
                  </div>
                  <div class="description">
                    Подойдет тем, у кого есть знания в английском, кому нужна
                    мотивация заниматься дальше, но нет времени на занятия с
                    преподавателем.
                  </div>
                  <div className="start-level">От Intermediate</div>
                </div>
                <div className="group-links">
                  <a href="#">Навыки</a>
                  {/* Какие навыки есть у того кто в начинающей группе*/}
                  <a href="#">Материалы</a>
                  {/* Материалы подходящие начинающих*/}
                </div>
                <div className="group-btn">
                  <button className="btn">Записаться</button>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="tale">
                <div className="group-image">
                  <img src={imageGroup2} alt="" />
                </div>
                <h2 className="group-title">«Индивидуальный»</h2>
                <div className="group-text">
                  <div className="list">
                    <ul>
                      <li>Индивидуальные занятия в Skype в удобное время</li>
                      <li>Домашки</li>
                      <li>Собственный список слов для запоминания</li>
                      <li>Английский чат с преподавателем</li>
                    </ul>
                  </div>
                  <div class="description">
                    Подойдет тем, кто только начинает свой путь в изучении, кому
                    нужна систематичность и помощь преподавателя
                  </div>
                  <div className="start-level">От Elementary</div>
                </div>
                <div className="group-links">
                  <a href="#">Навыки</a>
                  {/* Какие навыки есть у того кто в начинающей группе*/}
                  <a href="#">Материалы</a>
                  {/* Материалы подходящие начинающих*/}
                </div>
                <div className="group-btn">
                  <button className="btn">Записаться</button>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="tale">
                <div className="group-image">
                  <img src={imageGroup3} alt="" />
                </div>
                <h2 className="group-title">«Интенсивный»</h2>
                <div className="group-text">
                  <div className="list">
                    <ul>
                      <li>
                        Индивидуальные занятия в Skype в удобное вам время
                      </li>
                      <li>Домашки</li>
                      <li>
                        Eжедневное (!) общение на английском с партнером по
                        курсу
                      </li>
                      <li>Собственный список слов для запоминания</li>
                      <li>Английский чат с куратором и студентами школы</li>
                    </ul>
                  </div>
                  <div class="description">
                    Подойдет тем, кто хочет заниматься интенсивно и достичь
                    быстрых результатов
                  </div>
                  <div className="start-level">От Elementary</div>
                </div>
                <div className="group-links">
                  <a href="#">Навыки</a>
                  {/* Какие навыки есть у того кто в начинающей группе*/}
                  <a href="#">Материалы</a>
                  {/* Материалы подходящие начинающих*/}
                </div>
                <div className="group-btn">
                  <button className="btn">Записаться</button>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="tale">
                <div className="group-image">
                  <img src={imageGroup4} alt="" />
                </div>
                <h2 className="group-title">«Командный игрок»</h2>
                <div className="group-text">
                  <div className="list">
                    <ul>
                      <li>Разговорная практика в маленькой группе</li>
                      <li>Проверка домашек куратором</li>
                      <li>
                        Общение на английском 3 рвза в неделю с партнером по
                        курсу
                      </li>
                      <li>Список слов для запоминания</li>
                      <li>Английский чат с куратором и студентами школы</li>
                    </ul>
                  </div>
                  <div class="description">
                    Подойдет тем, кто любит работать в группе и соревнования
                  </div>
                  <div className="start-level">От Elementary</div>
                </div>
                <div className="group-links">
                  <a href="#">Навыки</a>
                  {/* Какие навыки есть у того кто в начинающей группе*/}
                  <a href="#">Материалы</a>
                  {/* Материалы подходящие начинающих*/}
                </div>
                <div className="group-btn">
                  <button className="btn">Записаться</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default groupsPage;
