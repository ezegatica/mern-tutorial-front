import React, { Component } from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
export class Navigation extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <NavLink to="/"><Navbar.Brand>Mern-Tutorial</Navbar.Brand></NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink className="nav-link" to="/crear">Crear nota</NavLink>
                        <NavLink className="nav-link" to="/user">Crear usuario</NavLink>
                        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Nav>
                        <Nav.Link href="https://eze.wtf">Pagina principal</Nav.Link>
                        <Nav.Link eventKey={2} href="https://apps.eze.wtf">
                            Mas apps!
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation
