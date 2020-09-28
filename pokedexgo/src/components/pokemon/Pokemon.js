import axios from 'axios';
import React, { Component } from 'react';

export default class Pokemon extends Component {
  state = {
    name: '',
    pokemonIndex: '',
    imgUrl: '',
    types: [],
    description: '',
    stats: {
      hp: '',
      attack: '',
      defense: '',
      speed: '',
      specialAttack: '',
      specialDefense: '',
    },
    height: '',
    weight: '',
    eggGroup: '',
    abilities: '',
    genderRatioMale: '',
    genderRatioFemale: '',
    evs: '',
    hatchSteps: '',
  };

  async componentDidMount() {
    const { pokemonIndex } = this.props.match.params;

    //Urls das informações dos Pokemons
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
    const especiesPokemonUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`;

    //Solicitando informações dos Pokemons
    const pokemonInfo = await axios.get(pokemonUrl);

    const name = pokemonInfo.data.name;
    const imgUrl = pokemonInfo.data.sprites.front_default;

    let { hp, attack, defense, speed, specialAttack, specialDefense } = '';

    pokemonInfo.data.stats.map(stat => {
      switch (stat.stat.name) {
        case 'hp':
          hp = stat['base_stat'];
          break;
        case 'attack':
          attack = stat['base_stat'];
          break;
        case 'defense':
          defense = stat['base_stat'];
          break;
        case 'speed':
          speed = stat['base_stat'];
          break;
        case 'special-attack':
          specialAttack = stat['base_stat'];
          break;
        case 'special-defense':
          specialDefense = stat['base_stat'];
          break;
      }
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}
