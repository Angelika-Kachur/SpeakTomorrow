import React, { Component } from "react";
import TitleSection from "../components/TitleSection.jsx";
import imageReview1 from "../images/review-1.jpg";
import imageReview2 from "../images/review-2.jpg";
import imageReview3 from "../images/review-3.jpg";
import imageReview4 from "../images/review-4.jpg";
import imageReview5 from "../images/review-5.jpg";
import imageReview6 from "../images/review-6.jpg";

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
            <div className="review" data-aos="fade-right">
              <div className="tale">
                <div className="review-image">
                  <img src={imageReview1} alt="" />
                </div>
                <h2 className="review-name">Елена Соларева</h2>
                <h2 className="review-position">
                  Head of Project and Marketing Acquisition Department
                </h2>
                <h3 className="who-teacher">Занималась с Томой</h3>
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
            <div className="review" data-aos="fade-left">
              <div className="tale">
                <div className="review-image">
                  <img src={imageReview2} alt="" />
                </div>
                <h2 className="review-name">Дима Джус</h2>
                <h2 className="review-position">CCO at Artjoker</h2>
                <h3 className="who-teacher">Занимался с Томой</h3>
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
            <div className="review" data-aos="fade-right">
              <div className="tale">
                <div className="review-image">
                  <img src={imageReview3} alt="" />
                </div>
                <h2 className="review-name">Коргут Сергей</h2>
                <h2 className="review-position">
                  Head of Marketing Dream Team Studio
                </h2>
                <h3 className="who-teacher">Занимался с Томой</h3>
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
            <div className="review" data-aos="fade-left">
              <div className="tale">
                <div className="review-image">
                  <img src={imageReview4} alt="" />
                </div>
                <h2 className="review-name">Анатолий Рымарчук</h2>
                <h2 className="review-position">Senior SEM/SEO Specialist</h2>
                <h3 className="who-teacher">Занимался с Томой</h3>
                <div className="review-text">
                  <p>
                    Считаю Тому лучшим преподавателем английского, которого мне
                    удалось повстречать за 11 лет школы с углубленным
                    английским, 5 лет университета и 4 года работы в
                    международной компании.
                  </p>
                  <p>
                    Мне важно было подтянуть свой английский для общения с
                    нейтивами из Америки и Англии.
                  </p>
                  <p>
                    В итоге за год обучения я подтянул язык настолько круто, что
                    даже 11 лет в школе можно было смело променять на этот год.
                  </p>
                  <p>
                    Если нужно в быстрые сроки подтянуть язык, то Тома –
                    отличное решение. Но нужно обязательно понимать, что
                    придётся попотеть с домашками и заучиванием новых слов и
                    фраз, без этого, никакой преподаватель не поможет.
                  </p>
                </div>
              </div>
            </div>
            <div className="review" data-aos="fade-right">
              <div className="tale">
                <div className="review-image">
                  <img src={imageReview6} alt="" />
                </div>
                <h2 className="review-name">Artem</h2>
                <h2 className="review-position">Software Engineer</h2>
                <h3 className="who-teacher">Занимался с Дианой</h3>
                <div className="review-text">
                  <p>
                    Me and Diana started our lessons almost half a year ago. 
                  </p>
                  <p>
                    And since then, every single lesson is just a kind of interactive dialog, opposite to tedious and exhausting routine I experienced previously with a bunch of other tutors.
                  </p>
                  <p>
                    I guess it’s just a god bless (or talent) - to be so amiable and charming like she is.
                  </p>
                  <p>
                    One of the most valuable key things for me personally - very agile and frequently changing tempo of lessons plus personalized activities like watching TV series together or discussing hobbies - traveling, books and lifestyle. But don’t think that you can avoid hard work.
                  </p>
                  <p>
                    Learning is a deliberate and long-term way, and such an experienced tutor can help you to open new ingenious and exciting paths.
                  </p>
                </div>
              </div>
            </div>
            <div className="review" data-aos="fade-left">
              <div className="tale">
                <div className="review-image">
                  <img src={imageReview5} alt="" />
                </div>
                <h2 className="review-name">Юля Яценко</h2>
                <h2 className="review-position">Project Manager</h2>
                <h3 className="who-teacher">Занималась с Дианой</h3>
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
