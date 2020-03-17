import React from 'react'
import { connect } from 'react-redux'

import Select from '../../../components/form/Select'
import { SET_POKEMONS_FILTER_ITEM, FORCE_POKEMONS_REFRESH } from './pokemons.reducer'
import { sd } from '../../../helpers/redux'

const SelectPokemonsOrder = ({ onChange, value, filter }) => {
	const options = [
		{ label: 'Numéro', value: 'number' },
		{ label: 'Ataque', value: 'atk' },
		{ label: 'Defesa', value: 'def' },
		{ label: 'Stamina', value: 'sta' }
	]

	return <Select inputOnly options={options} onChange={e => onChange('sort', e.target.value)} value={filter.sort} />
}

const mapState = state => ({
	filter: state.pokemons.filter
})

const mapActions = d => ({
	onChange(field, value) {
		sd(d, SET_POKEMONS_FILTER_ITEM, { field, value })
		sd(d, FORCE_POKEMONS_REFRESH)
	}
})

export default connect(mapState, mapActions)(SelectPokemonsOrder)
