import React, { Component } from 'react';
import Navbars from './components/Navbars';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
          <Navbars />
        </header>
        <p className="App-intro">
          From Educator to Software Engineer <br />
          <div className="profile">
          <img src={require("./image/Michelle.png")} />
          </div>
        </p>
      </div>
    );
  }
}

export default App;