import 'normalize.css';
import '@styles/base/styles.sass';

import React from 'react';
import ReactDom from 'react-dom';

import {App} from '@components/app/app';

ReactDom.render(<App />, document.getElementById('root'));
