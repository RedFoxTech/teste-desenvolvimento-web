import React, { useState, useEffect, Fragment } from 'react';
import ServicePokemonAPI from '../services/ServicePokemonAPI';
import LoadingIndicator from './LoadingIndicator';
import CardsPanel from './CardsPanel'

const Pokedex = () =>
{
  const initialPokemonsValue = []
  const initialConfigValue = {
    propertyName: "",
    propertyValue: ""
  }
  const [pokemons, setPokemons] = useState(initialPokemonsValue);
  const [loaded, setLoaded] = useState(false);

  const [selectedConfig, setSelectedConfig] = useState(initialConfigValue);

  const onSelectorChangeHandler = (config) =>
  {
    setSelectedConfig(config);
  };

  const getCardsHandler = async () =>
  {
    if (selectedConfig)
    {
      await getCardsByProperty(selectedConfig);
    }
    else
    {
      console.log("No config selected")
    }
  };


  const getCardsByProperty = async (properties) =>
  {
    // only for testing
    let propertyName = "generation"
    let propertyValue = 1
    try
    {
      let response = await ServicePokemonAPI.findAllPokemonByProperty(propertyName, propertyValue)
      if (response.status === 200)
      {
        //console.log(response.data);
        setPokemons(response.data)
        setLoaded(true)

      }
    } catch (error)
    {
      console.log(error);
    }

  }

  const newSearch = () =>
  {
    setPokemons(initialPokemonsValue);
    setSelectedConfig([]);

    setLoaded(false);
  };

  return (
    <div>

      {loaded ? (
        <div>
          <h4>Result of the search</h4>
          <div>
            <CardsPanel
              pokemons={pokemons}
              submisionStatus={loaded}
            />
          </div>
          <h4>Make a new search?</h4>
          <button className="btn blue-grey lighten-3" onClick={newSearch}>
            Return
          </button>
        </div>
      ) : (
        <div className="row">
          <div className="col s12">
            {/* Make a selector bar component here */}
            <h4>Pokedex</h4>
            <button
              onClick={getCardsHandler}
              className="waves-effect waves-light btn blue-grey lighten-3"
            >  Search </button>

            <LoadingIndicator />
          </div>
        </div>
      )}
    </div>
  );
};

export default Pokedex;

