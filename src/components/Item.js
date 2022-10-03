
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FetchData from '../utils/FetchData'
import {useState, useEffect} from 'react'
import { useParams, NavLink } from 'react-router-dom'

const Item = ({itemsp})=>{
        return (
                <Card style={{ width: '18rem' , margin:10 }}>
                        <Card.Img variant="top" src={itemsp.foto}/>
                        <Card.Body>
                        <Card.Title>{itemsp.nombre}</Card.Title>
                        <Card.Text>
                        {itemsp.descripcion}
                        </Card.Text>
                        <Card.Text>
                        ${itemsp.precio}
                        </Card.Text>
                        <Button variant="primary">Ver descripcion</Button>
                        </Card.Body>
                </Card>
                
        // <div>     
        // <Container>
        //         {/* <p>{itemsp.precio}</p>
        //         <p>{itemsp.nombre}</p> */}
        //         {/* <div style="float: right;">
        //         </div>  */}
        //         <Row>

        //         <Col >
        //                 <Card style={{ width: '18rem' }}>
        //                 <Card.Img variant="top" src={itemsp.foto} />
        //                 <Card.Body>
        //                         <Card.Title>{itemsp.nombre}</Card.Title>
        //                         <Card.Text>
        //                         {itemsp.descripcion}
        //                         </Card.Text>
        //                         <Card.Text>
        //                         ${itemsp.precio}
        //                         </Card.Text>
        //                         <Button variant="primary">Ver detalle</Button>
        //                 </Card.Body>
        //                 </Card>
        //         </Col>


        //         </Row>
        // </Container>
        // </div>
        )};
export default Item;
