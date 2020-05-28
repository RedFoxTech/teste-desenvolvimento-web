import React from 'react';
import './App.css';
import {Container} from 'semantic-ui-react';
import Menu from './components/menu/Menu';

function App() {
	return (
		<div className="App">
			<Container>
				<Menu></Menu>
			</Container>
			
		</div>
	);
}

export default App;
