import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar";
import Home from "./Home";
import SignIn from "./SignIn";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import Content from './Content';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const { children } = this.props;
    return (
      <div className="App">
        {/*}<Navbar />
        <Home />{*/}
        <Content body={children} />
      </div>
    );
  }
}

export default App;
