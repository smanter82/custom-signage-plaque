import React from "react";
import { Card, Button } from "react-bootstrap";
import SignForm from "./SignForm";
import "../styles/SignCard.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SignCard() {
  return (
    <Card className="signCard mx-auto">
      <Card.Title className="cardTitle">CUSTOM SIGNAGE</Card.Title>
      <Card.Body className="mx-auto">
        <SignForm></SignForm>
        {/* <Button className="btn" type="submit">
          SHOW COST
        </Button> */}
      </Card.Body>
    </Card>
  );
}
