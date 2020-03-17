import { Container } from 'react-bootstrap'
import React from 'react'

import MainMenu from '../../modules/menu/MainMenu'

const FullPageTemplate = ({ children }) => (
	<div>
		<MainMenu />
		{children}
	</div>
)

export default FullPageTemplate
