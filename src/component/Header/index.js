import { React } from 'react';
import { Nav, Navbar,} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.scss'

const Header = () =>{
    return(
        <div className='header'>
            <Navbar className = "bg-color" expand="lg">
                <Navbar.Brand href={`${process.env.PUBLIC_URL}/home`}>Dompet Digital</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href={`${process.env.PUBLIC_URL}/home`}>Form</Nav.Link>
                        <Nav.Link href={`${process.env.PUBLIC_URL}/dashboard`}>Dashboard</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header