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

    //Convertendo decímetro para metros... O + 0.0001 * 100 / 100 é para arredondar para 2 decimais
    const altura = Math.round((pokemonInfo.data.height * 0.1 + 0.0001) * 100) / 100;

    //Convertendo hectograms para quilogramas... O mesmo conceito acima se aplica aqui
    const peso = Math.round((pokemonInfo.data.weight * 0.1 + 0.0001) * 100) / 100;

    const tipos = pokemonInfo.data.types.map(tipo => tipo.type.name);

    const habilidades = pokemonInfo.data.abilities.map(habilidade => {
      return habilidade.ability.name
        .toLowerCase()
        .split('-')
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
    });

    const evs = pokemonInfo.data.stats.filter(stat => {
      if (stat.effort > 0) {
        return true;
      }
      return false;
    })
      .map(stat => {
        return `${stat.effort} ${stat.stat.name}`
          .toLowerCase()
          .split('-')
          .map(s => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' ');
      })
      .join(', ');

    await axios.get(especiesPokemonUrl).then(res => {
      let descricao = '';
      res.data.flavor_text_entries.some(flavor => {
        if (flavor.language.name === 'en') {
          descricao = flavor.flavor_text;
          return;
        }
      });
    })

    console.log(altura);
    console.log(peso);
    console.log(tipos);
    console.log(habilidades);
    console.log(evs);

  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}
