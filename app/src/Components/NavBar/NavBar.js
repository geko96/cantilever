import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { contexto } from '../Context/Context';
import { useContext } from 'react';
import './NavBar.css';


export default function NavBar() { 
  const {loged, setLoged} = useContext(contexto);
    return (
        <Navbar bg="dark" variant='dark' expand="lg">
  <Container>
    <Navbar.Brand><Link to='/' className='LogoPrincipal'>Cantilever</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        
        <NavDropdown title="Facturador" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Emitir</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Clientes</NavDropdown.Item>
          <NavDropdown.Item><Link to='/productos'>Productos</Link></NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Proveedores</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Resumenes</NavDropdown.Item>
          
        </NavDropdown>
        <NavDropdown title="In-Out" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Balanza</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Acopio</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Deposito</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Proveedores</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Resumenes</NavDropdown.Item>
          
        </NavDropdown>

        <NavDropdown title="Mantenimiento" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Emitir orden</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Ordenes emitidas</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Equipos</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Lineas de equipos</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Preventivo</NavDropdown.Item>
          
        </NavDropdown>

        <Nav.Link href="#home">Configuracion</Nav.Link>
        

        
      </Nav>
    </Navbar.Collapse>

    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        
        <Nav.Link onClick={() => {
          setLoged(false)
          Swal.fire({
            title: "Sesion cerrada",
            position: "top-end",
            timer: 2000,
            icon: "success",
            showConfirmButton: false
          })
          localStorage.clear();
        }}><Link to='/' className='LogoPrincipal'>LogOut</Link></Nav.Link>
        
      </Navbar.Text>
      <Nav.Link href="#home">Soporte</Nav.Link>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}