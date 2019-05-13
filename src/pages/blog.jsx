import React, { Component } from "react";
import Article from "../components/Article.jsx";
import articles from "../components/blogData.js";
import TitleSection from "../components/TitleSection.jsx";

var pageTitle = "Blog";

class blogPage extends Component {
  state = {
    selectedPairs: []
  };

  handleCheckbox = product => event => {
    // const {  } = event.target;

    this.setState(({ selectedPairs }) => {
      return {
        selectedPairs: ["prd-avon"]
      };
    });
  };

  render() {
    return (
      <div className="page-content">
        <TitleSection title={pageTitle} />

        <section className="blog-section">
          <div className="holder">
            <div class="blog">
              <div class="short-article-box">
                <Article article={articles[0]} foo="bar" flag />
                <Article article={articles[1]} foo="bar" flag />
                <Article article={articles[2]} foo="bar" flag />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default blogPage;
