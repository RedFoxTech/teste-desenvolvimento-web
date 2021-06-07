import React, { useState, useEffect } from "react";
import PokemonDataService from "../services/PokemonService";

const Pokemon = (props) => {
  const initialPokemonState = {
    name: "",
  };
  const [currentPokemon, setCurrentPokemon] = useState(initialPokemonState);

  const getPokemon = (id) => {
    PokemonDataService.get(id)
      .then((response) => {
        setCurrentPokemon(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getPokemon(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentPokemon({ ...currentPokemon, [name]: value });
  };

  return (
    <div>
      {currentPokemon ? (
        <div className="edit-form">
          <h4>Pokémon</h4>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={currentPokemon.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
                value={currentPokemon.subject}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="type">Type</label>
              <input
                type="text"
                className="form-control"
                id="type"
                name="type"
                value={currentPokemon.type_1}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="value">Value</label>
              <input
                type="number"
                className="form-control"
                id="value"
                name="value"
                value={currentPokemon.value}
                onChange={handleInputChange}
              />
            </div>
          </form>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Pokémon...</p>
        </div>
      )}
    </div>
  );
};

export default Pokemon;
