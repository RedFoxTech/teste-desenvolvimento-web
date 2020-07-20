import React, { Component } from 'react';
import SideBar from 'Components/SideBar';

import {
	Col,
	Container,
	Card,
	Row,
} from 'react-bootstrap';

import api from 'services/api';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

export default class weathers extends Component {
	constructor(props) {
		super(props);
		this.state = {
			weathers: [],
		};
	}

	componentDidMount() {
		this.getWeathers();
	}

	getWeathers() {
		api.get('/weathers').then(response => {
			const { data } = response;
			this.setState({ weathers: data });
		});
	}

	render() {
		return (
			<SideBar>
				<Col className='mt-5'>
					<Container>
						<Card>
							<Card.Header className='pb-5 pt-5'>
								Pokemons
							</Card.Header>
							<Card.Body>
								<Row className='border-bottom pb-2 text-center text-capitalize'>
									<Col>name</Col>
									<Col></Col>
								</Row>
								{this.state.weathers.map(weather => (
									<Row
										className='text-center pb-2 pt-2 border-bottom text-capitalize '
										key={weather.id}>
										<Col> {weather.name} </Col>
										<Col>
											<Link
												to={`/admin/weather/edit/${weather.id}`}>
												<FontAwesomeIcon
													icon={faEdit}
												/>
											</Link>
										</Col>
									</Row>
								))}
							</Card.Body>
						</Card>
					</Container>
				</Col>
			</SideBar>
		);
	}
}
