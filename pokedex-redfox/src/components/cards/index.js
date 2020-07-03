import React from 'react'
import { MainContainer } from './styles'
import { returnBackground } from './setbackground'

function PokemonCard(props) {

    let color1 = returnBackground(props.PokeType);
    let color2 = returnBackground(props.PokeType2);

    let PokeImgId = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + props.PokeImg + ".png"

    return (

        <MainContainer

            background1={color1}
            background2={color2}
            onClick={props.onClick}>

            <img src={PokeImgId} alt="Pokemon"></img>

            <span> {props.Pokename} </span>

        </MainContainer>
    )
}

export default PokemonCard;