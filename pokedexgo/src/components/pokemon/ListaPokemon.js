import axios from 'axios';
import React, { Component } from 'react';
import PokemonCard from './PokemonCard';

export default class ListaPokemon extends Component {

  state = {
    url: 'https://pokeapi.com/api/v2/pokemon',
    pokemon: null
  };

  async componentDidMount() {
    const resposta = await axios.get(this.state.url);
    this.setState({ pokemon: resposta.data['resultados'] });
  }

  render() {
    return (
      <div className="row">
        {}
      </div>
    );
  }
}
