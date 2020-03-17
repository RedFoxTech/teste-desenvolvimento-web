import { Button, Col, Row, Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import React from 'react'

import { SET_POKEMONS_FILTER_ITEM, FORCE_POKEMONS_REFRESH } from './pokemons.reducer'
import { sd } from '../../../helpers/redux'
import ListPokemonTypesLoader from '../../pokemonTypes/list/ListPokemonTypesLoader'
import Select from '../../../components/form/Select'
import SelectPokemonTypes from '../../pokemonTypes/list/SelectPokemonTypes'

const MinMaxFormBlock = ({ parentObj, onChange, label, field }) => {
	const keyMin = `${field}Min`
	const keyMax = `${field}Max`

	return (
		<Row>
			<Col>
				<Form.Group>
					<Form.Label>{label} Min.</Form.Label>
					<Form.Control type="number" onChange={e => onChange(keyMin, e.target.value)} value={parentObj[keyMin]} />
				</Form.Group>
			</Col>
			<Col>
				<Form.Group>
					<Form.Label>{label} Max.</Form.Label>
					<Form.Control type="number" onChange={e => onChange(keyMax, e.target.value)} value={parentObj[keyMax]} />
				</Form.Group>
			</Col>
		</Row>
	)
}

class SearchPokemonsForm extends React.Component {
	constructor(props) {
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(e) {
		e.preventDefault()
		this.props.refreshPokemonsList()
	}

	render() {
		const { filter, onChange } = this.props

		return (
			<form onSubmit={this.handleSubmit}>
				<ListPokemonTypesLoader>
					<SelectPokemonTypes
						label="Tipo de pokemon"
						onChange={e => onChange('typeID', e.target.value)}
						value={filter.typeID}
					/>
				</ListPokemonTypesLoader>
				<MinMaxFormBlock label="Ataque" field="atk" onChange={onChange} parentObj={filter} />
				<MinMaxFormBlock label="Defesa" field="def" onChange={onChange} parentObj={filter} />
				<MinMaxFormBlock label="Stamina" field="sta" onChange={onChange} parentObj={filter} />

				<Form.Group>
					<Form.Check
						label="Mostrar somente legendários"
						type="checkbox"
						onChange={e => onChange('legendary', !filter.legendary)}
						checked={filter.legendary}
					/>
				</Form.Group>
				<Button type="submit">Buscar</Button>
			</form>
		)
	}
}

const mapState = state => ({
	filter: state.pokemons.filter
})

const mapActions = d => ({
	onChange(field, value) {
		sd(d, SET_POKEMONS_FILTER_ITEM, { field, value })
	},

	refreshPokemonsList() {
		d(push('/'))
		sd(d, FORCE_POKEMONS_REFRESH)
	}
})

export default connect(mapState, mapActions)(SearchPokemonsForm)
