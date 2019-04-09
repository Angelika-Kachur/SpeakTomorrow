import React, { Component } from 'react';
import TitleSection from '../components/TitleSection';

var pageTitle = 'Home';

class homePage extends Component {

    render() {
        return (
            <div className="page-content">
                <TitleSection title={pageTitle}/>

                <section className="">

                </section>
            </div>
        );
    };
};
  
export default homePage;