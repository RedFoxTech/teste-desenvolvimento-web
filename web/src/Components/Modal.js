import React, { useState } from "react";
import "./Modal.css";
import api from "../services/api";

export const Modal = ({ show, closeModalHandler }) => {
  const [pokemonid, setPokemonId] = useState("");
  const [imgpokemon, setImgPokemon] = useState("");
  const [namepokemon, setNamePokemon] = useState("");
  const [generation, setGeneration] = useState("");
  const [evolution, setEvolution] = useState("");
  const [typeone, setTypeOne] = useState("");
  const [typetwo, setTypeTwo] = useState("");
  const [weather, setWeather] = useState("");
  const [atk, setAtk] = useState("");
  const [def, setDef] = useState("");

  async function handleAddPokemon(e) {
    e.preventDefault();
    const response = await api.post("/pokemons", {
      pokemonid,
      imgpokemon,
      namepokemon,
      generation,
      evolution,
      typeone,
      typetwo,
      weather,
      atk,
      def,
    });
    setPokemonId("");
    setImgPokemon("");
    setNamePokemon("");
    setGeneration("");
    setEvolution("");
    setTypeOne("");
    setTypeTwo("");
    setWeather("");
    setAtk("");
    setDef("");

    console.log(response.data);
  }

  return (
    <div
      className="modal__content"
      style={{
        display: !show ? "none" : "block",
        zIndex: !show ? "0" : "999",
      }}
    >
      <div
        className="modal-wrapper"
        style={{
          display: !show ? "none" : "block",
          opacity: show ? "1" : "0",
        }}
      >
        <div className="modal-header">
          <h4>Pokemon</h4>
          <span onClick={closeModalHandler} className="close-modal-btn">
            X
          </span>
        </div>
        <div className="modal-content">
          <div className="modal-body">
            <form onSubmit={handleAddPokemon}>
              <div className="mb-1">
                <label>Pokemon ID:</label>
                <input
                  type="number"
                  name="pokemonid"
                  id="pokemonid"
                  value={pokemonid}
                  onChange={(e) => setPokemonId(e.target.value)}
                  className="mr-3"
                />

                <label htmlFor="imgpokemon">Photo:</label>
                <input
                  type="number"
                  name="imgpokemon"
                  id="imgpokemon"
                  value={imgpokemon}
                  onChange={(e) => setImgPokemon(e.target.value)}
                />
              </div>

              <div className="mb-1">
                <label htmlFor="namepokemon">Name Pokemon:</label>
                <input
                  name="namepokemon"
                  id="namepokemon"
                  required
                  value={namepokemon}
                  onChange={(e) => setNamePokemon(e.target.value)}
                  className="mr-3 w-50"
                />
              </div>

              <div className="mb-1">
                {" "}
                <label htmlFor="generation">Generation:</label>
                <input
                  type="number"
                  name="generation"
                  id="generation"
                  value={generation}
                  onChange={(e) => setGeneration(e.target.value)}
                  className="mr-3"
                />
                <label htmlFor="evolution">Evolution Stage:</label>
                <input
                  type="number"
                  name="evolution"
                  id="evolution"
                  value={evolution}
                  onChange={(e) => setEvolution(e.target.value)}
                />
              </div>

              <div className="mb-1">
                <label htmlFor="typeone">Type_1:</label>
                <input
                  name="typeone"
                  id="typeone"
                  required
                  value={typeone}
                  onChange={(e) => setTypeOne(e.target.value)}
                  className="mr-3"
                />

                <label htmlFor="typetwo">Type_2:</label>
                <input
                  name="typetwo"
                  id="typetwo"
                  value={typetwo}
                  onChange={(e) => setTypeTwo(e.target.value)}
                  className="mr-3"
                />
              </div>

              <label htmlFor="weather">Weather:</label>
              <input
                name="weather"
                id="weather"
                value={weather}
                onChange={(e) => setWeather(e.target.value)}
                className="mr-3"
              />

              <label htmlFor="evolution">ATK:</label>
              <input
                type="number"
                name="atk"
                id="atk"
                value={atk}
                onChange={(e) => setAtk(e.target.value)}
                className="mr-3"
              />

              <label htmlFor="def">DEF:</label>
              <input
                type="number"
                name="def"
                id="def"
                value={def}
                onChange={(e) => setDef(e.target.value)}
              />
            </form>
          </div>
          <div className="modal-footer">
            <button onClick={closeModalHandler} className="btn-cancel">
              Cancel
            </button>
            <button
              type="submit"
              onClick={closeModalHandler}
              className="btn-save"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
