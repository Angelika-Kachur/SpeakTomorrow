import React, { Component } from "react";

class Popup extends Component {
  render() {
    return (
      <div className="popup">
        <div className="title">Popup title</div>
        <div className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam facere ipsa cumque quam ab praesentium voluptatum rem, consectetur fuga culpa officia quidem vero nostrum, iste, quo illum non saepe neque!
        </div>
        <div className="btn-box">
          <button>Book</button>
        </div>
      </div>
    );
  }
}

export default Popup;
