import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import home from "./sections/home";
import addArticle from "./sections/addArticle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
// import firebase from "./firebase";

class App extends Component {
  componentDidMount() {
    AOS.init({
      duration: 2000
    });
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={home} />{" "}
          </Switch>{" "}
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
