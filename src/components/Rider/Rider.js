import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";

export default function Rider({ rider }) {
  const history = useHistory();
  const handleBook = (riderType) => {
    history.push(`/destination/${riderType}`);
  };
  return (
    <Col md={3} xs={12}>
      <Card>
        <Card.Img variant="top" src={rider.img} />
        <Card.Body>
          <Card.Title onClick={() => handleBook(rider.riderType)}>
            {rider.title}
          </Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
}
