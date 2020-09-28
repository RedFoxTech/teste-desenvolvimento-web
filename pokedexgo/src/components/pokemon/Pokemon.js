import axios from 'axios';
import React, { Component } from 'react';

const COR_TIPOS = {
  bug: 'B1C12E',
  dark: '4F3A2D',
  dragon: '755EDF',
  electric: 'FCBC17',
  fairy: 'F4B1F4',
  fighting: '823551D',
  fire: 'E73B0C',
  flying: 'A3B3F7',
  ghost: '6060B2',
  grass: '74C236',
  ground: 'D3B357',
  ice: 'A3E7FD',
  normal: 'C8C4BC',
  poison: '934594',
  psychic: 'ED4882',
  rock: 'B9A156',
  steel: 'B5B5C3',
  water: '3295F6',
}

export default class Pokemon extends Component {
  state = {
    name: '',
    pokemonIndex: '',
    imgUrl: '',
    tipos: [],
    descricao: '',
    stats: {
      hp: '',
      attack: '',
      defense: '',
      speed: '',
      specialAttack: '',
      specialDefense: '',
    },
    altura: '',
    peso: '',
    eggGroups: '',
    habilidades: '',
    razaoSexoMacho: '',
    razaoSexoFemea: '',
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

      const taxaFemea = res.data['gender_rate'];
      const razaoSexoFemea = 12.5 * taxaFemea;
      const razaoSexoMacho = 12.5 * (8 - taxaFemea);

      const taxaCaptura = Math.round((100 / 255) * res.data['capture_rate']);

      const eggGroups = res.data['egg_groups'].map(group => {
        return group.name
          .toLowerCase()
          .split('-')
          .map(s => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' ');
      })
        .join(', ');

      const hatchSteps = 255 * (res.data['hatch_counter'] + 1);

      this.setState({
        descricao,
        razaoSexoFemea,
        razaoSexoMacho,
        taxaCaptura,
        eggGroups,
        hatchSteps
      })
    });

    this.setState({
      imgUrl,
      pokemonIndex,
      name,
      tipos,
      stats: {
        hp,
        attack,
        defense,
        speed,
        specialAttack,
        specialDefense
      },
      altura,
      peso,
      habilidades,
      evs,
    })
  }

  render() {
    return (
      <div className="col">
        <div className="card">
          <div className="card-header">
            <div className="row">
              <div className="col-5">
                <h5>
                  {this.state.pokemonIndex}
                </h5>
              </div>
              <div className="col-7">
                <div className="float-right">
                  {this.state.tipos.map(tipo => (
                    <span
                      key={tipo}
                      className='badge badge-primary badge-pill mr-1'
                      style={{
                        backgroundColor: `#${COR_TIPOS[tipo]}`,
                        color: 'white'
                      }}
                    >
                      {tipo
                        .toLowerCase()
                        .split('-')
                        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                        .join(' ')
                      }
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
