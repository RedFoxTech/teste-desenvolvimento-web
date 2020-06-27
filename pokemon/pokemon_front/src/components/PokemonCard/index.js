import React, { Component } from "react";
import { PokedexID, CardDiv } from "./styled"


function PokemonCard(props) {
    return (
        
            <CardDiv>
                <PokedexID> PokeDex# {props.pokedexID}</PokedexID>
                <img src={props.img} />
                <h3>{props.name}</h3>
                <p>{props.type1} / {props.type2}</p>
            </CardDiv>
        
    )
}



export default PokemonCard;