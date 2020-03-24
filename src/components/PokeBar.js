import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'


export default function PokeBar({getAll}) {

    return (
        <>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Navbar.Brand>PokeDex</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#" onClick={(e) => {
                             getAll()
                        }} >FindByType</Nav.Link>
                        <Nav.Link href="#">FindByWeather</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
