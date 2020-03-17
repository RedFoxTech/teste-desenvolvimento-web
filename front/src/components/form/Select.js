import './Select.css'
import { Form } from 'react-bootstrap'

import React from 'react'

const formatOptions = options => {
	return options.map(({ label, value, groupName, suboptions }) =>
		!!groupName ? (
			<optgroup key={groupName} label={groupName}>
				{formatOptions(suboptions)}
			</optgroup>
		) : (
			<option key={value} value={value}>
				{label}
			</option>
		)
	)
}

const InputText = ({ label, onChange, options, value, inputOnly }) => {
	const content = (
		<Form.Control as="select" custom onChange={onChange} value={value}>
			{formatOptions(options)}
		</Form.Control>
	)

	if (!!inputOnly) return content

	return (
		<Form.Group>
			<Form.Label>{label}</Form.Label>
			{content}
		</Form.Group>
	)
}

export default InputText
