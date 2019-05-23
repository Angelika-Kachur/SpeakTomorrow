import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import home from "./sections/home";
import blog from "./sections/blog";
import about from "./sections/about";
import groups from "./sections/groups";
import reviews from "./sections/reviews";
import contacts from "./sections/contacts";
import addArticle from "./sections/addArticle";
import howItWorks from "./sections/howItWorks";
import aboutSchool from "./sections/aboutSchool";
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
            <Route path="/about" component={about} />{" "}
            <Route path="/aboutSchool" component={aboutSchool} />{" "}
            <Route path="/howItWorks" component={howItWorks} />{" "}
            <Route path="/groups" component={groups} />{" "}
            <Route path="/reviews" component={reviews} />{" "}
            <Route path="/blog" component={blog} />{" "}
            <Route path="/contacts" component={contacts} />{" "}
            <Route path="/editor" component={addArticle} />{" "}
          </Switch>{" "}
        </Router>

        <Footer />
      </div>
    );
  }
}

export default App;
