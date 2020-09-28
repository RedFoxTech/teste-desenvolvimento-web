import axios from 'axios';
import React, { Component } from 'react';

export default class Pokemon extends Component {
  state = {
    name: '',
    pokemonIndex: '',
    imgUrl: '',
  };

  async componentDidMount() {
    const { pokemonIndex } = this.props.match.params;

    //Urls das informações dos Pokemons
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
    const especiesPokemonUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`;

    //Solicitando informações dos Pokemons
    const pokemonInfo = await axios.get(pokemonUrl);

    const name = pokemonInfo.data.name;
    this.setState({ name });
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}
