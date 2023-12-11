// import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  Link} from 'react-router-dom';
import logo from "../images/zithas-logo-og_qruynr.avif"

const img={
  height:"80px"
}
export default function Navbarcomp() {
  return (

    <Navbar expand="lg" className="bg-success" variant={"dark"}>
      <Container fluid >
        <Navbar.Brand href="#"><img src={logo} style={img}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
    
            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/about"}>About us</Nav.Link>
            <Nav.Link as={Link} to={"/services"}>Services</Nav.Link>
            <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  

  );
}

