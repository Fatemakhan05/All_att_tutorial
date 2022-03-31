import React, { useState } from "react";
import { Container, FloatingLabel, Form, Button } from "react-bootstrap";
import "./textform.css"

export default function TextForm ({ mode, toggleMode }) {
  const [text, setText] = useState("  ");

  const convertTextUppercase = () => {
    let newText = text.toUpperCase();
    console.log(newText);
    setText(newText);
  };
  const convertTextLowercase = () => {
    let newText = text.toLowerCase();
    console.log(newText);
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const handleCopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const removeExtraSpace = () => {
    let newText = text.split(/ [ ]+/);
    setText(newText.join(" "));
  };

  return (
    <div>
      <Container className="float ">
        <FloatingLabel controlId="floatingTextarea2" label="">
          <Form.Control
            as="textarea"
            placeholder=""
            style={{ height: "400px" }}
            onChange={handleOnChange}
            value={text}
            id="mybox"
          />
        </FloatingLabel>
        <Button
          variant="primary"
          onClick={convertTextUppercase}
          className="btn  m-2 "
        >
          Convert To upper case
        </Button>
        <Button
          variant="primary"
          onClick={convertTextLowercase}
          className="btn m-2 "
        >
          Convert To lower case
        </Button>
        <Button variant="primary" onClick={handleCopy} className="btn m-2 ">
          Copy text
        </Button>
        <Button
          variant="primary"
          onClick={removeExtraSpace}
          className="btn m-2 "
        >
          Remove extra space
        </Button>
         
      </Container>
       <div className="container">
          
         <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
       </div>
    </div>
  );
}
