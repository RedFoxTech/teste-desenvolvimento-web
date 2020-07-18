import React, { Component } from 'react';
import {
	Container,
	Col,
	Form,
	FormControl,
	FormGroup,
	FormLabel,
	Button,
} from 'react-bootstrap';

import history from 'services/history'; 

import { connect } from 'react-redux';

import { AdminLogin } from './style';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
		this.onChangeHandler = this.onChangeHandler.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	componentDidMount(){ 
		if ( this.props.token !== null ) { 
			history.push('/admin')
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (this.props.token !== nextProps.token) {
			history.push('/admin');
		} else { 
			console.log(this.props.token, nextProps.token)
		}
	}
	onChangeHandler(event) {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	}

	onFormSubmit(event) {
		event.preventDefault();

		const { dispatch } = this.props;
		const { email, password } = this.state;
		dispatch({
			type: '@auth/LOGIN',

			payload: {
				email,
				password,
			},
		});
	}

	render() {
		return (
			<Container className='d-flex justify-content-center h-100 align-items-center align-self-center'>
				<AdminLogin
					xs={12}
					sm={12}
					md={7}
					lg={5}
					xl={4}
					className='d-flex flex-column justify-content-center'>
					<Col className='mt-3'>
						<h1> Admin </h1>
					</Col>
					<Form
						className='mt-4 d-flex flex-column justify-content-center'
						onSubmit={e => this.onFormSubmit(e)}>
						<FormGroup>
							<FormLabel> Email </FormLabel>
							<FormControl
								placeholder='Email'
								name='email'
								type='email'
								onChange={event => {
									event.preventDefault();
									this.onChangeHandler(event);
								}}
								required
							/>
						</FormGroup>
						<FormGroup>
							<FormLabel>Senha</FormLabel>
							<FormControl
								placeholder='Senha'
								name='password'
								type='password'
								onChange={event => {
									event.preventDefault();
									this.onChangeHandler(event);
								}}
								required
							/>
						</FormGroup>
						<Button variant='success' type='submit'>
							Logar
						</Button>
					</Form>
				</AdminLogin>
			</Container>
		);
	}
}

const mapStateToPros = state => {
	return {
		token: state.auth.token,
	};
};

export default connect(mapStateToPros)(Login);
