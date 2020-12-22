import React, { useState, useEffect } from "react";
import api from "../services/api";
import atk from "../assets/images/atk.png";
import def from "../assets/images/def.png";

const Card = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function loadPokemons() {
      const response = await api.get("/pokemons");
      setPokemons(response.data);
    }
    loadPokemons();
  }, []);

  return (
    <>
      {pokemons.map((pokemon) => (
        <div className="card mb-3 mb-lg-4 bg-yellow-dark">
          <div className="card__content-btns">
            <button className="card__content-btns-btn mb-4">Editar</button>
            <button className="card__content-btns-btn">Remover</button>
          </div>

          <div className="card__header mb-3 bg-yellow d-flex justify-content-between align-items-center">
            <span className="card__header-name">{pokemon.name_pokemon}</span>
            <div className="card__header-ball-id d-flex justify-content-center align-items-center">
              <span className="card__header-id">{pokemon.id_pokemon}</span>
            </div>
          </div>

          <img
            className="card__img mb-3"
            src="data:image/png;base64,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"
            alt=""
          />

          <div className="card__content mb-2 bg-white  d-flex flex-column">
            <span className="card__content-text">
              Generation:{pokemon.generation}
            </span>

            <span className="card__content-text">
              Evolution Stage:{pokemon.evolution_stage}
            </span>

            <span className="card__content-text">Type_1:{pokemon.type_1}</span>

            <span className="card__content-text">Type_2:{pokemon.type_2}</span>

            <span className="card__content-text">
              Weather:{pokemon.weather}
            </span>
          </div>

          <div className="card__footer d-flex justify-content-between">
            <div>
              <img className="card__icon" src={atk} alt="" />
              <span>ATK:{pokemon.ATK}</span>
            </div>

            <div>
              <img className="card__icon" src={def} alt="" />
              <span>DEF:{pokemon.DEF}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
