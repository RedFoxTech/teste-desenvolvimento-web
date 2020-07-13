import { Col, Row } from 'react-bootstrap'; 

import styled from 'styled-components'; 
import GLOBALS from 'assets/globals'; 

export const Pokemons = styled.div`
			background: #e0e0e0;
			background-color: #e0e0e0;
			text-align: center;
			padding-left: 5px;
			border-radius: 10px 10px 10px;
			position: relative;
			h3 {
				position: absolute;
				top: 20%;
				left: 25%;
				font-size: 5em;
				color: #a1a1a1;
				opacity: 50%;
				z-index: 1;
			}

			h2 {
				opacity: 0%;
				transition: opacity 1s;
			}
			&:hover h2 {
				opacity: 100%;
			}

			img {
				opacity: 50%;
				z-index: 100;
				width: 215px;
				/* transition: opacity 2s;  */
				transition: width 1s;
			}
			&:hover img {
				opacity: 100%;
				width: 100%;
			}
			a {
				color: white;
				text-decoration: none;
			}

			&:hover h3 {
				opacity: 40%;
				color: #e0e0e0;
			}
		`;




export const Type = styled(Col)`
			background-color: ${props =>
				GLOBALS.PokemonTypesColors[props.type]['background-color']};
			color: ${props => GLOBALS.PokemonTypesColors[props.type]['color']};
			border-radius: ${props => (props.first ? '0px 0px 10px 10px' : '0px 0px 10px 0px')}  ;
			border-color: ${props => (props.first ? 'black' : 'none')};
			text-align: center; 
			text-transform: capitalize; 

		`;

export const Types = styled(Row)`
			margin-left: -19px;
			border-radius : 0px 0px 10px 10px; 
			background-color: ${props => GLOBALS.PokemonTypesColors[props.type]['background-color']};
			
		`;