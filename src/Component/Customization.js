import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Position from "./Position";
import pos1 from "../img/pos-1.jpg";
import pos2 from "../img/pos-2.jpg";
import pos3 from "../img/pos-3.jpg";
import pos4 from "../img/pos-4.jpg";
import pos5 from "../img/pos-5.jpg";
import pos7 from "../img/pos-7.jpg";
import history from "../history";

export default function Customization(props) {

  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };
  console.log(isChecked);
  //  console.log(setIsChecked);
  return (
    <div>
      <Container>
        <h2 className="m-3">Add Customization</h2>
        <h3 className="m-3">Choose positions</h3>
        <Row className="my-3 py-3">
          <Col>
            <Position
              img={pos1}
              title="Left breast"
              checked={isChecked}
              onChange={handleOnChange}
            />
          </Col>
          <Col>
            <Position img={pos2} title="Right breast" />
          </Col>
          <Col>
            <Position img={pos3} title="Center of Chest" />
          </Col>
          <Col>
            <Position img={pos4} title="Left-Sleeve" />
          </Col>
          <Col>
            <Position img={pos5} title="Right-Sleeve" />
          </Col>
          <Col>
            <Position img={pos7} title="Big-Back" />
          </Col>
        </Row>
        <div className="d-flex align-items-center justify-content-center">
          {/* {isChecked ? ( */}
            <Button
              variant="warning"
              onClick={() => history.push("/ApplicationMethod")}
            >
              Continue
            </Button>
          {/* ) : (
            "Choose Position"
          )} */}
        </div>
      </Container>
    </div>
  );
}
