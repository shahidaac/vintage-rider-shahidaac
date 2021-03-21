import React, { Component } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Destination.css";
import Data from "../../Data/Data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";

const Destination = () => {
  const { riderType } = useParams();

  let result = Data.find((vehicle) => vehicle.riderType === riderType);

  const { img, title, capacity, price } = result;
  const containerStyle = {
    width: "100%",
    height: "500px",
  };

  const center = {
    lat: -3.745,
    lng: -38.523,
  };

  return (
    <div className="everyCard">
      <Container>
        <Row>
          <Col md={4} xs={12}>
            <div className="search-result">
              <h3>
                Riding with {title} <img src={img} alt="" />
              </h3>
              <div className="destination">
                <p> Muradpur</p>
                <p>To</p>
                <p> Wasa</p>
              </div>
              <ol>
                <li>
                  <img src={img} alt="" /> {title}
                  <FontAwesomeIcon icon={faUserFriends} /> {capacity}
                  <span> ${price}</span>
                </li>
                <li>
                  <img src={img} alt="" /> {title}{" "}
                  <FontAwesomeIcon icon={faUserFriends} /> {capacity}
                  <span> ${price}</span>
                </li>
                <li>
                  <img src={img} alt="" /> {title}{" "}
                  <FontAwesomeIcon icon={faUserFriends} /> {capacity}{" "}
                  <span> ${price}</span>
                </li>
              </ol>
            </div>
          </Col>
          <Col md={8} xs={12}>
            <div>
              <LoadScript googleMapsApiKey="AIzaSyBbzjCXp-7qxqnpxkcgpHQwXbgosVCrx5E">
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={10}
                ></GoogleMap>
              </LoadScript>
              <img src={Map} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Destination;
