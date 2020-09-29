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
  water: '3295F6'
}

export default class Pokemon extends Component {
  state = {
    name: '',
    pokemonIndex: '',
    imgUrl: '',
    tipos: [],
    descricao: '',
    larguraTituloStat: 3,
    larguraBarraStat: 9,
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
    themeColor: '#EF5350',
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
        default:
          break;
      }
    });

    //Convertendo decímetro para metros... O + 0.0001 * 100 / 100 é para arredondar para 2 decimais
    const altura = Math.round((pokemonInfo.data.height * 0.1 + 0.0001) * 100) / 100;

    //Convertendo hectograms para quilogramas... O mesmo conceito acima se aplica aqui
    const peso = Math.round((pokemonInfo.data.weight * 0.1 + 0.0001) * 100) / 100;

    const tipos = pokemonInfo.data.types.map(tipo => tipo.type.name);

    const themeColor = `${COR_TIPOS[tipos[tipos.length - 1]]}`;

    const habilidades = pokemonInfo.data.abilities
      .map(habilidade => {
        return habilidade.ability.name
          .toLowerCase()
          .split('-')
          .map(s => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' ');
      })
      .join(', ');

    const evs = pokemonInfo.data.stats
      .filter(stat => {
        if (stat.effort > 0) {
          return true;
        }
        return false;
      })
      .map(stat => {
        return `${stat.effort} ${stat.stat.name
          .toLowerCase()
          .split('-')
          .map(s => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' ')
          }`
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

      const eggGroups = res.data['egg_groups']
        .map(group => {
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
      themeColor,
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

              {/* Número do Pokemon na PokeDex */}
              <div className="col-5">
                <h5>
                  {this.state.pokemonIndex}
                </h5>
              </div>

              {/* Tipos do Pokemon */}
              <div className="col-7">
                <div className="float-right">
                  {this.state.tipos.map(tipo => (
                    <span
                      key={tipo}
                      className='badge badge-pill mr-1'
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

          <div className="card-body">
            <div className="row align-items-center">

              {/* Imagem do Pokemon */}
              <div className="col-md-3">
                <img
                  src={this.state.imgUrl}
                  alt="Foto do Pokemon"
                  className="card-img-top rounded mx-auto mr-2"
                />
              </div>

              {/* Nome do Pokemon */}
              <div className="col-md-9">
                <h4 className="mx-auto">
                  {this.state.name
                    .toLowerCase()
                    .split('-')
                    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                    .join(' ')
                  }
                </h4>

                {/* Vida do Pokemon */}
                <div className="row align-items-center">
                  <div className={`col-12 col-md-${this.state.larguraTituloStat}`}>
                    HP
                  </div>
                  <div className={`col-12 col-md-${this.state.larguraBarraStat}`}>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: `${this.state.stats.hp}%`,
                          backgroundColor: `#${this.state.themeColor}`,
                        }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>
                          {this.state.stats.hp}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ataque do Pokemon */}
                <div className="row align-items-center">
                  <div className={`col-12 col-md-${this.state.larguraTituloStat}`}>
                    Attack
                  </div>
                  <div className={`col-12 col-md-${this.state.larguraBarraStat}`}>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: `${this.state.stats.attack}%`,
                          backgroundColor: `#${this.state.themeColor}`,
                        }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>
                          {this.state.stats.attack}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Defesa do Pokemon */}
                <div className="row align-items-center">
                  <div className={`col-12 col-md-${this.state.larguraTituloStat}`}>
                    Defense
                  </div>
                  <div className={`col-12 col-md-${this.state.larguraBarraStat}`}>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: `${this.state.stats.defense}%`,
                          backgroundColor: `#${this.state.themeColor}`,
                        }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>
                          {this.state.stats.defense}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Velocidade do Pokemon */}
                <div className="row align-items-center">
                  <div className={`col-12 col-md-${this.state.larguraTituloStat}`}>
                    Speed
                  </div>
                  <div className={`col-12 col-md-${this.state.larguraBarraStat}`}>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: `${this.state.stats.speed}%`,
                          backgroundColor: `#${this.state.themeColor}`,
                        }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>
                          {this.state.stats.speed}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Nível do ataque especial do Pokemon */}
                <div className="row align-items-center">
                  <div className={`col-12 col-md-${this.state.larguraTituloStat}`}>
                    Special Attack
                  </div>
                  <div className={`col-12 col-md-${this.state.larguraBarraStat}`}>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: `${this.state.stats.specialAttack}%`,
                          backgroundColor: `#${this.state.themeColor}`,
                        }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>
                          {this.state.stats.specialAttack}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Nível da defesa especial do Pokemon */}
                <div className="row align-items-center">
                  <div className={`col-12 col-md-${this.state.larguraTituloStat}`}>
                    Special Defense
                  </div>
                  <div className={`col-12 col-md-${this.state.larguraBarraStat}`}>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: `${this.state.stats.specialDefense}%`,
                          backgroundColor: `#${this.state.themeColor}`,
                        }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>
                          {this.state.stats.specialDefense}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Descrição do Pokemon*/}
            <div className="row mt-1">
              <div className="col">
                <p>{this.state.descricao}</p>
              </div>
            </div>

          </div>
          <hr />

          <div className="card-body">
            <h5 className="card-title text-center">Profile</h5>

            <div className="row">
              <div className="col-md-6">

                {/* Altura do Pokemon */}
                <div className="row">
                  <div className="col-6">
                    <h6 className="float-right">Height:</h6>
                  </div>
                  <div className="col-6">
                    <h6 className="float-left">
                      {this.state.altura} Meters
                    </h6>
                  </div>
                </div>

                {/* Peso do Pokemon */}
                <div className="row">
                  <div className="col-6">
                    <h6 className="float-right">Weight:</h6>
                  </div>
                  <div className="col-6">
                    <h6 className="float-left">
                      {this.state.peso} Kg
                    </h6>
                  </div>
                </div>

                {/* Taxa de captura do Pokemon */}
                <div className="row">
                  <div className="col-6">
                    <h6 className="float-right">Catch Rate:</h6>
                  </div>
                  <div className="col-6">
                    <h6 className="float-left">
                      {this.state.taxaCaptura}%
                    </h6>
                  </div>
                </div>

                {/* Taxa do sexo do Pokemon (Feminino/Masculino) */}
                <div className="row">
                  <div className="col-6">
                    <h6 className="float-right">Gender Ratio:</h6>
                  </div>
                  <div className="col-6">
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{
                        width: `${this.state.razaoSexoFemea}%`,
                        backgroundColor: '#C2185B',
                      }}
                        aria-valuenow="15"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>{this.state.razaoSexoFemea}</small>
                      </div>
                      <div className="progress-bar" role="progressbar" style={{
                        width: `${this.state.razaoSexoMacho}%`,
                        backgroundColor: '#1976D2',
                      }}
                        aria-valuenow="30"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>{this.state.razaoSexoMacho}</small>

                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="col-md-6">

                {/* Ovos do Pokemon */}
                <div className="row">
                  <div className="col-6">
                    <h6 className="float-right">Egg Groups:</h6>
                  </div>
                  <div className="col-6">
                    <h6 className="float-left">{this.state.eggGroups}</h6>
                  </div>
                </div>

                {/* Passos para chocar o ovo do Pokemon */}
                <div className="row">
                  <div className="col-6">
                    <h6 className="float-right">Hatch Steps:</h6>
                  </div>
                  <div className="col-6">
                    <h6 className="float-left">{this.state.hatchSteps}</h6>
                  </div>
                </div>

                {/* Habilidades do Pokemon */}
                <div className="row">
                  <div className="col-6">
                    <h6 className="float-right">Abilities:</h6>
                  </div>
                  <div className="col-6">
                    <h6 className="float-left">{this.state.habilidades}</h6>
                  </div>
                </div>

                {/* EVs do Pokemon */}
                <div className="row">
                  <div className="col-6">
                    <h6 className="float-right">EVs:</h6>
                  </div>
                  <div className="col-6">
                    <h6 className="float-left">{this.state.evs}</h6>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="card-footer text-muted">
            Data From{' '}
            <a
              href="https://pokeapi.co/"
              target="_blank"
              className="card-link"
              rel="noopener noreferrer"
            >
              PokeAPI.co
            </a>
          </div>

        </div>
      </div>
    );
  }
}
