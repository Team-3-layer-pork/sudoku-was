import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Link to={"/"}>
        <h1>헤더입니다.</h1>
      </Link>
    </>
  );
}

export default Header;
