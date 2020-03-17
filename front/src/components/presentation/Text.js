// import './Text.css'

import React from 'react'

const Text = ({ className, style, children, size }) => {
	className = className || ''
	className += ' text ' + size
	const props = { className, style, children }

	switch (size) {
		case 'h1':
			return <h1 {...props} />
		case 'h2':
			return <h2 {...props} />
		case 'h3':
			return <h3 {...props} />
		case 'h4':
			return <h4 {...props} />
		case 'h5':
			return <h5 {...props} />
		case 'h6':
			return <h6 {...props} />
		case 'label':
			return <p {...props} />
		case 'small':
			return <small {...props} />
		case 'xsmall':
			return <small {...props} />

		default:
			return <p {...props} />
	}
}

export default Text
