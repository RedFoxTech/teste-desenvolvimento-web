import React from 'react'
import PokemonCard from '../../pokemonCard/PokemonCard'

const PokemonGridContainer = (props) => {
    const isSelected = (id) => {
        let isSelected = false
        props.listToRemove.forEach(el => isSelected = isSelected || (el === id))
        return isSelected
    }

    let pokemonObj = []
    let startsAt = (props.page - 1) * props.elementsPerPage
    for (let i = startsAt; i < startsAt + props.elementsPerPage; i++) {
        if (props.pokeList.length > i) {
            pokemonObj.push(<PokemonCard onClick={props.onClick} pokemon={props.pokeList[i]} onChangeFieldValue={props.changePokemonStateHandler} key={i} isSelected={isSelected(props.pokeList[i].Row)} isEditable={props.isEditable}/>)
        }
    }

    return <div style={{ "marginTop": "10vh" }}>{pokemonObj}</div>
}

export default PokemonGridContainer