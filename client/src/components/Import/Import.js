import React from 'react'
import {Tab, Grid, Container, Button, Divider, Modal, Confirm} from "semantic-ui-react"
import axios from 'axios';

export default class ImportPane extends React.Component {
    state = {
		file: null,
		confirmOpen: false,
		confirmContent: ''
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
			if (response.data.info) {
				this.setState({
					confirmOpen: true, 
					confirmContent: 'Upload done!'
				})
			}
			else {
				this.setState({
					confirmOpen: true, 
					confirmContent: `Upload failed due to: ${response.data.info}`
				});
			}
			
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

	handleConfirm = () => {
		this.setState({
			confirmOpen: false
		});
	}

    render () {
		const {confirmOpen, confirmContent} = this.state;
		return (
			<Tab.Pane loading={this.loading}>
				<h2>Import</h2>

				<form action=''>
					<Container textAlign='center'>
						<label>Select File</label>
						<input type="file" name="file" onChange={(e) => this.handleFile(e)}></input>
					</Container>
					<Divider></Divider>
					<Container textAlign='center'>
						<Button positive onClick={(e) => this.handleUpload(e)}>Upload</Button>
						<Button onClick={(e) => this.handleDownload(e)}>See an example</Button>
					</Container>
					
				</form>

				<Confirm
					open={confirmOpen}
					content={confirmContent}
					onConfirm={this.handleConfirm}
					onCancel={this.handleConfirm}>
				</Confirm>

			</Tab.Pane>
		);
    }
}