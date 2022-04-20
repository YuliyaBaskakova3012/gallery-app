import { Nav, Navbar, NavDropdown, Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.png";

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
          <NavDropdown.Item ><Link style={{"textDecoration": "none", "color": "#FFFFFF"}} to="gallery">Gallery</Link></NavDropdown.Item>
          <NavDropdown.Item ><Link style={{"textDecoration": "none", "color": "#FFFFFF"}} to="/aboutme" >About me</Link></NavDropdown.Item>
          <NavDropdown.Divider />
          <div style={{"padding": "4px 16px"}}><img src={avatar} alt ="avatar" style={{"width": "3rem"}}/></div>
          <div style={{"padding": "4px 16px"}}>Юлия Баскакова</div>
          <div style={{"padding": "4px 16px"}}>juliabaskakova3012@gmail.com</div>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        
)
export default Header;