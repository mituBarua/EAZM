import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import InfoModal from "./InfoModal";
import "../css/ProductDetails.css";

export default function ProductDetails(props) {
  const { Img, details } = props.location.state;
  const [count, setCount] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="my-5">
      <Container>
        <Row>
          <Col>
            <div>
              <img src={Img} />
            </div>
          </Col>
          <Col>
            <p className="top-selling">Top Selling Primium T-shirt</p>
            <p className="pro-details">{details}</p>
            <p>Plain Pricing</p>
            <div className="price-list">
              <ul>
                <li>
                  <span>1 item</span>
                  <p>£4.71</p>
                </li>
                <li>
                  <span>25+ items</span>
                  <p>£4.71</p>
                </li>
                <li>
                  <span>50+ items</span>
                  <p>£4.38</p>
                </li>
                <li>
                  <span>100+ items</span>
                  <p>£4.71</p>
                </li>
                <li>
                  <span>250 items</span>
                  <p>£4.71</p>
                </li>
              </ul>
            </div>
            <div className="my-4">
              <p>1. Select Color</p>
              <div className="checkbox-color">
                <Form.Group
                  className="mb-3 color-1"
                  controlId="formBasicCheckbox"
                >
                  <Form.Check type="checkbox" />
                </Form.Group>
                <Form.Group className="mb-3 " controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" className="color-4" />
                </Form.Group>
              </div>
            </div>
            <div className="sizing">
              <div>
                <Form.Group
                  className="mb-3 color-1"
                  controlId="formBasicCheckbox"
                >
                  <Form.Check
                    type="checkbox"
                    label="XS"
                    checked={isChecked}
                    onChange={handleOnChange}
                  />
                </Form.Group>
              </div>
              <div className="stock">
                <div className="d-flex align-items-center justify-content-around ">
                  <span>in stock</span>
                  <Button onClick={() => setCount(count + 1)}>+</Button>
                  <p> {count} </p>
                  <Button onClick={() => setCount(count - 1)}>-</Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        {isChecked ? <InfoModal Img={Img} /> : "select checkbox"}
      </Container>
    </div>
  );
}
