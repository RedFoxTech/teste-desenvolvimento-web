import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles/types.css'
import './styles/loading.css'
import './index.css'
import { RequestProvider } from './RequestContext'

ReactDOM.render(
  <React.StrictMode>
    <RequestProvider>
      <App />
    </RequestProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
