import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
import Contexts from '../context/Contexts';

function Contact() {
  const context = useContext(Contexts.cartContext)

  return (
    <Form>

      <Form.Group className="mb-3" >
      <Form.Label>DATOS DE CONTACTO</Form.Label><br/><br/>

        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" name="name" onChange={ev=>context.setName(ev.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Numero de Telefono</Form.Label>
        <Form.Control type="number" name="phone" onChange={ev=>context.setPhone(ev.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Direccion de Email</Form.Label>
        <Form.Control type="email" name="email" onChange={ev=>context.setEmail(ev.target.value)}/>
      </Form.Group>
    </Form>
    
  );
}

export default Contact;