import logo from "./logo.svg";
import "./App.css";
import { Col, Row, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SignCard from "./components/SignCard.js";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <SignCard></SignCard>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
