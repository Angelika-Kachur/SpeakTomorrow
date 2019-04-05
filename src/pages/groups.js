import React, { Component } from 'react';
import TitleSection from '../components/TitleSection';

var pageTitle = 'Groups';

class groupsPage extends Component {

    render() {
        return (
            <div className="page-content">
                <TitleSection title={pageTitle}/>
            </div>
        );
    };
};
  
export default groupsPage;