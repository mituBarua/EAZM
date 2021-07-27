import React from "react";
import { Container, Form } from "react-bootstrap";
import "../css/ChooseArtwork.css";

export default function ConfigureForm() {
  return (
    <div>
      <Container className="container-custom">
        <div>
          <h3 className="my-5">5.Configure your Logo</h3>

          <div className="w-100">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Text Line 1*</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Text Line 2(Optional)</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Text Line 3(Optional)</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              {/* <Form.Group>
                <Form.Select aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group> */}
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
}
