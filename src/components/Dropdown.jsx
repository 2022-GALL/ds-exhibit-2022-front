import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function Hamburger() {
    return (
        <Navbar expand="lg">
        <Container>
            {/* <Navbar.Brand href="#login">Sign In</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <NavDropdown title="글로벌융합대학" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/korean">국어국문학전공</NavDropdown.Item>
                    <NavDropdown.Item href="/janpanese">일어일문학전공</NavDropdown.Item>
                    <NavDropdown.Item href="/chinese">중어중문학전공</NavDropdown.Item>
                    <NavDropdown.Item href="/english">영어영문학전공</NavDropdown.Item>
                    <NavDropdown.Item href="/french">불어불문학전공</NavDropdown.Item>
                    <NavDropdown.Item href="/germany">독어독문학전공</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="과학기술대학" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/computer">컴퓨터공학전공</NavDropdown.Item>
                    <NavDropdown.Item href="/itmedia">IT미디어공학전공</NavDropdown.Item>
                    <NavDropdown.Item href="/security">사이버보안전공</NavDropdown.Item>
                    <NavDropdown.Item href="/software">소프트웨어전공</NavDropdown.Item>
                    <NavDropdown.Item href="/bio">바이오공학전공</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Art &amp; Design" id="basic-nav-dropdown">
                </NavDropdown>
                
            </Nav>
            </Navbar.Collapse>
            <Container>
            <Navbar.Brand href="/joinpage">SignIn</Navbar.Brand>
            <Navbar.Brand href="/loginpage">LogIn</Navbar.Brand>
        </Container>
        </Container>
        
        
        </Navbar>
    );
}

export default Hamburger;