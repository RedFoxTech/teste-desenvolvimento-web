import React from "react";
import { Button } from "../ControlPage/style";
import { Link } from "react-router-dom";
import useForm from "../hook/useForm";
import { ButtonDelete, Container, Form } from "./style";

export default function Delete() {
  const { form, onChange } = useForm({
    name: "",
    pokedexNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  const handleDeletePokemon = (e) => {
    e.preventDefault();
    console.log("Apagou");
  };

  return (
    <div>
      <Container>
        <h1>Delete your pokemon</h1>
      </Container>
      <Container>
        <Form>
          Pokemon name:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleInputChange}
          ></input>
          Pokedex Number:
          <input
            type="number"
            name="pokedexNumber"
            value={form.pokedexNumber}
            onChange={handleInputChange}
          ></input>
          <ButtonDelete onClick={handleDeletePokemon} type="submit">
            DELETE
          </ButtonDelete>
        </Form>
      </Container>
      <Container>
        {" "}
        <Link to="/">
          <Button>HOME</Button>
        </Link>
      </Container>
    </div>
  );
}
