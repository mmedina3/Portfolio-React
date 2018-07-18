import React, { Component } from 'react';
import Columns from './components/Columns';
import Navbars from './components/Navbars';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';


class App extends Component {
  render() {
    return (
      <div id="APP" className="App">
        <header>
          <Navbars />
        </header>
        <div className="App-intro">
          <b>From Educator to Software Engineer </b> <br />
          <h3 className='subtitle'>a full-stack web developer with a passion for creativity.</h3>
          <br />
          <div className="profile">
            <img src={require("./image/michelle2.png")} alt="Michelle" />
            <br /><br />
          </div>
        </div>
        <div id="about" className="container-color">
          <br /><br /><br />
          <h1 className="title2"><b> Hi, I’m <a href="https://medium.com/techtonica/apprentice-story-michelle-20e3d253ff0f" target="_blank" rel="noopener noreferrer" >Michelle Medina</a> - a San Francisco-based, <a href="https://blog.vurb.com/author/vurb/page/2/" target="_blank" rel="noopener noreferrer" >foodie</a>, adventurer, developer and former educator. </b> </h1>
          <h2 className="link2"><p>
            During my time as an educator I saw first hand how technology can open a world of opportunities. <br />I decided to pursue a career in Tech to be part of a team that is teaching, creating and building <br /> opportunities in a larger scale as an Engineer. I am currently using my education background to facilitate <br /> a weekly Women's JavaScript Study Group. When I am not working on fun coding projects,<br /> you can find me backpacking through an exotic place.<br /> <br />Feel free to <a href="#connect" >contact</a> me if you want to create fun things together!
          </p></h2>
        </div>
        <Columns />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;