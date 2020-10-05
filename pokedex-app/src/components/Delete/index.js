import React from "react";
import { Button } from "../ControlPage/style";
import { Link } from "react-router-dom";
import useForm from "../hook/useForm";
import { ButtonDelete } from "./style";

export default function Delete() {
  const { form, onChange } = useForm({
    name: "",
    pokedexNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };
  return (
    <div>
      <h1>Delete your pokemon</h1>
      <form>
        Pokemon name:
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleInputChange}
          required
        ></input>
        Pokedex Number:
        <input
          type="number"
          name="pokedexNumber"
          value={form.pokedexNumber}
          onChange={handleInputChange}
          required
        ></input>
        <ButtonDelete type="submit">DELETE</ButtonDelete>
      </form>
      <Link to="/">
        <Button>HOME</Button>
      </Link>
    </div>
  );
}
