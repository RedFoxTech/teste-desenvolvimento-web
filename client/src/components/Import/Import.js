import React from 'react'
import {Tab} from "semantic-ui-react"
import axios from 'axios';

export default class ImportPane extends React.Component {
    state = {
		loading: false,
		file: null
	}
	
	handleFile (e) {
		const file = e.target.files[0];
		this.setState({file});
	}

	handleUpload (e) {
		e.preventDefault();
		const formData = new FormData();
		formData.append('file', this.state.file);
		axios({
			url: 'http://localhost:8000/pokemons/upload',
			method: 'POST',
			data: formData
		})
		.then(response => {
			console.log(response);
		})
		.catch(err => console.log(err));
		console.log(this.state);
	}

	handleDownload(e) {
		e.preventDefault();
		axios({
			url: 'http://localhost:8000/pokemons/download',
			method: 'GET',
			responseType: 'blob'
		})
		.then(response => {
			console.log(response);
			const url = window.URL.createObjectURL(new Blob([response.data]));
			const link = document.createElement('a');
			link.href = url;
			link.setAttribute('download', 'pokemons.xlsx');
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		})
		.catch(err => console.log(err));
	}

    render () {
		return (
			<Tab.Pane loading={this.loading}>
				<h2>Import</h2>

				<form action=''>
					<div className="">
						<label>Select File</label>
						<input type="file" name="file" onChange={(e) => this.handleFile(e)}></input>
					</div>
					<button onClick={(e) => this.handleUpload(e)}>Upload</button>
					<button onClick={(e) => this.handleDownload(e)}>See an example</button>
				</form>

				

			</Tab.Pane>
		);
    }
}