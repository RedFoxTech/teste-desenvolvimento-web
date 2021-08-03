import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@styles/index.module.scss';
import '@styles/Components/navbar.module.scss';

import React from 'react';
import ReactDom from 'react-dom';

import {App} from '@components/App/App';

/**
 * @fileoverview Arquivo responsável por trazer o CSS e o JS para o DOM.
 * @module packages/frontend/src/index
 */

ReactDom.render(<App />, document.getElementById('root'));
