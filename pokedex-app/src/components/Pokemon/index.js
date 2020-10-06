import React, { useState, useEffect } from "react";
import { Button } from "../ControlPage/style";
import { Container, Form, Li } from "./style";
import { Link } from "react-router-dom";
import pokemonsList from "../../data/pokemonsList.json";

export default function Pokemon(props) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    (async () => {
      await getPokemonById();
    })();
  }, []);

  async function getPokemonById() {
    try {
      const pokemons = await getPokemonsList();

      const result = pokemons.filter((pokemon) => {
        return pokemon["Pokedex Number"] === Number(props.match.params.id);
      });
      console.log(result);
      setPokemon(result[0]);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function getPokemonsList() {
    setTimeout(() => {}, 2000);
    return pokemonsList;
  }

  return (
    <>
      {pokemon.Name && (
        <div>
          <Container>
            <h1>Pokemon</h1>
          </Container>
          <Container>
            <Form>
              <li>
                <label>Name :</label>
                {pokemon.Name}
              </li>
              <li>
                <label>Pokedex Number :</label>
                {pokemon["Pokedex Number"]}
              </li>
              <li>
                <label>Img name :</label>
                {pokemon["Img name"]}
              </li>
              <li>
                <label>Generation :</label>
                {pokemon.Generation}
              </li>
              <li>
                <label>Evolution :</label>
                {pokemon["Evolution Stage"]}
              </li>
              <li>
                <label>Evolved :</label>
                {pokemon.Evolved}
              </li>
              <li>
                <label>FamilyID :</label>
                {pokemon.FamilyID}
              </li>
              <li>
                <label>Cross Gen :</label>
                {pokemon["Cross Gen"]}
              </li>
              <li>
                <label>Type 1 :</label> {pokemon["Type 1"]}
              </li>
              <li>
                <label>Type 2 :</label>
                {pokemon["Type 2"]}
              </li>
              <li>
                <label>Weather 1 :</label>
                {pokemon["Weather 1"]}
              </li>
              <li>
                <label>Weather 2 :</label>
                {pokemon["Weather 2"]}
              </li>
              <li>
                <label>Stat Total :</label>
                {pokemon["STAT TOTAL"]}
              </li>
              <li>
                <label>Atk :</label>
                {pokemon.ATK}
              </li>
              <li>
                <label>Def :</label>
                {pokemon.DEF}
              </li>
              <li>
                <label> Sta:</label>
                {pokemon.STA}
              </li>
              <li>
                <label>Legendary :</label>
                {pokemon.Legendary}
              </li>
              <li>
                <label>Aquireable :</label>
                {pokemon.Aquireable}
              </li>
              <li>
                <label>Spawns :</label>
                {pokemon.Spawns}
              </li>
              <li>
                <label>Regional :</label>
                {pokemon.Regional}
              </li>
              <li>
                <label>Raidable :</label>
                {pokemon.Raidable}
              </li>
              <li>
                <label>Hatchable :</label>
                {pokemon.Hatchable}
              </li>
              <li>
                <label>Shiny :</label>
                {pokemon.Shiny}
              </li>
              <li>
                <label>Nest :</label>
                {pokemon.Nest}
              </li>
              <li>
                <label>New :</label>
                {pokemon.New}
              </li>
              <li>
                <label>Not-Gettable :</label>
                {pokemon["Not-Gettable"]}
              </li>
              <li>
                <label>Future Evolve :</label>
                {pokemon["Future Evolve"]}
              </li>
              <li>
                <label>100% CP @ 40 :</label>
                {pokemon["100% CP @ 40"]}
              </li>
              <li>
                <label>100% CP @ 39 :</label>
                {pokemon["100% CP @ 39"]}
              </li>
            </Form>
          </Container>
          <Container>
            <Link to="/filter">
              <Button>BACK</Button>
            </Link>
          </Container>
        </div>
      )}
    </>
  );
}
