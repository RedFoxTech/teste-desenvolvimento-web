import axios from 'axios';
import React, { Component } from 'react';
import PokemonCard from './PokemonCard';

export default class ListaPokemon extends Component {

  state = {
    url: 'https://pokeapi.co/api/v2/pokemon/',
    pokemon: null
  };

  async componentDidMount() {
    const resposta = await axios.get(this.state.url);
    this.setState({ pokemon: resposta.data['results'] });
  }

  render() {
    return (
      <>
        {
          this.state.pokemon ? (<div className="row">
            {this.state.pokemon.map(pokemon => (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
            ))}
          </div>) : (<h1>Carregando Pokemons</h1>)
        }
      </>
    );
  }
}
