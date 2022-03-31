import React from "react";
import { Nav, Navbar, Container, FloatingLabel, Form } from "react-bootstrap";
import './header.css'
import { Link } from "react-router-dom";
 

export default function Header({toggleMode,mode}) {
  return (
    <div>
      <Navbar bg= "dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Contact</Nav.Link>
            <Nav.Link href="#pricing">About Us</Nav.Link>
          </Nav>
          <div
            className={`form-check form-switch text-${
              mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              onChange={()=>toggleMode}
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable DarkMode{" "}
            </label>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}
