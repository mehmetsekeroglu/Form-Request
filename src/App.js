
import './App.css';
import Input from './components/Input'
import List from './components/List'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'

function App() {
  return (
    <Container fluid className="bg-secondary">
      <Navbar sticky="top" variant="dark" bg="dark">
        <Container>
          <Navbar.Brand href="#">HiCoders</Navbar.Brand>
        </Container>
      </Navbar>
      <Row>
        <Col><Input/></Col>
        <Col><List/></Col>
      </Row>
    </Container>
  );
}

export default App;
