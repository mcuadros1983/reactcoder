
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams, NavLink } from 'react-router-dom'
import ItemCounts from './ItemCounts';

const Item = ({itemsp})=>{
        return (
                <>
                <Card style={{ width: '18rem' , margin:10 }}>
                        <Card.Img variant="top" src={itemsp.img} alt={itemsp.descripcion} width='200' />
                        <Card.Body>
                        <Card.Title>{itemsp.nombre}</Card.Title>
                        <Card.Text>
                        {itemsp.descripcion}
                        </Card.Text>
                        <Card.Text>
                        ${itemsp.precio}
                        </Card.Text>
                        <NavLink to={`/items/${itemsp.id}`}><Button variant="primary">Ver descripcion</Button></NavLink><br/><br/>
                        </Card.Body>
                        
                </Card>
                </>
                
                      )};
export default Item;
