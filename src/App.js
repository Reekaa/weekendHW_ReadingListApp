import React, {Component, Fragment} from 'react';
import BookBox from './container/BookBox.js';
import './App.css';
import Welcome from './Welcome.js';
import {BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from "./NavBar.js"

class App extends Component {

  render() {
    return (

      <Router>
        <Fragment>
        <div className="ui container">
        <NavBar />
          <Route
            path="/welcome"
            component={Welcome}
          />
          <Route
            exact path="/"
            component={BookBox}
          />
          </div>
        </Fragment>
      </Router>
    );
  }

}

export default App;
