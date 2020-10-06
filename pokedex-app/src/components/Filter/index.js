import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../ControlPage/style";
import { Container, Form, Pokemons } from "./style";
import { Link } from "react-router-dom";
import useForm from "../hook/useForm";
import pokemonsList from "../../data/pokemonsList.json";

export default function Filter() {
  const history = useHistory();

  const [pokemons, setPokemons] = useState([]);

  const { form, onChange } = useForm({
    name: "",
  });

  useEffect(() => {
    (async () => {
      await getPokemons();
    })();
  }, []);

  async function getPokemons() {
    try {
      const pokemons = await getPokemonsList();
      setPokemons(pokemons);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function getPokemonsList() {
    setTimeout(() => {}, 2000);
    return pokemonsList;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  function redirectToPokemon(id) {
    history.push(`/pokemon/${id}`);
  }

  return (
    <div>
      <Container>
        <h1>Filter the pokemon</h1>
      </Container>
      <Container>
        <Form
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label>Enter the name of the pokemon:</label>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleInputChange}
          ></input>
          <Button type="submit">SEARCH</Button>
        </Form>
      </Container>
      <Container>
        <Link to="/">
          <Button>HOME</Button>
        </Link>
      </Container>
      <Container>
        <Pokemons>
          {pokemons.length > 0
            ? pokemons
                .filter((pokemon) => {
                  console.log(form.name);
                  return (
                    pokemon.Name.toLowerCase().indexOf(
                      form.name.toLowerCase()
                    ) !== -1
                  );
                })
                .map((pokemon) => (
                  <div
                    onClick={() => redirectToPokemon(pokemon["Pokedex Number"])}
                  >
                    {pokemon.Name}
                  </div>
                ))
            : null}
        </Pokemons>
      </Container>
    </div>
  );
}
// pokemons.map
