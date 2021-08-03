import 'normalize.css';
import '@styles/index.scss';

import React from 'react';
import ReactDom from 'react-dom';

import {App} from '@components/App/App';

ReactDom.render(<App />, document.getElementById('root'));
