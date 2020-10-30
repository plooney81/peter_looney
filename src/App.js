import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/MyNavBar';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <hr></hr>
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
