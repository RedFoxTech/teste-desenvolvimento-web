import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { store, persistor } from 'store/';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
