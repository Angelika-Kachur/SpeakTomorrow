import React, { Component } from "react";
import TitleSection from "../components/TitleSection.jsx";
import imageGroup1 from "../images/skype-student-image.png";

var pageTitle = "Вот что говорят наши студенты:";

class reviewsPage extends Component {
  render() {
    return (
      <section
        id="reviews"
        className="reviews-section section"
        data-aos="fade-left"
      >
        <div className="holder">
          <TitleSection title={pageTitle} />
          <div className="reviews">
            <div className="review">
              <div className="tale">
                <div className="review-image">
                  <img src={imageGroup1} alt="" />
                </div>
                <h2 className="review-name">Анастасия</h2>
                <h2 className="review-position">Project Manager</h2>
                <div className="review-text">
                  <p>
                    До занятий с Томой я едва ли могла связать слова вслух,
                    наверное многим знакома проблема этого барьера. Слишишь,
                    даже что-то понимаешь, а сказать не можешь
                  </p>
                </div>
              </div>
            </div>
            <div className="review">
              <div className="tale">
                <div className="review-image">
                  <img src={imageGroup1} alt="" />
                </div>
                <h2 className="review-name">Анастасия</h2>
                <h2 className="review-position">Project Manager</h2>
                <div className="review-text">
                  <p>
                    До занятий с Томой я едва ли могла связать слова вслух,
                    наверное многим знакома проблема этого барьера. Слишишь,
                    даже что-то понимаешь, а сказать не можешь
                  </p>
                </div>
              </div>
            </div>
            <div className="review">
              <div className="tale">
                <div className="review-image">
                  <img src={imageGroup1} alt="" />
                </div>
                <h2 className="review-name">Анастасия</h2>
                <h2 className="review-position">Project Manager</h2>
                <div className="review-text">
                  <p>
                    До занятий с Томой я едва ли могла связать слова вслух,
                    наверное многим знакома проблема этого барьера. Слишишь,
                    даже что-то понимаешь, а сказать не можешь
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default reviewsPage;
