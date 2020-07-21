import React, { Component } from 'react';
import SideBar from 'Components/SideBar';
import {
	Col,
	Container,
	Card,
	Button,
	Row,
	Form,
	FormGroup,
	FormControl,
	FormLabel,
} from 'react-bootstrap';

import history from 'services/history';
import api from 'services/api';

export default class WeathersForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			weather: [],
			name: '',
		};
	}

	componentDidMount() {
		api.get(`/weathers/${this.props.match.params.id}`).then(response => {
			this.setState({
				weather: response.data,
				name: response.data.name,
			});
		});
	}

	onSubmitHandler(event) {
		event.preventDefault();
		const { name } = this.state;
		api.put(`/weathers/${this.props.match.params.id}`, {
			name,
		}).then(response => console.log(response));
	}

	onChangeHandler(event) {
		const { value } = event.target;
		console.log(value);
		this.setState({ name: value });
	}

	render() {
		return (
			<SideBar>
				<Col className='mt-5'>
					<Container>
						<Card>
							<Card.Header className='pt-5 pb-5'>
								<Row>
									<Button
										variant='link'
										onClick={() => history.back()}>
										{/* <FontAwesomeIcon icon={faArrowLeft} />{' '} */}
										Voltar
									</Button>

									<Col>
										<h4>
											{this.props.match.params.id
												? 'Edição de clima'
												: 'Criação de clima'}
										</h4>
									</Col>
								</Row>
							</Card.Header>
							<Card.Body>
								<Form
									onSubmit={event =>
										this.onSubmitHandler(event)
									}>
									<Container>
										<Row>
											<Col xs={12} sm={4}>
												<FormGroup>
													<FormLabel>Name</FormLabel>
													<FormControl
														name='name'
														placeholder='Type Name'
														value={this.state.name}
														onChange={event =>
															this.onChangeHandler(
																event
															)
														}
														required
													/>
												</FormGroup>
											</Col>
										</Row>
									</Container>

									<Col
										xs={12}
										className='d-flex justify-content-end'>
										<Button type='submit'>
											{this.props.match.params.id
												? 'Atualizar'
												: 'Cadastrar'}{' '}
										</Button>
									</Col>
								</Form>
							</Card.Body>
						</Card>
					</Container>
				</Col>
			</SideBar>
		);
	}
}
