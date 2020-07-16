import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

const limit = 20;
export default class Pagination extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lastPage: 0,
			rows: this.props.rows,
			current: this.props.current,
		};
		this.paginate = this.paginate.bind(this);
	}

	componentDidMount() {
		this.setState({ rows: this.props.rows, current: this.props.current });
		this.paginate();
    }
    shouldComponentUpdate

	componentDidUpdate(prevProps) {
		if (
			this.props.rows !== prevProps.rows ||
			this.props.current !== prevProps.current
		) {
			console.log(this.props.rows);
			this.setState({
				rows: this.props.rows,
				current: this.props.current,
            });
            this.paginate(); 
		}
	}

	paginate() {
        var { rows, lastPage} = this.state; 
        lastPage = Math.ceil(rows / limit); 
        console.log("pagina atual: " +  this.state.current, "ultima pagina :" + lastPage); 
        this.setState({ lastPage }); 

    }

	render() {
        var numbers ; 

		return (
			<>
                { this.state.current === 0 || this.state.current === 1  ? <> </> : <Button> {"<"}</Button> }				
                    { }
			</>
		);
	}
}
