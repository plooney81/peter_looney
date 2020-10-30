import './App.css';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      {/* <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/home">PL</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">About Me</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Skills</Nav.Link>
        </Nav.Item>
      </Nav> */}
      <Container>
        <ul>
          <Row className='navBar'>
            <Col>
              <li>PL</li>
            </Col>
            <Col>
            <li>About Me</li>
            </Col>
            <Col>
            <li>Projects</li>
            </Col>
            <Col>
            <li>Skills</li>
            </Col>
          </Row>
        </ul>
      </Container>
      <Container>
        <Row>
          <Col>
            <h1>Hello My Name is Pete</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
