import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';

import {
    Link

} from "react-router-dom";
function Header() {
    const cart = useSelector((state) => state.Addproduct.value.length)

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-danger-subtle">
            <Container>
                <Navbar.Brand href="#home">Home Design</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Link to="/" className="p-2" style={{ "textDecoration": 'none', "color": "black" }}>  Home  </Link>
                    </Nav>
                    <Nav >
                        <Link to="/cart" className="p-2" style={{ "textDecoration": 'none', "color": "black" }}>  Cart   </Link>
                    </Nav>
                    <Nav className="p-2" style={{ "textDecoration": 'none', "color": "black" }}>  Cart Item  {cart || 0}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;