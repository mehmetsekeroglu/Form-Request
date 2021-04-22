
import './App.css';
import Input from './components/Input'
import List from './components/List'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
  return (
    <Container>
  <Row>
    <Col><Input/></Col>
    <Col><List/></Col>
  </Row>
</Container>
  );
}

export default App;
