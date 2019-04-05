import React, { Component } from 'react';
import TitleSection from '../components/TitleSection';

var pageTitle = 'About';

class about extends Component {

    render() {
        return (
            <div className="page-content">
                <TitleSection title={pageTitle}/>

                <section className="about">
                    <p className="text-primary">About me</p>
                    <p>Меня зовут Тома и я преподаю английский вот уже 10 лет</p>
                    <p>А так же я очень люблю рисование и йогу</p>
                    <p>Вы можете узнать обо мне больше на моих личных страничках в:</p>
                </section>
            </div>
        );
    };
};
  
export default about;