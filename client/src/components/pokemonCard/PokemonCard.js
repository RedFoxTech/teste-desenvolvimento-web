import React from 'react'
import "./PokemonCard.css"

import PokemonInfoCell from './PokemonInfoCell/PokemonInfoCell'

const PokemonCard = (props) => {
    let pokemonInfos = Object.values(props.pokemon).map((value, i) =>
        <PokemonInfoCell
            key={i}
            value={value}
            cellColor= {props.isSelected ? "yellow" : "white"}
            onChangeFieldValue={(entryValue) => {
                props.onChangeFieldValue(props.pokemon.Row, Object.keys(props.pokemon)[i], entryValue)
            }} isEditable={i===0 ? false : props.isEditable} />)
    return <div
        onClick={() => { props.onClick(props.pokemon.Row) }}
        className="card-content">
        {pokemonInfos}
    </div>
}

export default PokemonCard