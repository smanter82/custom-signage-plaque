import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/SignForm.css";

//Look up how to have input text pop up automatically in capitals
//Get Sign Characters to stay up onsubmit

export default function SignForm() {
  const [signName, setName] = useState({
    signName: "",
    signCost: "",
  });
  const [showFormLabel, setFormShowLabel] = useState(true);
  const [showSignCost, setShowSignCost] = useState(false);

  useEffect(() => {
    if (signName.signName !== "") {
      setFormShowLabel(false);
    }
    console.log(signName);
  }, [signName]);

  const handleSubmit = () => {
    const nameLength = signName.signName.length;
    const signDollars = nameLength * 5;
    setName({
      ...signName,
      signCost: signDollars,
    });

    setShowSignCost(true);
  };

  const setSignName = (event) => {
    const { value } = event.target;
    setName({
      ...signName,
      signName: value,
    });
  };

  return (
    <>
      <h2 className={showSignCost ? "costDisplay" : "noCostDisplay"}>
        ${signName.signCost}
      </h2>
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
