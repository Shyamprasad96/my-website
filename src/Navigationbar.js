import {Nav,Navbar,NavLink} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./Navigationbar.css"

const Navigationbar=()=>{
    return(
        <Navbar className="navbar" collapseOnSelect expand="sm" >
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#NavbarScroll"/>
            <Navbar.Collapse id="NavbarScroll">
                <Nav className="imageWrapper">
                    <NavLink  className="lb1" eventKey="1" as={Link} to="/"><h5>Home</h5></NavLink>
                    <NavLink className="lb" eventKey="2" as={Link} to="/about"><h5>About</h5></NavLink>
                    <NavLink className="lb" eventKey="3" as={Link} to="/code"><h5>Code</h5></NavLink>
                    <NavLink className="lb" eventKey="4" as={Link} to="/personal"><h5>Personal</h5></NavLink>
                    <NavLink className="lb" eventKey="5" as={Link} to="/work"><h5>Work</h5></NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )

}

export default Navigationbar;