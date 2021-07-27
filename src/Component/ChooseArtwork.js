import React, { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import history from "../history";
import "../css/ChooseArtwork.css";

export default function ChooseArtwork() {
  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div>
      <Container>
        <h3 className="my-5">3.Choose artwork</h3>
        <p>Add your logo/text</p>

        <Card className="w-50">
          <Card.Body className="d-flex align-items-start">
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                checked={isChecked}
                onChange={handleOnChange}
              />
            </Form.Group>
            <div className="d-flex align-items-center justify-content-evenly w-100">
              <span className="new">New</span>
              <span>Add a new Customization</span>
              <span>+ £8.95 One-Time Logo Setup Fee</span>
            </div>
          </Card.Body>
        </Card>
        <div className="my-5 d-flex align-item-center justify-content-between w-50">
          <Button
            variant="secondary"
            onClick={() => history.push("/ApplicationMethod")}
          >
            Back Step
          </Button>
          {isChecked ? (
            <Button
              disabled={false}
              variant="warning"
              onClick={() => history.push("/ChooseApplicationType")}
            >
              Continue
            </Button>
          ) : (
            <Button
              variant="warning"
              disabled={true}
              onClick={() => history.push("/ChooseApplicationType")}
            >
              Continue
            </Button>
          )}
        </div>
      </Container>
    </div>
  );
}
