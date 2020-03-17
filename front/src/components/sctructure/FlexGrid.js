import './FlexGrid.css'
import React from 'react'

const FlexGrid = ({ alignItems, justifyContent, paddingTop, padding, children }) => (
	<div className="flex-grid" style={{ alignItems, justifyContent, padding, paddingTop }}>
		{children}
	</div>
)

export default FlexGrid
