import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import logo from '../assets/images/rexfox.jpg'
import './style.css'
export default props => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="60"
          height="60"
          className="d-inline-block align-top"
        />{'   '}
        Desafio Pokedex RedFox
      </Navbar.Brand>
    </Navbar>
  )
}