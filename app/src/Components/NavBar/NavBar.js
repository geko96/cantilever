import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';



export default function NavBar() { 
    return (
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Cantilever</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        
        <NavDropdown title="Facturador" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Emitir</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Clientes</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Productos</NavDropdown.Item>
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
        <Nav.Link href="#login">Login</Nav.Link>
      </Navbar.Text>
      <Nav.Link href="#home">Soporte</Nav.Link>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}