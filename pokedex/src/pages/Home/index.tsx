import React, { useState, useEffect, ChangeEvent, FormEvent, UIEventHandler } from 'react';

import api from './../../services/axiosApi';

import './index.css';

interface Type {
  idType: number,
  nomeType: string,
}

interface Weather {
  idTWeather: number,
  nomeWeather: string,
}

interface Pokemon {
  nome: string,
  numberPokedex: number,
  img: number,
  atk: number,
  def: number,
  sta: number,
  cp40: number,
  cp39: number,
  evolved: boolean,
  crossGen: boolean,
  legendary: boolean,
  aquireable: boolean,
  spawns: boolean,
  regional: boolean,
  shiny: boolean,
  nest: boolean,
  new: boolean,
  notGettable: boolean,
  futureEvolve: boolean,
  raidable: number,
  hatchable: number,
  types: {
    type1: string,
    type2: string
  },
  weathers: {
    type1: string,
    type2: string
  },
  generation: string,
  family: string,
  stage: string,
}

const Home = () => {
  const maxByPage = 50;

  const [types, setTypes] = useState<string[]>([]);
  const [weathers, setWeather] = useState<string[]>([]);

  const [filhos, setFilhos] = useState<JSX.Element[]>([]);

  const [pagination, setPagination] = useState<number>(1);

  // filters
  const [namePokemon, setNamePokemon] = useState<string>();
  const [typePokemon, setTypePokemon] = useState<string>('GRASS');
  const [typeController, setTypeController] = useState<boolean>(true);
  const [weatherPokemon, setWeatherPokemon] = useState<string>('SUNNY_CLEAR');
  const [weatherController, setWeatherController] = useState<boolean>(true);


  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [pokemonsController, setPokemonsController] = useState<boolean>(true);
  const [visiblePokemons, setVisiblePokemons] = useState<Pokemon[]>([]);
  // lembra que os effects sao aplicados a cada renderizacao
  useEffect(() => {

    api
      .get<Type[]>('info/types/')
      .then(response => {
        const typeNames = response.data.map(type => type.nomeType);

        setTypes(typeNames);
      });
  }, []);
  // mas passando um objeto, ele so vai atualizar quando o objeto for atualizado
  // e como nao quero atualizar, passei null

  useEffect(() => {
    api
      .get<Weather[]>('info/weathers')
      .then(response => {
        const weatherNames = response.data.map(weather => weather.nomeWeather);

        setWeather(weatherNames);
      });
  }, []);


  // pegar all pokemons
  useEffect(() => {
    api
      .get<Pokemon[]>('/pokemons')
      .then((response) => {
        const pokedex = response.data;
        setPokemons(pokedex);
        setPagination(1);
      });
  }, [pokemonsController]);

  // paginar
  useEffect(() => {
    if (pokemons.length > 0) {
      let page: Array<Pokemon> = [];
      for (let i = (pagination - 1) * 50; i < pagination * 50; i++) {
        if (!(pokemons.length > i)) break;

        page.push(pokemons[i]);

      }
      setVisiblePokemons(page);
    }

  }, [pokemons, pagination]);

  // mostrar
  useEffect(() => {
    if (visiblePokemons.length > 0)
      setFilhos(
        visiblePokemons.map(pokemon => (
          <tr key={pokemon.nome}>
            <th>{pokemon.numberPokedex}</th>
            <td>{pokemon.nome}</td>
            <td>{
              pokemon.types.type1.toUpperCase() +
              (() => {
                switch (pokemon.types.type2) {
                  case "none": return "";
                  default: return "/" + pokemon.types.type2.toUpperCase();
                }
              })()

            }</td>
            <td>{
              pokemon.weathers.type1.toUpperCase() +
              (() => {
                switch (pokemon.weathers.type2) {
                  case "none": return "";
                  default: return "/" + pokemon.weathers.type2.toUpperCase();
                }
              })()

            }</td>
            <td>{pokemon.generation}</td>
            <td>{pokemon.evolved}</td>
            <td>{pokemon.stage}</td>
            <td>{pokemon.family}</td>
            <td>{pokemon.atk}</td>
            <td>{pokemon.def}</td>
            <td>{pokemon.sta}</td>
            <td>{pokemon.atk + pokemon.def + pokemon.sta}</td>
            <td>{pokemon.cp39}</td>
            <td>{pokemon.cp40}</td>
            <td>{pokemon.crossGen}</td>
            <td>{pokemon.legendary}</td>
            <td>{pokemon.aquireable}</td>
            <td>{pokemon.spawns}</td>
            <td>{pokemon.regional}</td>
            <td>{pokemon.shiny}</td>
            <td>{pokemon.nest}</td>
            <td>{pokemon.new}</td>
            <td>{pokemon.notGettable}</td>
            <td>{pokemon.futureEvolve}</td>
            <td>{pokemon.raidable}</td>
            <td>{pokemon.hatchable}</td>
            <td>{pokemon.img}</td>
          </tr>
        ))
      );
  }, [visiblePokemons]);

  // filtrar types
  useEffect(() => {
    api
      .get<Pokemon[]>(`/type/${typePokemon?.toLocaleLowerCase()}`)
      .then((response) => {
        const pokedex = response.data;
        setPagination(1);
        setPokemons(pokedex);
      });
  }, [typeController]);

  // filtrar weathers
  useEffect(() => {
    api
      .get<Pokemon[]>('/weather/' + (
        weatherPokemon[0] + weatherPokemon?.toLocaleLowerCase().slice(1)
      ))
      .then((response) => {
        const pokedex = response.data;
        setPagination(1);
        setPokemons(pokedex);
      });
  }, [weatherController]);

  // eventos
  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    setNamePokemon(value);
  }

  function handleTypeChange(event: ChangeEvent<HTMLSelectElement>) {
    const { value } = event.target;

    setTypePokemon(value);
  }

  function handleWeatherChange(event: ChangeEvent<HTMLSelectElement>) {
    const { value } = event.target;

    setWeatherPokemon(value);
  }

  const [painelController, setPainelController] = useState<boolean>(true);
  const [painelClass, setPainelClass] = useState<string>('painel');
  const [tableClass, setTableClass] = useState<string>('page');
  const [btnText, setBtnText] = useState<string>('Fechar Painel');

  useEffect(() => {
    if (painelController) {
      setPainelClass('painel');
      setTableClass('page');
      setBtnText('Fechar Painel');
    }
    else{
      setPainelClass('close-painel');
      setTableClass('expand-pokemon');
      setBtnText('Abrir Painel');
    }
  }, [painelController]);

  return (
    <div key="teste">
      <main className={tableClass}>
        <header>
          <div className="columns">
            <div className="column is-8">
              <h3 className="page-title">Pokedex</h3>
              <div className="close"><a onClick={()=>setPainelController(!painelController)} className="pagination-previous close-btn">{btnText}</a></div>
            </div>
            <div className="column pagination-container">
              <nav className="pagination" role="navigation" aria-label="pagination">
                <a onClick={() => {
                  if (pagination > 1) setPagination(pagination - 1)
                }} className="pagination-previous"><label><i className="fas fa-arrow-up"></i></label></a>
                <a onClick={() => {
                  if (pagination < pokemons.length / 50) setPagination(pagination + 1)
                }} className="pagination-next"><label><i className="fas fa-arrow-up"></i></label></a>
                <ul className="pagination-list">
                  <li>
                    <a className="pagination-link" aria-label="Goto page 1">{pagination}</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="column is-one-fifyths"></div>
          </div>
        </header>
        <div className={painelClass}>
          <div className="container">

          <h3 className="title is-3">Painel</h3>

            <fieldset>
              <label htmlFor="pokemonNome" className="label">Nome do Pokemon</label>
              <p className="help">Procure usar o começo do nome, se tiver dúvidas</p>

              <div className="field has-addons">
                <div className="control">
                  <input onChange={handleInputChange} value={namePokemon} id="pokemonNome" className="input is-small" type="text" placeholder="EX: Chikorita"></input>
                </div>
                <div className="control">
                  <a onClick={
                    () => {
                      api
                        .get<Pokemon[]>(`/search/${namePokemon}`)
                        .then((response) => {
                          const pokedex = response.data;
                          setPagination(1);
                          setPokemons(pokedex);
                        });
                    }
                  } className="button is-dark is-small">
                    Buscar
                  </a>
                </div>

              </div>
            </fieldset>

            <fieldset>
              <label htmlFor="pokemonType" className="label">Tipo do Pokemon</label>

              <div className="field has-addons">
                <div className="control is-expanded">
                  <div className="select is-fullwidth is-small">
                    <select onChange={handleTypeChange} value={typePokemon} id="pokemonType" name="country">
                      {types.map(type => (
                        <option key={type} value={type.toUpperCase()}>{type.toUpperCase()}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="control">
                  <button onClick={
                    () => { setTypeController(!typeController); }
                  } type="submit" className="button is-primary is-small">Buscar</button>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <label htmlFor="pokemonType" className="label">Weather do Pokemon</label>

              <div className="field has-addons">
                <div className="control is-expanded">
                  <div className="select is-fullwidth is-small">
                    <select onChange={handleWeatherChange} id="pokemonType" name="weathers">
                      {weathers.map(weather => (
                        <option key={weather} value={weather.toUpperCase()}>{weather.toUpperCase()}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="control">
                  <button onClick={
                    () => { setWeatherController(!weatherController); }
                  } type="submit" className="button is-primary is-small">Buscar</button>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <label htmlFor="pokemonType" className="label">Ver todos</label>

              <div className="field has-addons">
                <div className="control">
                  <button onClick={
                    () => setPokemonsController(!pokemonsController)
                  } type="submit" className="button is-primary is-small">Buscar</button>
                </div>
              </div>
            </fieldset>

          </div>
        </div>
        <div className="pokemon">
          <table className="table is-fullwidth is-striped is-hoverable">
            <thead>
              <tr>
                <th><abbr title="ID">ID</abbr></th>
                <th><abbr title="Nome">Nome</abbr></th>
                <th><abbr title="Types">T</abbr></th>
                <th><abbr title="Weathers">W</abbr></th>
                <th><abbr title="Generation">G</abbr></th>
                <th><abbr title="Evolved">E</abbr></th>
                <th><abbr title="Stage">S</abbr></th>
                <th><abbr title="Family">F</abbr></th>
                <th><abbr title="Atk">ATK</abbr></th>
                <th><abbr title="Def">DEF</abbr></th>
                <th><abbr title="Sta">STA</abbr></th>
                <th><abbr title="Sta Total">Sta Total</abbr></th>
                <th><abbr title="CP39">CP39</abbr></th>
                <th><abbr title="CP40">CP40</abbr></th>
                <th><abbr title="Cross Gen">CG</abbr></th>
                <th><abbr title="Legendary">L</abbr></th>
                <th><abbr title="Aquireable">A</abbr></th>
                <th><abbr title="Spawns">S</abbr></th>
                <th><abbr title="Regional">R</abbr></th>
                <th><abbr title="Shiny">Shiny</abbr></th>
                <th><abbr title="Nest">N</abbr></th>
                <th><abbr title="New">New</abbr></th>
                <th><abbr title="Not-Gettable">NG</abbr></th>
                <th><abbr title="Future Evolve">FE</abbr></th>
                <th><abbr title="Raidable">Ra</abbr></th>
                <th><abbr title="Hatchable">H</abbr></th>
                <th><abbr title="Img">IMG</abbr></th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th><abbr title="ID">ID</abbr></th>
                <th><abbr title="Nome">Nome</abbr></th>
                <th><abbr title="Types">T</abbr></th>
                <th><abbr title="Weathers">W</abbr></th>
                <th><abbr title="Generation">G</abbr></th>
                <th><abbr title="Evolved">E</abbr></th>
                <th><abbr title="Stage">S</abbr></th>
                <th><abbr title="Family">F</abbr></th>
                <th><abbr title="Atk">ATK</abbr></th>
                <th><abbr title="Def">DEF</abbr></th>
                <th><abbr title="Sta">STA</abbr></th>
                <th><abbr title="Sta Total">Sta Total</abbr></th>
                <th><abbr title="CP39">CP39</abbr></th>
                <th><abbr title="CP40">CP40</abbr></th>
                <th><abbr title="Cross Gen">CG</abbr></th>
                <th><abbr title="Legendary">L</abbr></th>
                <th><abbr title="Aquireable">A</abbr></th>
                <th><abbr title="Spawns">S</abbr></th>
                <th><abbr title="Regional">R</abbr></th>
                <th><abbr title="Shiny">Shiny</abbr></th>
                <th><abbr title="Nest">N</abbr></th>
                <th><abbr title="New">New</abbr></th>
                <th><abbr title="Not-Gettable">NG</abbr></th>
                <th><abbr title="Future Evolve">FE</abbr></th>
                <th><abbr title="Raidable">Ra</abbr></th>
                <th><abbr title="Hatchable">H</abbr></th>
                <th><abbr title="Img">IMG</abbr></th>
              </tr>
            </tfoot>
            <tbody className="scroll">{filhos}</tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Home;