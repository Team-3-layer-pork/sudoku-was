import React, { useEffect, useState } from "react";
import { Reset } from "styled-reset";

import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <>
      {/* CSS Style 초기화 */}
      {/* <Reset /> */}
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Container
          style={{ backgroundColor: "pink" }}
          className="position-absolute top-50 start-50 translate-middle"
        >
          <Row>
            <Col style={{ backgroundColor: "gray" }}>1 of 2</Col>
            <Col>2 of 2</Col>
          </Row>
          {/* <Row>
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
          </Row> */}
        </Container>
      </div>
    </>
  );
}

export default App;
