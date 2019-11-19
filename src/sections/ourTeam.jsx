import React, { Component } from "react";
import TitleSection from "../components/TitleSection.jsx";
import teacherToma from "../images/teacher-toma.png";
import teacherDiana from "../images/teacher-diana.jpg";
import teacherTanya from "../images/teacher-tanya.jpg";
import Popup from '../components/Popup';

var pageTitle = "Наши преподаватели";


class ourTeam extends Component {

  constructor(props){
    super(props);
    this.state = { showPopup: false };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return (

      <section className="our-team-section section" data-aos="fade-left">
        <TitleSection title={pageTitle} />
        <div className="holder">

        {this.state.showPopup ?
        <Popup
        text='Click "Close Button" to hide popup'
        closePopup={this.togglePopup.bind(this)}
        />
          : null
        }
        

          <div className="our-team">
            <div className="team-card">
              <div className="image">
                <img src={teacherToma} alt="" />
              </div>
              <div className="text">
                <div className="name">Toma (Tomorrow) Tachilina</div>
                <div className="about-teacher">
                  <div className="short-text">
                    <p>
                      Меня зовут Тома, я преподаю английский и русский для
                      иностранцев. Работала на курсах, в IT компаниях, с детьми
                      и взрослыми.
                    </p>
                    <p>
                      В данный момент курс по Business English. Организовываю
                      онлайн челенджи в Instagram. Работала в США, училась в
                      Испании и Нидерландах в летнем университете. Была VIP
                      волонтером во время Euro 2012
                    </p>
                  </div>

                </div>
                <dl className="detailed-info">
                  <dt>Опыт работы:</dt>
                  <dd>15 лет</dd>
                  <dt>Сертификаты:</dt>
                  <dd>
                    <ul className="certificates">
                      <li>Получила TEFL (TESOL) сертификат в 2018 (Лондон)</li>
                      <li>
                        Степень магистра по английскому языку (ХНПУ им.
                        Сковороды)
                      </li>
                      <li>Закончила 2х месячный курс по Public Speaking </li>
                    </ul>
                  </dd>
                </dl>
                <div className="btn-box">
                  <button className="btn" onClick={this.togglePopup.bind(this)}>Читать больше</button>
                </div>
              </div>
            </div>

            <div className="team-card">
              <div className="image">
                <img src={teacherDiana} alt="" />
              </div>
              <div className="text">
                <div className="name">Diana (Di) Teacher</div>
                <div className="about-teacher">
                  <div className="short-text">
                    <p>
                      Привет, меня зовут Диана. Я – преподаватель английского
                      языка. Веду индивидуальные и групповые уроки онлайн.
                    </p>
                    <p>
                      Работала на курсах английского и IT компаниях. Еще имею
                      опыт преподавания английского для юристов.
                    </p>
                  </div>
                  
                
                </div>
                <dl className="detailed-info">
                  <dt>Опыт работы:</dt>
                  <dd>8 лет</dd>
                  <dt>Сертификаты:</dt>
                  <dd>
                    <ul className="certificates">
                      <li>
                        Преподаватель английского языка ХНПУ имени Г.С.Сковороды
                      </li>
                      <li>
                        5-недельный курс «Advanced Instructional strategies in
                        the Virtual Classroom».
                      </li>
                      <li>
                        Имею сертификат Калифорнийского университета в Ирвине.
                      </li>
                    </ul>
                  </dd>
                </dl>
                <div className="btn-box">
                  <button className="btn" onClick={this.togglePopup.bind(this)}>Читать больше</button>
                </div>
              </div>
            </div>

            <div className="team-card">
              <div className="image">
                <img src={teacherTanya} alt="" />
              </div>
              <div className="text">
                <div className="name">Tanya Teacher</div>
                <div className="about-teacher">
                  <div className="short-text">
                    <p>
                      Привет, меня зовут Таня. Я преподаю английский язык в
                      группах и индивидуально, по скайпу и тет-а-тет. Веду
                      занятия в IT компаниях.
                    </p>
                  </div>
                  
                
                </div>
                <dl className="detailed-info">
                  <dt>Опыт работы:</dt>
                  <dd>8 лет</dd>
                  <dt>Сертификаты:</dt>
                  <dd>
                    <ul className="certificates">
                      <li>IELTS academic 2019</li>
                      <li>TEFL 2019</li>
                      <li>
                        Диплом преподавателя английского и французского языков
                        ХНПУ им. Сковороды.
                      </li>
                    </ul>
                  </dd>
                </dl>
                <div className="btn-box">
                  <button className="btn" onClick={this.togglePopup.bind(this)}>Читать больше</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ourTeam;
