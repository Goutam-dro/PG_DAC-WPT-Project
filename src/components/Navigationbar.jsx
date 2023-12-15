import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


export function Navigationbar(){
    return(
        <Navbar bg="dark" expand="lg" data-bs-theme="dark">
            <Container >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <LinkContainer to="/">
                    <Nav.Link> <img src="Image/logo.jpg" alt="Logo" /> </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/">
                    <Nav.Link> <h3 id="logo">SPACEROOT <h6>AEROSPACE</h6></h3> </Nav.Link>
                </LinkContainer>
                <LinkContainer id="content" to="/">
                    <Nav.Link> Home </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about">
                    <Nav.Link>About</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/mission">
                    <Nav.Link>Missions</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/services">
                    <Nav.Link>Services</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/product">
                    <Nav.Link>Products</Nav.Link>
                </LinkContainer>
    <Dropdown>
      <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
        People
      </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1"><LinkContainer to="/registration"><Nav.Link>Registration</Nav.Link></LinkContainer></Dropdown.Item>
                <Dropdown.Item href="#/action-2"><LinkContainer to="/login"><Nav.Link>Login</Nav.Link></LinkContainer></Dropdown.Item>
                <Dropdown.Item href="#/action-2"><LinkContainer to="/member-list"><Nav.Link>Member List</Nav.Link></LinkContainer></Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    )
}