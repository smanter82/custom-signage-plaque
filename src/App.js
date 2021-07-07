import "./App.css";
import { Col, Row, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SignCard from "./components/SignCard.js";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row className="cardRow align-items-center">
          <Col></Col>
          <Col className="cardCol">
            <SignCard></SignCard>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
