import styled from 'styled-components';
import globals from 'assets/globals';

export const Type = styled.span`
	background-color: ${props => globals.PokemonTypesColors[props.type]};
	padding: 0px 10px;
	padding-bottom: 3px;
	text-transform: capitalize;
	border-radius: 10px 10px;
	a {
		color: white;
		text-decoration: none;
	}
`;
