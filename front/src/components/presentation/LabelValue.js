import './LabelValue.css'

import React from 'react'

const LabelValue = ({ label, value }) => (
	<div className="label-value">
		<small>{label}</small>
		<p>{value}</p>
	</div>
)

export default LabelValue
