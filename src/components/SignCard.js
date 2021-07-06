import React from "react";
import { Card } from "react-bootstrap";
import SignForm from "./SignForm";

export default function SignCard() {
  return (
    <Card className="signCard">
      <Card.Title>CUSTOM SIGNAGE</Card.Title>
      <Card.Body>
        <SignForm></SignForm>
      </Card.Body>
    </Card>
  );
}
