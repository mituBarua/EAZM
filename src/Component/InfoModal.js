import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { MDBIcon } from "mdb-react-ui-kit";
import "../css/InfoModal.css";
import tshirt from "../img/t-shirt.jpg";
import history from "../history";

export default function InfoModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="basket-bg">
        <Button className="nextButton" onClick={handleShow}>
          Add Basket
        </Button>
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">
            <MDBIcon fas icon="check" className="check-icon" />
            Added to Basket
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="d-flex align-items-center">
            <img
              src={tshirt}
              height="50"
              width="50"
              className="m-2"
              alt="t-shirt"
            />
            <h4>Best Value Cotton T-shirt</h4>
          </div>
          <div className="mx-5 px-3">
            <p>Product code: GD005</p>
            <p>White / L x 1</p>
          </div>

          <div className="count">
            <div className="count-item">
              <p>1 items</p>
              <p>£3.88 per item</p>
            </div>
            <div>
              <p>
                Total: <span>£3.88</span> ex. VAT
              </p>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="warning"
            onClick={() => history.push("/Customization")}
          >
            Add your logo now
          </Button>
          <Button variant="primary" onClick={handleClose}>
            View Basket
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
