import { Col, Row } from 'react-bootstrap'; 

import styled from 'styled-components'; 
import GLOBALS from 'assets/globals'; 

export const Pokemons = styled.div`
			background: ${props =>
				GLOBALS.PokemonTypesColors[props.type]['background']};
			background-color: ${props =>
				GLOBALS.PokemonTypesColors[props.type]['background-color']};
			color: ${props => GLOBALS.PokemonTypesColors[props.type]['color']};
			padding-left: 5px;
			border-radius: 10px 10px 10px;
			width: 100%
		`;




export const Type = styled(Col)`
			background-color: ${props =>
				GLOBALS.PokemonTypesColors[props.type]['background-color']};
			color: ${props => GLOBALS.PokemonTypesColors[props.type]['color']};
			border-radius: 0px 0px 10px 0px;
			border-color: ${props => (props.first ? 'black' : 'none')};
		`;

export const Types = styled(Row)`
			border-top: 1px black solid;
		`;