import React, { useEffect, useState } from "react";
import { Reset } from "styled-reset";

import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styled from "styled-components";

function App() {
  const Wrapper = styled.div`
    display: inline-grid;
    grid-template-columns: ${`repeat(${9}, 1fr)`};
    grid-template-rows: ${`repeat(${9}, 1fr)`};
    grid-gap: 1px;
    border: 1px solid var(--oc-gray-9);
    justify-content: center;
    align-items: center;
    /* 임시추가 */
    width: 500px;
    height: 500px;
  `;

  const Wrapper33 = styled.div`
    display: inline-grid;
    grid-template-columns: ${`repeat(${3}, 1fr)`};
    grid-template-rows: ${`repeat(${3}, 1fr)`};
    grid-gap: 1px;
    border: 1px solid var(--oc-gray-9);
    justify-content: center;
    align-items: center;
    /* 임시추가 */
    width: 300px;
    height: 300px;
  `;

  const array = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  return (
    <>
      {/* CSS Style 초기화 */}
      {/* <Reset /> */}
      <div style={{ backgroundColor: "#78AED0", height: "100%" }}>
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
        <div>
          <span>난이도</span>
          <select>
            <option>쉬움</option>
            <option>보통</option>
            <option>어려움</option>
          </select>
        </div>
        <Container style={{ display: "flex" }}>
          <Wrapper>
            {array.map((item) => item.map((cell, index) => <div>{index}</div>))}
          </Wrapper>
          <div style={{ display: "grid" }}>
            <div className="d-flex" style={{ justifyContent: "space-around" }}>
              <h3>실수</h3>
              <h3>시간</h3>
            </div>
            <div>
              <button>새 게임</button>
            </div>
            <div className="d-flex">
              <button>실행 취소</button>
              <button>지우기</button>
              <button>메모</button>
              <button>힌트</button>
            </div>
            <Wrapper33>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
                <div>{index}</div>
              ))}
            </Wrapper33>
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
