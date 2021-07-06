import React from "react";
import { Form } from "react-bootstrap";
import "../styles/SignForm.css";

export default function SignForm() {
  return (
    <Form className="signForm">
      <Form.Label>Enter name:</Form.Label>
      <Form.Control type="text"></Form.Control>
    </Form>
  );
}
