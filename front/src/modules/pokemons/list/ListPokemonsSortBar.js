import React from 'react'

import FlexGrid from '../../../components/sctructure/FlexGrid'
import SelectPokemonsOrder from './SelectPokemonsOrder'

const ListPokemonsSortBar = () => {
	return (
		<FlexGrid paddingTop={22} alignItems="space-between">
			<div style={{ flex: 2 }}></div>
			<div style={{ flex: 1 }}>
				<FlexGrid>
					<small style={{ marginRight: 6, display: 'block', flex: 1 }}>Ordenação:</small>
					<SelectPokemonsOrder />
				</FlexGrid>
			</div>
		</FlexGrid>
	)
}

export default ListPokemonsSortBar
