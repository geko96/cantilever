import { useContext } from "react";
import { contexto } from "../Context/Context";
import './Landing.css';
import { Navbar, NavDropdown, Nav, Container, Button, Table } from 'react-bootstrap';


export default function Welcome() {
    const {loged, setLoged, user, setUser} = useContext(contexto);

    

    return (
        <>
            <h1 className="welcomeBanner">Bienvenido {user.name}</h1>
            <div className="productos">
            <Navbar bg="dark" variant="dark">
              <Container>
              <Navbar.Brand>Puntos de facturación</Navbar.Brand>
              <Nav className="justify-content-end">
                <Nav.Link><Button variant="dark">Nuevo</Button></Nav.Link>
                <Nav.Link><Button variant="dark">Editar</Button></Nav.Link>
                <Nav.Link><Button variant="dark">Buscar</Button></Nav.Link>
                <Nav.Link><Button variant="dark">Eliminar</Button></Nav.Link>
                
              </Nav>
              </Container>
            </Navbar>
            <p></p>

            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Direccion</th>
                  <th>Cajas</th>
                  <th>Estatus</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Principal</td>
                  <td>Florida 515</td>
                  <td>7</td>
                  <td>Operativo</td>
                </tr>

              </tbody>
            </Table>
        </div>
        </>
    );
}