import React from "react";
import { useParams, useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Map from "../../images/Map.png";
import "./Book.css";

const Book = () => {
  const { riderType } = useParams();
  const history = useHistory();
  const handleBooks = (riderType) => {
    history.push(`/search-result/${riderType}`);
  };

  return (
    <div className="everyCard">
      <Container>
        <Row>
          <Col md={4} xs={12}>
            <div className="rideSeek">
              <h3>Riding with {riderType}</h3>
              <label htmlFor="pick-from">(Pick From)</label>
              <input type="text" name="pick-from" placeholder="Muradpur" />
              <label htmlFor="pick-To">(pick to)</label>
              <input type="text" name="pick-To" placeholder="Wasa" />
              <label htmlFor="date-from">(date from)</label>
              <input type="date" name="date-from" />
              <label htmlFor="date-to">(date to)</label>
              <input type="date" name="date-to" />
              <button
                onClick={() => handleBooks(riderType)}
                className="ride-btn"
              >
                Search {riderType}
              </button>
            </div>
          </Col>
          <Col md={8} xs={12}>
            <div className="mapImage">
              <img src={Map} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Book;
