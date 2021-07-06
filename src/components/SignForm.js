import React from "react";
import { Form, Row } from "react-bootstrap";
import "../styles/SignForm.css";

export default function SignForm() {
  return (
    <Form className="signForm">
      <Form.Label className="enterName">Enter name:</Form.Label>
      <Form.Label className="validationWarning">
        Please enter a name below...
      </Form.Label>
      <Form.Control type="text"></Form.Control>
    </Form>
  );
}
