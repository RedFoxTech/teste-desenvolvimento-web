import React, { Component } from 'react';
import { Col, Row, Accordion, Card, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

class Sidebar extends Component {
	loggout() {
		const { dispatch } = this.props;
		dispatch({
			type: '@auth/LOGOUT',
		});
	}
	render() {
		return (
			<Row className='h-100'>
				<Col lg={3} xl={2} className='d-none d-lg-block'>
					<Card className='h-100'>
						<Card.Header className='text-center'>
							<h3> Admin </h3>
						</Card.Header>
						<Accordion>
							<Card.Header className='text-center'>
								<Accordion.Toggle
									as={Button}
									variant='link'
									eventKey='0'>
									Pokemons
								</Accordion.Toggle>
							</Card.Header>
							<Accordion.Collapse eventKey='0'>
								<Card.Body>
									<Container>
										<Row className='d-flex flex-column text-center'>
											<Link
												className='pb-2'
												to='/admin/pokemons'>
												Pokemons
											</Link>
											<Link
												className='pb-2'
												to='/admin/types'>
												Types
											</Link>
											<Link
												className='pb-2'
												to='/admin/weather'>
												Weathers
											</Link>
										</Row>
									</Container>
								</Card.Body>
							</Accordion.Collapse>
						</Accordion>
						<Button onClick={() => this.loggout()}>
							{' '}
							Loggout{' '}
						</Button>
					</Card>
				</Col>
				{this.props.children}
			</Row>
		);
	}
}

export default connect()(Sidebar);
