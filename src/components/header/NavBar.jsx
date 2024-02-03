import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <>
            <Navbar bg="dark" className="mt-0" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">LLB Developer</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/AboutMe">About me</Nav.Link>
                        <Nav.Link as={Link} to="/Portfolio">Portfolio</Nav.Link>
                        <Nav.Link as={Link} to="/Contacto">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;
