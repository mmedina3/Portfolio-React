import React, { Component } from 'react';
import Columns from './components/Columns';
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
          <b>From Educator to Software Engineer </b> <br />
          <h3 className='subtitle'>a full-stack web developer with a passion for creativity.</h3>
          <br />
          <div className="profile">
            <img src={require("./image/michelle2.png")} />
            <br /><br />
          </div>
        </p>
        <div className="container-color">
          <br /><br /><br />
          <h1> <b> Hi, I’m Michelle Medina - a San Francisco-based, foodie, adventurer, developer and former educator. </b> </h1>
          <h2>This is where I write a bunch of cool stuff</h2>
          <br /><br /><br /><br /><br /><br />
        </div>
        <Columns />
      </div>
    );
  }
}

export default App;