import React, { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import history from "../history";
import "../css/ChooseArtwork.css";
import { MDBIcon } from "mdb-react-ui-kit";

export default function ChooseApplicationType() {
  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div>
      <Container>
        <h3 className="my-5">4.Choose Application Type</h3>

        <Card className="w-50">
          <Card.Body className="d-flex align-items-start">
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                checked={isChecked}
                onChange={handleOnChange}
              />
            </Form.Group>
            <div className="d-flex align-items-center w-100">
              <div className="d-flex align-items-center justify-content-around w-25 icon-colorr">
                <MDBIcon fas icon="star-of-life" />
                <span>Logo</span>
              </div>
            </div>
          </Card.Body>
        </Card>

        <Card className="w-50 my-5">
          <Card.Body className="d-flex align-items-start">
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" />
            </Form.Group>
            <div className="d-flex align-items-center w-100">
              <div className="d-flex align-items-center justify-content-around w-25 icon-colorr">
                <MDBIcon fas icon="text-height" />
                <span>Text</span>
              </div>
            </div>
          </Card.Body>
        </Card>
        <div className="my-5 d-flex align-item-center justify-content-between w-50">
          <Button
            variant="secondary"
            onClick={() => history.push("/ChooseArtwork")}
          >
            Back Step
          </Button>
          {isChecked ? (
            <Button
              disabled={false}
              variant="warning"
              onClick={() => history.push("/ConfigureLogo")}
            >
              Continue
            </Button>
          ) : (
            <Button
              variant="warning"
              disabled={true}
              onClick={() => history.push("/ConfigureLogo")}
            >
              Continue
            </Button>
          )}
        </div>
      </Container>
    </div>
  );
}
