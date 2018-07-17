import React from 'react';
import { Grid, Row, Col} from 'react-bootstrap';

 
 
class Columns extends React.Component {

    render() {
      return (
<div>
        <Grid className="Grid">
          <Row className="show-grid">
          <h1 className="title">
          <br /><br /><br />
          <b>Full-Stack Developer</b></h1>
              <h3>I enjoy brining ideas to life through software development. </h3>
              <br />

            <Col xs="6" sm="4" >
              <h2 className="Bold"><b>Frontend: </b></h2>
              <h3>JavaScript<br />
              jQuery<br />
              HTML <br />
              CSS <br />
              </h3>

            </Col>
            <Col xs="6" sm="4">
              <h2 className="Bold"><b>Backend: </b></h2>
              <h3>Node <br />
              Express <br />
              MySql<br />
              MongoDB<br /></h3>
              <br />

            </Col>
            <Col xs="6" sm="4">
              <h2 className="Bold"><b>Dev Tools: </b></h2>
              <h3>React<br />
              Bootstrap<br />
              Git<br />
              GitHub<br />
              Terminal<br />
              Visual Studio Code</h3>

            </Col>
          </Row>
        </Grid>
        </div>
      )
    }
  }

export default Columns;