import React, { Component } from 'react';
import Article from '../components/Article';
import articles from '../components/blogData.js';

class blogPage extends Component {

    state = {
        selectedPairs: []
      }
    
      handleCheckbox = product => event => {
        // const {  } = event.target;
    
        this.setState(({ selectedPairs }) => {
          return {
            selectedPairs: ['prd-avon']
          }
        })
      }

    render() {
        return (
            <div className="page-content">
                BLOG

                <Article article={articles[0]} foo="bar" flag/> 
            </div>
        );
    };
};
  
export default blogPage;