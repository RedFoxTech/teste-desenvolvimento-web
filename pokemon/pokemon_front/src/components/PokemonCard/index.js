import React, { Component } from "react";
import { PokedexID, CardDiv, StyledButton } from "./styled"




function PokemonCard(props) {

    return (

        <CardDiv>
            <PokedexID> PokeDex# {props.pokedexID}</PokedexID>
            <img src={props.img} />
            <h3>{props.name}</h3>
            <p>{props.type1} {props.type2}</p>
            {props.button1 && <StyledButton onClick={props.onClick1} >{props.button1}</StyledButton>}
        </CardDiv>

    )
}



export default PokemonCard;