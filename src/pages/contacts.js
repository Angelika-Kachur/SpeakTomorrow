import React, { Component } from 'react';
import Map from '../components/Map';
import TitleSection from '../components/TitleSection';
import Socials from '../components/Socials';

var name = 'Toma';
// var pageTitle = 'Contacts';

class contactsPage extends Component {

    render() {
        return (
            <div className="page-content">
                CONTACTS

                 {/* <TitleSection pageTitle={pageTitle}/> */}
                <TitleSection />

                <section className="contacts-section">
                    <div className="holder">
                        <h1>Contacts</h1>
                        <p>Hello {name}</p>
                        <p>With us you can study English from everywhere</p>
                        <p>С нами ты можешь выучить английской с любого уголка Земли</p>
                        <Socials />
                        <Map />
                    </div>
                </section> 
                
            </div>
        );
    };
};
  
export default contactsPage;