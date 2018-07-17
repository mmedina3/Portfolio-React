import React from 'react';
import './Projects.css';

class Projects extends React.Component {

    render() {
        return (
            <div id="projects">
                <div className='header'>
                    <h1><b>My Recent Work</b></h1><br /><br />
                </div>
                <div id="portfolio">
                    <div class="view overlay">
                        <img src="https://media.giphy.com/media/1ioiTNxtsHGwXBs8cq/giphy.gif" class="img-fluid " alt="demo" />
                        <div class="mask flex-center rgba-cyan-strong">
                            <p class="white-text">Free Up - A platform for Educators, Social Workers and families in need to find free items for their kids. Built with MySql, Express, Node.js, React.
                        <br />  <br />
                                <button bsSize="large"><a href="https://github.com/mmedina3/Free-Up" target="_blank">Github</a></button></p>
                        </div>
                    </div>


                    <div class="view overlay">
                        <img src="https://media.giphy.com/media/65To8Pi2sWmVvjWXpy/giphy.gif" class="img-fluid " alt=" " />
                        <div class="mask flex-center rgba-cyan-strong">
                            <p class="white-text">Event Page- Eventful API used to find and save local events in San Francisco to the database using the command line interface. <br />Built with CLI, JavaScript, MySql, Eventful API.
                        <br />  <br />  
                                <button><a href="https://github.com/mmedina3/Eventful-API-test-page" target="_blank">Github</a></button></p>
                        </div>
                    </div>
                    
                    <div class="view overlay">
                        <img src="https://media.giphy.com/media/6b9GNhqtE58XXl2Gfq/giphy.gif" class="img-fluid " alt=" " />
                        <div class="mask flex-center rgba-cyan-strong">
                            <p class="white-text">Weather Finder- App built to check the weather around the globe.<br />Built with React, JavaScript, HTML/CSS, Weather API.
                        <br />  <br />  
                                <button><a href="https://github.com/mmedina3/WeatherFinder" target="_blank">Github</a></button></p>
                        </div>
                    </div>

                                        <div class="view overlay">
                        <img src="https://media.giphy.com/media/B2U75hN4XC7syawJES/giphy.gif" class="img-fluid " alt=" "/>
                        <div class="mask flex-center rgba-cyan-strong">
                            <p class="white-text">Group Git Project- A tutorial built to teach newbies how to use Git. <br /> Built with MongoDB, Express, Node.js, HTML/CSS, NodeMailer. 
                        <br />  <br />  
                                <button><a href="https://github.com/mmedina3/group-git-project-final" target="_blank">Github</a></button></p>
                        </div>
                    </div>

                    <div class="view overlay">
                        <img src="https://media.giphy.com/media/1dJu0mNMD5ENKzVpnC/giphy.gif" class="img-fluid " alt=" " />
                        <div class="mask flex-center rgba-cyan-strong">
                            <p class="white-text">Canvas Art - a space to draw freely with your mouse. <br />Built with JavaScript, HTML/CSS.
                        <br />  <br />
                                <button><a href="https://mmedina3.github.io/Canvas-Art/" target="_blank">Visit Website</a></button></p>
                        </div>
                    </div>

                    <div class="view overlay">
                        <img src="https://media.giphy.com/media/69v3MBHupZiDbCnF73/giphy.gif" class="img-fluid " alt=" " />
                        <div class="mask flex-center rgba-cyan-strong">
                            <p class="white-text">Calculator - built with JavaScript, HTML/CSS
                        <br />  <br />
                                <button><a href="https://github.com/mmedina3/Calculator-" target="_blank">Github</a></button></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects; 