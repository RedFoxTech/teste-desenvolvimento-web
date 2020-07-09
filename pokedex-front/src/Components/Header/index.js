import React, { Component } from 'react';
import {
	Navbar,
	Nav,
	NavDropdown,
	Form,
	FormControl,
	Button,
	Container,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { navbarLink } from './style';

export default class Header extends Component {
	render() {
		return (
			<Navbar bg='dark' expand='lg'>
				<Container>
					<Navbar.Brand>
						<Link to='/' style={navbarLink}>
							Pokédex
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='mr-auto'>
							<Nav.Link href='#home'>Home</Nav.Link>
							<NavDropdown
								title='Categorias'
								id='basic-nav-dropdown'>
								<NavDropdown.Item href='#action/3.1'>
									Action
								</NavDropdown.Item>
								<NavDropdown.Item href='#action/3.2'>
									Another action
								</NavDropdown.Item>
								<NavDropdown.Item href='#action/3.3'>
									Something
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href='#action/3.4'>
									+ Adicionar categoria
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<Form inline>
							<FormControl
								type='text'
								placeholder='Search'
								className='mr-sm-2'
							/>
							<Button variant='outline-success'>Search</Button>
						</Form>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		);
	}
}
