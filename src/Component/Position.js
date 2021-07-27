import React, { useState } from "react";
import { Container, Card, InputGroup } from "react-bootstrap";
import { MDBIcon } from "mdb-react-ui-kit";
import "../css/Position.css";

export default function Position(props) {
  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Container>
      <Card style={{ width: "15rem" }} className="my-3">
        <div className="position-img">
          <Card.Img variant="top" src={props.img} className="card-img" />
        </div>
        <Card.Body className="position-body">
          <Card.Title>{props.title}</Card.Title>
          <span>(Applied to all)</span>
          <Card.Text>
            <p className="text-center">Applicaiton option</p>
            <div className="icon-color">
              <MDBIcon fas icon="tint" className="p-2" />
              <span>Print</span>
              <MDBIcon fas icon="blender-phone" className="p-2" />
              <span>Embroidery</span>
            </div>
          </Card.Text>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox
              aria-label="Checkbox for following text input"
              checked={isChecked}
              onChange={handleOnChange}
            />
          </InputGroup>
        </Card.Body>
      </Card>
    </Container>
  );
}
