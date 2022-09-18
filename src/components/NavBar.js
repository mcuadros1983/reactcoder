import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './img/logo.jpg';
import CartWidget from './CartWidget';


function NavBar() {

  return (
    <>
    {/* <Navbar bg="light" variant="light"> */}
    <Navbar>
        <Container>
          <Navbar.Brand href="#home">
          <img
              src={logo}
              width="110"
              height="100"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#inicio"><b>INICIO</b></Nav.Link>
            <Nav.Link href="#contacto"><b>CONTACTO</b></Nav.Link>
            <Nav.Link href="#nosotros"><b>NOSOTROS</b></Nav.Link>
            <Nav.Link href="#lista"><b>LISTA DE PRECIOS</b></Nav.Link>
            <Nav.Link href="#sucursales"><b>SUCURSALES</b></Nav.Link>
          </Nav>
          <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <CartWidget/>
                </Navbar.Text>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
  );
}

export default NavBar;