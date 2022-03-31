import React from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap'
import Homepage from './Home'
import Contact from './Contact'
export default function Navbar1() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home"></Nav.Link>
      <Nav.Link href="#features"></Nav.Link>
      <Nav.Link href="#pricing"></Nav.Link>
    </Nav>
    </Container>
  </Navbar>

    </>
  )
}
