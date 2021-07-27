import React from "react";
import Product from "./Product";
import tshirt from "../img/t-shirt.jpg";
import blacktshirt from "../img/black.jpg";
import { Row, Col, Container } from "react-bootstrap";

export default function ChooseProduct(props) {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Product
              Img={tshirt}
              title={"GILDAN"}
              details={"Best Value Cotton T-Shirt"}
              price={"£2.93 - £3.88 ex. VAT"}
            />
          </Col>
          <Col>
            <Product
              Img={blacktshirt}
              title={"GILDAN"}
              details={"Best Value Cotton T-Shirt "}
              price={"£3.93 - £3.88 ex. VAT"}
            />
          </Col>
          <Col>
            <Product
              Img={tshirt}
              title={"GILDAN"}
              details={"Best Value Cotton T-Shirt"}
              price={"£2.93 - £3.88 ex. VAT"}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
