import { Nav, Navbar, NavDropdown, Container} from "react-bootstrap";

const Header=()=>(
 <Navbar variant="dark" bg="dark" expand="lg">
  <Container fluid>
    <Navbar.Toggle aria-controls="navbar-dark-example" />
    <Navbar.Collapse id="navbar-dark-example">
      <Nav>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Menu"
          menuVariant="dark"
        >
          <NavDropdown.Item href="/aboutme">About me</NavDropdown.Item>
          <NavDropdown.Item href="/gallery">Gallery</NavDropdown.Item>
          <NavDropdown.Divider />
          <div>Аватар</div>
   <div>Юлия Баскакова</div>
   <div>juliabaskakova3012@gmail.com</div>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        
)
export default Header;