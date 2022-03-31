import React from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap'
import Homepage from './Home'
import Contact from './Contact'
import {Link} from 'react-router-dom'
export default function Navbar1() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link  to={"/home"}></Nav.Link>
      <Link className="nav-link" to={"/"}>Home</Link>
      <Nav.Link    to={"/contact"}></Nav.Link>
      <Link className="nav-link" to={"/contact"}>contact</Link>
      <Nav.Link href="#pricing"></Nav.Link>
    </Nav>
    </Container>
  </Navbar>

    </>
  )
}
