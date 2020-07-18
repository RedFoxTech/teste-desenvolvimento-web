import React, { Component } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const limit = 20;
export default class Pagination extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lastPage: 0,
			count: Number(this.props.count),
			current: Number(this.props.current),
		};
		this.paginate = this.paginate.bind(this);
	}

	componentDidMount() {
		this.paginate();
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (nextProps !== this.props) {
			this.setState({
				count: nextProps.count
			})
			this.paginate();
			return true;
		}
		return false;
	}

	paginate(c) {
		if (!c){
			var { count } = this.state;
		}
		var lastPage = Math.ceil(count / limit);

		this.setState({ lastPage });
	}

	changePage(go) {
		this.props.callBackParent(go);
		this.setState({ current: go });
		// window.location.href = `${window.location.pathname}?page=${go}`;
	}

	render() {
		return (
			<Container className='mt-3'>
				<Row className='justify-content-center'>
					{this.state.current !== 1 ? (
						<Button
							variant='info'
							className='ml-1'
							onClick={() =>
								this.changePage(this.state.current - 1)
							}>
							<FontAwesomeIcon icon={faArrowLeft} />
						</Button>
					) : (
						<> </>
					)}
					{this.state.current - 2 > 0 ? (
						<Button
							variant='info'
							className='ml-1'
							onClick={() =>
								this.changePage(this.state.current - 2)
							}>
							{this.state.current - 2}
						</Button>
					) : (
						<> </>
					)}
					{this.state.current - 1 > 0 ? (
						<Button
							variant='info'
							className='ml-1'
							onClick={() =>
								this.changePage(this.state.current - 1)
							}>
							{this.state.current - 1}
						</Button>
					) : (
						<> </>
					)}
					<Button variant='secondary' className='ml-1'>
						{this.state.current}
					</Button>
					{this.state.current + 1 < this.state.lastPage ? (
						<Button
							variant='info'
							className='ml-1'
							onClick={() =>
								this.changePage(this.state.current + 1)
							}>
							{this.state.current + 1}
						</Button>
					) : (
						<> </>
					)}
					{this.state.current + 2 < this.state.lastPage ? (
						<Button
							variant='info'
							className='ml-1'
							onClick={() =>
								this.changePage(this.state.current + 2)
							}>
							{this.state.current + 2}
						</Button>
					) : (
						<> </>
					)}

					{this.state.current !== this.state.lastPage ? (
						<>
							<Button
								variant='info'
								className='ml-1'
								onClick={() =>
									this.changePage(this.state.lastPage)
								}>
								ultima
							</Button>
							<Button
								variant='info'
								className='ml-1'
								onClick={() =>
									this.changePage(this.state.current + 1)
								}>
								<FontAwesomeIcon icon={faArrowRight} />
							</Button>
						</>
					) : (
						<> </>
					)}
				</Row>
			</Container>
		);
	}
}
