import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}
	*:focus {
		outline: 0;
	}
	html, body, #root {
    background: #53B1E5;
	}
	body {
		-webkit-font-smoothing: antialiased;
	}
	body, input, button {
		font: 20px 'Roboto', sans-serif;
  }

	a {
		text-decoration: none;
	}
	ul {
		list-style: none;
	}
	button {
		cursor: pointer;
	}
`;
