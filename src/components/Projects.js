import React from 'react';
import { Button} from 'react-bootstrap';
import './Projects.css';

class Projects extends React.Component {

    render(){
        return(
            <div id="projects">
            <div className='header'>
                <h1><b>My Recent Work</b></h1><br />
            </div>
            <div id ="portfolio">
            <div class="view overlay">
                <img src="https://media.giphy.com/media/1ioiTNxtsHGwXBs8cq/giphy.gif" class="img-fluid " alt="demo"/>
                    <div class="mask flex-center rgba-cyan-strong">
                        <p class="white-text">Free Up - A platform for Educators, Social Workers and families in need to find free items for their kids.
                        <br />  
                        <Button><a href="https://github.com/mmedina3/Free-Up" target="_blank">Github</a></Button></p>
                    </div>
             </div>

            <div class="view overlay">
                <img src="https://media.giphy.com/media/1dJu0mNMD5ENKzVpnC/giphy.gif" class="img-fluid " alt=" "/>
                    <div class="mask flex-center rgba-cyan-strong">
                        <p class="white-text">Canvas Art - a space to draw freely with your mouse.
                        <br />  
                        <Button><a href="https://mmedina3.github.io/Canvas-Art/" target="_blank">Github</a></Button></p>
                    </div>
            </div>
        </div>
        </div>
        )
    }
}

export default Projects; 