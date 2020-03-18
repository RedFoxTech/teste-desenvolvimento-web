import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'

import { register } from './config/serviceWorker'
import Routes from './config/Routes'
import configureStore, { history } from './config/store'

const store = configureStore(/* provide initial state if any */)

const App = () => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Routes />
		</ConnectedRouter>
	</Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))
register()
