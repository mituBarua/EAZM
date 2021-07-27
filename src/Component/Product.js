import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import "../css/product.css";
import history from "../history";

export default function Product(props) {
  const { title, Img, details, price } = props;
  return (
    <div>
      <Container>
        <Card style={{ width: "18rem" }} className="my-5">
          <Card.Img variant="top" src={Img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text className="product-price">
              {details}
              <p>{price}</p>
            </Card.Text>
            <Button
              variant="primary"
              onClick={() =>
                history.push({
                  pathname: "/ProductDetails",
                  state: {
                    title: title,
                    Img: Img,
                    price: price,
                    details: details,
                  },
                })
              }
            >
              Buy Now
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
