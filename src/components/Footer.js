import React, { Component } from 'react';
import Socials from '../components/Socials';

class Footer extends Component {

    render() {
        return (
            <footer className="footer">
                <div className="holder">
                    <Socials />
                    <div className="copyright">
                        © 2019 Speak Tomorrow with Toma. 
                        All Rights Reserved. 
                        Website design by <a href="#" target="_blank">Z</a>.
                    </div>
                </div>
            </footer>
        );
    };
};
  
export default Footer;