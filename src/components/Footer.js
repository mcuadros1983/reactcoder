import React from "react"
import {Link,NavLink} from 'react-router-dom';

const Footer = () => 

<footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">LA TRADICION CARNICERIAS</h5>
                <p>La mejor calidad, la encontrás en La Tradición Carnicerías.</p>
                <p>Direccion: Ayacucho 1218, San Fernando del Valle de Catamarca</p>
                <p>Tel.: 383 4455815</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a style={{ textDecoration: 'none' }} href="#!">Quienes somos</a></li>
                    <li><a style={{ textDecoration: 'none' }} href="#!">Contactanos</a></li>
                    <li><a style={{ textDecoration: 'none' }} href="#!">Trabaja con Nosotros</a></li>
                    {/* <li><a href="#!">Link 4</a></li> */}
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Nuestros Productos</h5>
                <ul className="list-unstyled" >  
                    <NavLink style={{textDecoration:"none"}} to={`/category/1`}>Cortes de Novillo</NavLink><br/>
                    <NavLink style={{textDecoration:"none"}} to={`/category/2`}>Productos Elaborados</NavLink>
                    <li><a href="#!" style={{ textDecoration: 'none' }}>Cerdos</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2022 Copyright:
        <a href="https://www.latradicioncarnicerias.com/"> LA TRADICION CARNICERIAS</a>
    </div>

</footer>

export default Footer