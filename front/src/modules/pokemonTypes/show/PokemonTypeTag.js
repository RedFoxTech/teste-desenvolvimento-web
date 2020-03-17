import { Badge } from 'react-bootstrap'
import React from 'react'

const PokemonTypeTag = ({ type }) => {
	if (!type || !type.id) return false

	return (
		<Badge pill variant="secondary" style={{ marginRight: 3, backgroundColor: type.color }}>
			{type.name}
		</Badge>
	)
}

export default PokemonTypeTag
