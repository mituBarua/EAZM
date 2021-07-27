import React, { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { MDBIcon } from "mdb-react-ui-kit";
import history from "../history";

export default function ApplicationMethod() {
  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <Container>
        <h2 className="my-5">Add Customization</h2>
        <h3 className="my-5">2. Choose Application Method</h3>

        <div>
          <Card className="w-50 my-5">
            <Card.Body className="d-flex align-item-center">
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  value="1"
                  checked={isChecked}
                  onChange={handleOnChange}
                />
              </Form.Group>
              <div className="icon-color">
                <MDBIcon fas icon="blender-phone" className="mx-2" />
                <span>Embroidery(Stiching)</span>
                <p>Detailed and durable ideal for uniforms.</p>
              </div>
            </Card.Body>
          </Card>
          <Card className="w-50 my-5">
            <Card.Body className="d-flex align-item-center">
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" value="2" />
              </Form.Group>
              <div className="icon-color">
                <MDBIcon fas icon="tint" className="mx-2" />
                <span>Print</span>
                <p>Vivid and flexible ideal for general use.</p>
              </div>
            </Card.Body>
          </Card>
          <div className="d-flex align-item-center justify-content-between w-50">
            <Button
              variant="secondary"
              onClick={() => history.push("./Customization")}
            >
              Back Step
            </Button>
            {isChecked ? (
              <Button
                variant="warning"
                disabled={false}
                onClick={() => history.push("./ChooseArtwork")}
              >
                Continue
              </Button>
            ) : (
              <Button
                variant="warning"
                disabled={true}
                onClick={() => history.push("./ChooseArtwork")}
              >
                Continue
              </Button>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
