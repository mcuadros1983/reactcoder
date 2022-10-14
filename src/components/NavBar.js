import React, {useContext} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './img/logo.jpg';
import CartWidget from './CartWidget';
import {Link,NavLink} from 'react-router-dom';
import Contexts from '../context/Contexts';


function NavBar() {
  const contexto = useContext(Contexts.cartContext)

  return (
    <>
    <Navbar >
        <Container>
          <Link to={'/'}><Navbar.Brand>
          <img
              src={logo}
              width="110"
              height="100"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand></Link>
          <Nav className="me-auto"> 
            <NavLink style={{textDecoration:"none"}} to={'/'}><b>INICIO</b></NavLink>&nbsp;&nbsp;
            <NavLink style={{textDecoration:"none"}} to={`/category/1`}>Cortes de Novillo</NavLink>&nbsp;&nbsp;
            <NavLink style={{textDecoration:"none"}} to={`/category/2`}>Productos Elaborados</NavLink>
            
          </Nav>
          <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                     {/* {contexto.value.length>0 && (
                    <CartWidget/>)} */}
                    
                    <CartWidget/>
                    

                </Navbar.Text>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
  );
}

export default NavBar;


