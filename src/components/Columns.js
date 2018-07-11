import React from 'react';
import { Grid, Row, Col} from 'react-bootstrap';

 
 
class Columns extends React.Component {

    render() {
      return (
<div>
        <Grid className="Grid">
          <Row className="show-grid">
            <Col md={6} mdPush={6}>
              <h1><b>Mentor</b></h1>
              <h3>I am an Event Lead for a local weekly JavaScript study group through Women Who Code. </h3>
              <h3 className="Bold"><b>Where I teach: </b></h3>
              <h4>Women Who Code - Javascript Study Group</h4>
              <br />
              <h3 className="Bold"><b>Mentor Stats: </b></h3>
              <h4>3 years in the classroom<br />
              10 classes<br />
              210+ students<br />
        
              </h4>


            </Col>
            <Col md={6} mdPull={6}>
              <h1><b>Full-Stack Developer</b></h1>
              <h3>I enjoy brining ideas to life through software development. </h3>
              <br />
              <h3 className="Bold"><b>Languages I Speak: </b></h3>
              <h4>JavaScript, HTML, CSS</h4>
              <br />
              <h3 className="Bold"><b>Dev Tools: </b></h3>
              <h4>React<br />
              Bootstrap<br />
              Git<br />
              GitHub<br />
              Terminal<br />
              Visual Studio Code</h4>

            </Col>
          </Row>
        </Grid>
        </div>
      )
    }
  }

export default Columns;