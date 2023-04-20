import "./Personal.css"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const Personal=()=>{
    return(
        <div className="personal-bg">
        <div className="personal">
<Row xs={1} md={2} lg={2} className="g-4">
        <Col className="abb">
          <Card className="each-card" style={{  width:'25rem'}}>
            <Card.Img variant="top" src="/my-website/images/Algorithm.JPG" />
            <Card.Body>
              <Card.Title>Data Structures & Algorithms</Card.Title>
              <Card.Text>
                
              </Card.Text>
              <Button variant="dark">Coming Soon</Button>
            </Card.Body>
            
          </Card>
          
        </Col>
        <Col className="abb">
          <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src="my-website/images/Python.JPG" />
            <Card.Body>
              <Card.Title>Python Programming Language from Basics</Card.Title>
              <Card.Text>
              </Card.Text>
              <Button variant="dark">Coming Soon</Button>
            </Card.Body>
          </Card>
          
        </Col>
    </Row>
    

    

    </div>
    <div className="personal">
<Row xs={1} md={2} lg={2} className="g-4">
        <Col className="abb">
          <Card className="each-card" style={{  width:'25rem'}}>
            <Card.Img variant="top" src="/images/Frontend.JPG" />
            <Card.Body>
              <Card.Title>Frontend Developement</Card.Title>
              <Card.Text>
                
              </Card.Text>
              <Button variant="dark">Coming Soon</Button>
            </Card.Body>
            
          </Card>
          
        </Col>
        <Col className="abb">
          <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src="./Database.JPG" />
            <Card.Body>
              <Card.Title>Database</Card.Title>
              <Card.Text>
              </Card.Text>
              <Button variant="dark">Coming Soon</Button>
            </Card.Body>
          </Card>
          
        </Col>
    </Row>
    

    

    </div>
    </div>
    )

}

export default Personal;