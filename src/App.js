import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import home from "./pages/home";
import about from "./pages/about";
import groups from "./pages/groups";
import blog from "./pages/blog";
import contacts from "./pages/contacts";
import addArticle from "./pages/addArticle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import firebase from './firebase';

class App extends Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     counter: 0
  //   };
  // }

  // increase() {
  //   this.setState({ counter: this.state.counter + 1 });
  // }

  // decrease() {
  //   if (this.state.counter > 0) {
  //     this.setState({ counter: this.state.counter - 1 });
  //   }
  // }

  render() {
    return (
      <div className="App">

        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={home} />
            <Route path="/about" component={about} />
            <Route path="/groups" component={groups} />
            <Route path="/blog" component={blog} />
            <Route path="/contacts" component={contacts} />
            <Route path="/editor" component={addArticle} />
          </Switch>
        </Router> 

        {/* <button onClick={() => this.increase()}>+</button>
        <button onClick={() => this.decrease()}>-</button>
        {this.state.counter} */}

        <Footer />

      </div>
    );
  }
}

export default App;


