import React, { Component } from 'react';
import TitleSection from '../components/TitleSection';
import imageAbout2 from "../images/skype-student-image-big.png";
import imageAbout1 from "../images/photo-toma.png";
import Socials from '../components/Socials';

var pageTitle = 'About me';

class about extends Component {

    render() {
        return (
            <div className="page-content">
                <TitleSection title={pageTitle}/>

                <section className="about-section">
                    <div className="holder">
                        <div className="about">
                            <div className="image">
                                <img src={imageAbout1} alt=""/>
                            </div>
                            <div className="text">
                                <h2 className="title">Меня зовут тома</h2>
                                <p>Я преподаю английский вот уже 10 лет</p>
                                <p>А так же я очень люблю рисование и йогу</p>
                                <p>У меня много друзей по всему миру</p>
                                <p>Я люблю читать книги и танцевать сальсу</p>
                                <p>Некоторые мои ученики сами стали преподавателями в будущем</p>
                                <p>Я часто помогаю заговорить тем, кто уже переехал</p>
                                <p>Вы можете узнать обо мне больше на моих личных страничках в разных соцсетях и не стесняться задавать свои вопросы:</p>
                                <Socials />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    };
};
  
export default about;