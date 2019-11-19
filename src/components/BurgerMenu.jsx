import React, { Component } from "react";
import { animateScroll as scroll } from "react-scroll";

class BurgerMenu extends Component {
  constructor(props) {
      super(props);
      this.toggleClass= this.toggleClass.bind(this);
      this.state = {
          active: false,
      };
  }

  toggleClass() {
      const currentState = this.state.active;
      this.setState({ active: !currentState });
  };

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <button
      aria-label="Main menu"
      aria-haspopup="true"
      className={this.state.active ? 'burger-menu burger-menu--true': 'burger-menu'} 
      onClick={this.toggleClass} 
    >
      <span className="burger-menu__line" />
    </button>
    );
  }
}

export default BurgerMenu;
