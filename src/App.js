import React, { Component } from 'react';
import './App.css';
import PropTypes from "prop-types";
import Content from './Content';
import nContext from './Context'

class App extends Component {
  constructor(){
    super();
    this.state = {
      cart : [null]
    }
  }
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const { children } = this.props;
    return (
      <div className="App">
      <nContext.Provider value = {this.state.cart}>
        <Content body={children} />
      </nContext.Provider>
      </div>
    );
  }
}

export default App;