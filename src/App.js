import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Contacts from "./pages/contacts";
import About from "./pages/about";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  increase() {
    this.setState({ counter: this.state.counter + 1 });
  }

  decrease() {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 });
    }
  }


  render() {
    return (
      <div className="App">

        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/contacts" component={Contacts} />
          </Switch>
        </Router> 

        <button onClick={() => this.increase()}>+</button>
        <button onClick={() => this.decrease()}>-</button>

        {this.state.counter}

        <Footer />

      </div>
    );
  }
}

export default App;


