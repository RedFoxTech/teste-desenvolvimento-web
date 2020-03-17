import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import React from 'react'
import { SET_POKEMONS_FILTER_ITEM, FORCE_POKEMONS_REFRESH } from '../pokemons/list/pokemons.reducer'
import { sd } from './../../helpers/redux'

import Counter from '../../components/presentation/Counter'
import Logo from '../../components/shapes/Logo'

class MainMenu extends React.Component {
	constructor(props) {
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(e) {
		e.preventDefault()
		this.props.refreshPokemonsList()
	}

	render() {
		const { goTo, favoritesCount, filter, onChangeSearch, refreshPokemonList } = this.props

		return (
			<div style={{ marginTop: 58 }}>
				<Navbar bg="dark" variant="dark" fixed="top">
					<Navbar.Brand onClick={() => goTo('/')}>
						<Logo />
					</Navbar.Brand>
					<Nav className="mr-auto">
						<Nav.Link onClick={() => goTo('/')}>Pokedex</Nav.Link>

						<Counter key={3} value={favoritesCount}>
							<Nav.Link onClick={() => goTo('/favoritos')}>Favoritos</Nav.Link>
						</Counter>
					</Nav>
					<Form inline onSubmit={this.handleSubmit}>
						<FormControl
							type="text"
							placeholder="Nome ou número..."
							className="mr-sm-2"
							value={filter.q}
							onChange={e => onChangeSearch(e.target.value)}
						/>
						<Button variant="primary" type="submit">
							Buscar
						</Button>
					</Form>
				</Navbar>
			</div>
		)
	}
}

const mapState = state => ({
	filter: state.pokemons.filter,
	favoritesCount: state.favoritePokemons.list.length
})

const mapActions = d => ({
	onChangeSearch(value) {
		sd(d, SET_POKEMONS_FILTER_ITEM, { field: 'q', value })
		console.log(value)
	},
	refreshPokemonsList() {
		sd(d, FORCE_POKEMONS_REFRESH)
		d(push('/'))
	},
	goTo(path) {
		d(push(path))
	}
})

export default connect(mapState, mapActions)(MainMenu)
