import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/SignForm.css";

export default function SignForm() {
  const [signName, setName] = useState({
    signName: "",
  });
  const [showFormLabel, setFormShowLabel] = useState(true);

  useEffect(() => {
    if (signName.signName !== "") {
      setFormShowLabel(false);
    }
    console.log(signName);
  }, [signName.signName]);

  //   let count = [];

  const handleSubmit = () => {
    const nameLength = signName.signName.length;
    console.log(signName);
    console.log(nameLength);
  };

  const setSignName = (event) => {
    const { name, value } = event.target;
    setName({
      ...signName,
      signName: value,
    });
  };

  return (
    <>
      <Form className="signForm">
        <Form.Label className="enterName">Enter name:</Form.Label>
        <Form.Label className={showFormLabel ? "formLabel" : "formLabelNoShow"}>
          Please enter a name below...
        </Form.Label>
        <Form.Control
          className="formInput"
          type="text"
          onChange={(event) => setSignName(event)}
        ></Form.Control>
      </Form>
      <Button className="btn" type="submit" onClick={handleSubmit}>
        SHOW COST
      </Button>
    </>
  );
}
