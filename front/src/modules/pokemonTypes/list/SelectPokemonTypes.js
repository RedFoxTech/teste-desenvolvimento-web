import { connect } from 'react-redux'
import React from 'react'

import Select from '../../../components/form/Select'

const SelectPokemonTypes = ({ label, types, onChange, value }) => (
	<Select label={label} onChange={onChange} options={types} value={value} />
)

const mapState = state => {
	const types = state.pokemonTypes.list

	return {
		types: [{ label: '', value: '' }, ...types.map(type => ({ label: type.name, value: type.id }))]
	}
}

export default connect(mapState)(SelectPokemonTypes)
