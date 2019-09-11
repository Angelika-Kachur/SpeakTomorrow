import React, { Component } from "react";
import TitleSection from "../components/TitleSection.jsx";
import imageReview1 from "../images/review-1.jpg";
import imageReview2 from "../images/review-2.jpg";
import imageReview3 from "../images/review-3.jpg";

var pageTitle = "Вот что говорят наши студенты:";

class reviewsPage extends Component {
  render() {
    return (
      <section
        id="reviews"
        className="reviews-section section"
        data-aos="fade-left"
      >
        <div className="holder">
          <TitleSection title={pageTitle} />
          <div className="reviews">
            <div className="review">
              <div className="tale">
                <div className="review-image">
                  <img src={imageReview1} alt="" />
                </div>
                <h2 className="review-name">Елена Соларева</h2>
                <h2 className="review-position">
                  Head of Project and Marketing Acquisition Department
                </h2>
                <div className="review-text">
                  <p>
                    Тома — преподаватель, которого сегодня найти трудно. И мне
                    повезло учиться именно у нее!
                  </p>
                  <p>
                    Это человек, который всей душой переживает за мою
                    успеваемость, научил говорить на английском без страха,
                    правильно слышать и понимать носителей, улучшил акцент.
                  </p>
                  <p>
                    Программа обучения — индивидуальная и зависит от того, чем
                    ученик занимается и какова его цель. Формат урока — фановый,
                    не помню, чтобы я хоть раз заскучала.
                  </p>
                  <p>
                    Занятия здорово помогли мне в работе с международными
                    клиентами, а Тома каждый день мотивирует работать над собой
                    усерднее!
                  </p>
                </div>
              </div>
            </div>
            <div className="review">
              <div className="tale">
                <div className="review-image">
                  <img src={imageReview2} alt="" />
                </div>
                <h2 className="review-name">Елена Соларева</h2>
                <h2 className="review-position">CCO at Artjoker</h2>
                <div className="review-text">
                  <p>
                    O Томе я могу сказать что я ее главный трендсеттер. Для
                    того, чтобы заниматься в ее школе мне потребовалось
                    уговаривать Тому на протяжении 4-х месяцев!
                  </p>
                  <p>
                    Сейчас я могу гордиться уровнем, который мне позволяет вести
                    бизнес переговоры и не быть как трактор драйвер. Надеюсь,
                    что Тома гордится и мной тоже, короче если вы тут, то вас
                    ждёт стремительный взлет в мире английского
                  </p>
                </div>
              </div>
            </div>
            <div className="review">
              <div className="tale">
                <div className="review-image">
                  <img src={imageReview3} alt="" />
                </div>
                <h2 className="review-name">Коргут Сергей</h2>
                <h2 className="review-position">
                  Head of Marketing Dream Team Studio
                </h2>
                <div className="review-text">
                  <p>
                    Всегда видно человека, нашедшего свое призвание. Тома отдана
                    обучению людей английскому языку, ей это по-настоящему
                    нравится. Незабываемо видеть ее радость от твоих успехов.
                  </p>
                  <p>
                    Тома видит твои слабые места в языке и знает как - именно
                    тебе - помочь с ними разобраться.
                  </p>
                </div>
              </div>
            </div>
            <div className="review">
              <div className="tale">
                <div className="review-image">
                  <img src={imageReview3} alt="" />
                </div>
                <h2 className="review-name">Коргут Сергей</h2>
                <h2 className="review-position">
                  Head of Marketing Dream Team Studio
                </h2>
                <div className="review-text">
                  <p>
                    Занимаюсь с Дианой уже в течение 5 месяцев. До этого
                    пробовала школы и групповые занятия.
                  </p>
                  <p>
                    Для себя определила однозначно - если есть цель ускорения
                    темпов в изучении языка, однозначно персональные занятия
                    станут в приоритете.
                  </p>
                  <p>
                    С Дианой заметила результат уже после 1-го месяца - стала
                    больше говорить, меньше вспоминать слова. После 2-го месяца
                    я почти не обращаюсь к русской речи. Пусть предложения
                    простые, но они на английском.
                  </p>
                  <p>
                    Диана внимательна к тому, какие темы мне сложны и нужно ли
                    больше времени, чтобы освоить и приобрести устойчивое
                    знание.
                  </p>
                  <p>
                    Также благодарна ей за то, что с обращает внимание и всегда
                    узнает наперёд мою загрузку по работе и повседневной жизни,
                    чтобы регулировать домашние задания.
                  </p>
                  <p>
                    Занятия онлайн стали для меня находкой и неожиданным
                    решением в плотном графике.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default reviewsPage;
