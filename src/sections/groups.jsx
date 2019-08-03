import React, { Component } from "react";
import TitleSection from "../components/TitleSection.jsx";

import imageGroup1 from "../images/can_by_myself.jpg";
import imageGroup2 from "../images/individual.png";
import imageGroup3 from "../images/command_player.jpg";
import imageGroup4 from "../images/intensive.png";

var pageTitle = "Действующие группы";

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
                <h2 className="group-title">Начинающий</h2>
                <div className="group-text">
                  <p>
                    Группая прекрасно подойдёт для тех, кто только начинает свой
                    путь в изучении английского
                  </p>

                  <p>
                    Вы узнаете почему не нужно бояться времен английского язык и
                    сколько же их на самом деле
                  </p>
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
                <h2 className="group-title">Средний</h2>
                <div className="group-text">
                  <p>
                    Группая прекрасно подойдёт для тех, кто только начинает свой
                    путь в изучении английского
                  </p>

                  <p>
                    Вы узнаете почему не нужно бояться времен английского язык и
                    сколько же их на самом деле
                  </p>
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
                <h2 className="group-title">Опытный</h2>
                <div className="group-text">
                  <p>
                    Группая прекрасно подойдёт для тех, кто только начинает свой
                    путь в изучении английского
                  </p>

                  <p>
                    Вы узнаете почему не нужно бояться времен английского язык и
                    сколько же их на самом деле
                  </p>
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
                <h2 className="group-title">Разговорный</h2>
                <div className="group-text">
                  <p>
                    Группая прекрасно подойдёт для тех, кто только начинает свой
                    путь в изучении английского
                  </p>

                  <p>
                    Вы узнаете почему не нужно бояться времен английского язык и
                    сколько же их на самом деле
                  </p>
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
