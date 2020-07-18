import React, { Component } from 'react';
import SideBar from 'Components/SideBar';
import { Col, Container, Card, Button, Row, Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import history from 'services/history';

export default class TypesForm extends Component {
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
										<FontAwesomeIcon icon={faArrowLeft} />{' '}
										Voltar
									</Button>

									<Col>
										<h4>
											{this.props.match.params.id
												? 'Edição de tipo'
												: 'Criação de tipo'}
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
													{/* <FormControl
														name='name'
														placeholder='Nome do pokemon'
														onChange={event =>
															this.onChangeHandler(
																event
															)
														}
														value={this.state.name}
														required
													/> */}
												</FormGroup>
											</Col>
										</Row>
									</Container>

									<Button type='submit'>
										{' '}
										{this.props.match.params.id
											? 'Atualizar'
											: 'Cadastrar'}{' '}
									</Button>
								</Form>
							</Card.Body>
						</Card>
					</Container>
				</Col>
			</SideBar>
		);
	}
}
