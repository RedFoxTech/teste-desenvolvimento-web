import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import ButtonBase from '@material-ui/core/ButtonBase'

export class PokemonTable extends Component {
    render () {
        const { root, pokemons } = this.props
        return (
            <section className='pokemon_table'>
                {pokemons.map((pokemon, i) => {
                    return (
                        <Paper elevation={10} className='pokemon_cards' onClick = { e => root.showRowInfo(pokemon) }>
                                <img alt={pokemon.name} src={pokemon.url}/>
                        </Paper>
                    )
                })}
            </section>
        )
    }
}

export default PokemonTable
