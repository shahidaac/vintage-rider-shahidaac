import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useEffect } from "react";
import Rider from "../Rider/Rider";

const Home = () => {
  const [riders, setRiders] = useState([]);
  useEffect(() => {
    fetch("./Data/Data.json")
      .then((res) => res.json())
      .then((data) => setRiders(data));
  }, []);
  return (
    <section className="riders">
      <Container>
        <Row>
          {riders.map((rider) => (
            <Rider key={rider.id} rider={rider}>
              {" "}
            </Rider>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Home;
