import { useContext } from "react";
import { Button, Table, Navbar, Container, Nav } from "react-bootstrap";
import { contexto } from "../../Context/Context";
import './Productos.css';

export default function Productos() {
    const {loged, setLoged, user, setUser} = useContext(contexto);
    

    return (
        <div className="productos">
            <Navbar bg="dark" variant="dark">
              <Container>
              <Navbar.Brand>Productos</Navbar.Brand>
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
                  <th>Precio Principal</th>
                  <th>Otros Precios</th>
                  <th>Stock</th>
                  <th>IVA</th>
                  <th>Proveedores</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Hamburguesa</td>
                  <td>$500</td>
                  <td><Button>Otros Precios</Button></td>
                  <td>7357 Un</td>
                  <td>21%</td>
                  <td><Button>Ver Proveedores</Button></td>
                </tr>

              </tbody>
            </Table>
        </div>
        
    )
}