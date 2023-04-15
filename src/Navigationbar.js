import {Nav,Navbar,NavLink} from "react-bootstrap";
import {Link} from "react-router-dom";

const Navigationbar=()=>{
    return(
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#NavbarScroll"/>
            <Navbar.Collapse id="NavbarScroll">
                <Nav>
                    <NavLink eventKey="1" as={Link} to="/">Home</NavLink>
                    <NavLink eventKey="2" as={Link} to="/about">About</NavLink>
                    <NavLink eventKey="3" as={Link} to="/code">Code</NavLink>
                    <NavLink eventKey="4" as={Link} to="/personal">Personal</NavLink>
                    <NavLink eventKey="5" as={Link} to="/work">Work</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )

}

export default Navigationbar;