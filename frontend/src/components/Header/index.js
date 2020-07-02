import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './style.css'
export default function Header() {
  return (
  <Navbar collapseOnSelect expand="lg" variant="dark">
    <Navbar.Brand className="pokedex-logo" as={Link} to="/">Pokédex</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link className='nav__link' as={Link} to="/save">Register Pokémon</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}
