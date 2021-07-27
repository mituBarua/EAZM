import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

export default function ConfigureLogo() {
  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div>
      <Container className="container-custom">
        <div>
          <h3 className="my-5">5.Configure your Logo</h3>
          <div>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                checked={isChecked}
                onChange={handleOnChange}
                label="Upload a logo file"
              />
            </Form.Group>
          </div>
          <div className="choose-file">
            <p>Drag 'n' drop some files here, or click to see selected files</p>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control type="file" />
            </Form.Group>
            <p>JPG, PNG, EPS, AI, PDF</p>
            <p>Max size 8MB</p>
          </div>
          <div>
            <p>
              Don't worry how it looks,we will make it look great and send a
              proof before we add yo yours products
            </p>
          </div>
          <div>
            <div>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Contact me for a logo" />
              </Form.Group>
              <p>Special instructions</p>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Please let us know if you have any special requirements"
                />
              </Form.Group>
            </div>
          </div>
        </div>
        {isChecked ? (
          <Button disabled={false} variant="warning" onClick={()=> (window.alert("Successfull"))}>
            Finish
          </Button> 
        ) : (
          <Button variant="warning" disabled={true}>
          Finish
          </Button>
          
       )}
      </Container>
    </div>
  );
}
