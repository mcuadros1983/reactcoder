import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './img/logo.jpg';
import CartWidget from './CartWidget';
import {Link,NavLink} from 'react-router-dom';

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
            <button>
              <Link to={'/'}>HOME</Link>
            </button>
            <button>
              <Link to={'/prueba1'}>Prueba1</Link>
            </button>
            <button>
              <Link to={'/prueba2'}>Prueba2</Link>
            </button>
            <button>
              <NavLink to={'/items/:id'}>Prueba3</NavLink>
            </button>
            {/* <Nav.Link href="#inicio"><b>INICIO</b></Nav.Link>
            <Nav.Link href="#novillos"><b>CORTES DE NOVILLOS</b></Nav.Link>
            <Nav.Link href="#cerdos"><b>CORTES DE CERDOS</b></Nav.Link>
            <Nav.Link href="#elaborados"><b>PRODUCTOS ELABORADOS</b></Nav.Link>
            <Nav.Link href="#packs"><b>PACKS Y COMBOS</b></Nav.Link> */}
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