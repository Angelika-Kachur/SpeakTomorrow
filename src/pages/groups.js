import React, { Component } from 'react';
import TitleSection from '../components/TitleSection';

import imageGroup1 from "../images/skype-student-image.png";

var pageTitle = 'Действующие группы';

class groupsPage extends Component {

    render() {
        return (
            <div className="page-content">
                <TitleSection title={pageTitle}/>

                <section className="groups-section">
                    <div className="holder">
                        <div className="groups">
                            <div className="group">
                                <div className="tale">
                                    <div className="group-image">
                                        <img src={imageGroup1} alt=""/>
                                    </div>
                                    <h2 className="group-title">Начинающий</h2>
                                    <div className="group-text">
                                        <p>Группая прекрасно подойдёт для тех, кто только начинает свой путь в изучении английского</p>

                                        <p>Вы узнаете почему не нужно бояться времен английского язык и сколько же их на самом деле</p>
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
                                        <img src={imageGroup1} alt=""/>
                                    </div>
                                    <h2 className="group-title">Начинающий</h2>
                                    <div className="group-text">
                                        <p>Группая прекрасно подойдёт для тех, кто только начинает свой путь в изучении английского</p>

                                        <p>Вы узнаете почему не нужно бояться времен английского язык и сколько же их на самом деле</p>
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
                                        <img src={imageGroup1} alt=""/>
                                    </div>
                                    <h2 className="group-title">Начинающий</h2>
                                    <div className="group-text">
                                        <p>Группая прекрасно подойдёт для тех, кто только начинает свой путь в изучении английского</p>

                                        <p>Вы узнаете почему не нужно бояться времен английского язык и сколько же их на самом деле</p>
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
                                        <img src={imageGroup1} alt=""/>
                                    </div>
                                    <h2 className="group-title">Начинающий</h2>
                                    <div className="group-text">
                                        <p>Группая прекрасно подойдёт для тех, кто только начинает свой путь в изучении английского</p>

                                        <p>Вы узнаете почему не нужно бояться времен английского язык и сколько же их на самом деле</p>
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
            </div>
        );
    };
};
  
export default groupsPage;