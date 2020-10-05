import React, { useState, useEffect } from "react";
import { Button } from "../ControlPage/style";
import { ButtonSubmit } from "./style";
import { Link } from "react-router-dom";
import useForm from "../hook/useForm";
import { Form, Container, Container2 } from "./style";

export default function Insert() {
  const [addPokemon, setAddPokemon] = useState([]);
  const { form, onChange } = useForm({
    name: "",
    pokedexNumber: "",
    imgName: "",
    generation: "",
    evolutionStage: "",
    evolved: "",
    familyId: "",
    crossGen: "",
    type1: "",
    type2: "",
    weather1: "",
    weather2: "",
    statTotal: "",
    atk: "",
    def: "",
    sta: "",
    legendary: "",
    aquireable: "",
    spawns: "",
    regional: "",
    raidable: "",
    hatchable: "",
    shiny: "",
    nest: "",
    new: "",
    notGettable: "",
    futureEvolve: "",
    hundredCPfourty: "",
    hundredCPthirtynine: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };
  return (
    <div>
      <Container>
        <h1>Add your Pokemon</h1>
      </Container>
      <Container>
        <Form autoComplete="off">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleInputChange}
            required
          ></input>
          <label>Pokedex Number:</label>
          <input
            type="number"
            name="pokedexNumber"
            value={form.pokedexNumber}
            onChange={handleInputChange}
            required
            autoComplete="new-password"
          ></input>
          <label>Img name:</label>
          <input
            type="text"
            name="imgName"
            value={form.imgName}
            onChange={handleInputChange}
            required
            autoComplete="new-password"
          ></input>
          <label>Generation:</label>
          <input
            type="number"
            name="generation"
            value={form.generation}
            onChange={handleInputChange}
            required
            autoComplete="new-password"
          ></input>
          <label>Evolution Stage:</label>
          <input
            type="number"
            name="evolutionStage"
            value={form.evolutionStage}
            onChange={handleInputChange}
            required
            autoComplete="new-password"
          ></input>
          <label>Evolved:</label>
          <input
            type="number"
            name="evolved"
            value={form.evolved}
            onChange={handleInputChange}
            required
            autoComplete="new-password"
          ></input>
          <label>FamilyID:</label>
          <input
            type="number"
            name="familyId"
            value={form.familyId}
            onChange={handleInputChange}
            required
            autoComplete="new-password"
          ></input>
          <label>Cross Gen:</label>
          <input
            type="number"
            name="crossGen"
            value={form.crossGen}
            onChange={handleInputChange}
            required
            autoComplete="new-password"
          ></input>
          <label> Type 1:</label>
          <input
            type="number"
            name="type1"
            value={form.type1}
            onChange={handleInputChange}
            required
            autoComplete="new-password"
          ></input>
          <label>Type 2:</label>
          <input
            type="number"
            name="type2"
            value={form.type2}
            onChange={handleInputChange}
            required
            autoComplete="new-password"
          ></input>
          <label>Weather 1:</label>
          <input
            type="text"
            name="weather1"
            value={form.weather1}
            onChange={handleInputChange}
            required
            autoComplete="new-password"
          ></input>
          <label> Weather 2:</label>
          <input
            type="text"
            name="weather2"
            value={form.weather2}
            onChange={handleInputChange}
            required
            autoComplete="new-password"
          ></input>
          <label>STAT TOTAL:</label>
          <input
            type="number"
            name="statTotal"
            value={form.statTotal}
            onChange={handleInputChange}
            required
            autoComplete="new-password"
          ></input>
          <label>ATK:</label>
          <input
            type="number"
            name="atk"
            value={form.atk}
            onChange={handleInputChange}
            required
            autoComplete="new-password"
          ></input>
          <label>DEF:</label>
          <input
            type="number"
            name="def"
            value={form.def}
            onChange={handleInputChange}
            required
            autoComplete="new-password"
          ></input>
          <label>STA:</label>
          <input
            type="number"
            name="sta"
            value={form.sta}
            onChange={handleInputChange}
            required
            autoComplete="new-password"
          ></input>
          <label>Legendary:</label>
          <input
            type="number"
            name="legendary"
            value={form.legendary}
            onChange={handleInputChange}
            required
            autoComplete="new-password"
          ></input>
          <label>Aquireable:</label>
          <input
            type="number"
            name="aquireable"
            value={form.aquireable}
            onChange={handleInputChange}
            required
            autoComplete="new-password"
          ></input>
          <label>Spawns:</label>
          <input
            type="number"
            name="spawns"
            value={form.spawns}
            onChange={handleInputChange}
            required
            autoComplete="new-password"
          ></input>
          <label>Regional:</label>
          <input
            type="number"
            name="regional"
            value={form.regional}
            onChange={handleInputChange}
            required
            autoComplete="new-password"
          ></input>
          <label>Raidable:</label>
          <input
            type="number"
            name="raidable"
            value={form.raidable}
            onChange={handleInputChange}
            required
            autoComplete="new-password"
          ></input>
          <label>Hatchable:</label>
          <input
            type="number"
            name="hatchable"
            value={form.hatchable}
            onChange={handleInputChange}
            required
            autoComplete="new-password"
          ></input>
          <label>Shiny:</label>
          <input
            type="number"
            name="shiny"
            value={form.shiny}
            onChange={handleInputChange}
            required
            autoComplete="new-password"
          ></input>
          <label>Nest:</label>
          <input
            type="number"
            name="nest"
            value={form.nest}
            onChange={handleInputChange}
            required
            autoComplete="new-password"
          ></input>
          <label>New:</label>
          <input
            type="number"
            name="new"
            value={form.new}
            onChange={handleInputChange}
            required
            autoComplete="new-password"
          ></input>
          <label>Not-Gettable:</label>
          <input
            type="number"
            name="notGettable"
            value={form.notGettable}
            onChange={handleInputChange}
            required
            autoComplete="new-password"
          ></input>
          <label>Future Evolve:</label>
          <input
            type="number"
            name="futureEvolve"
            value={form.futureEvolve}
            onChange={handleInputChange}
            required
            autoComplete="new-password"
          ></input>
          <label>100% CP @ 40:</label>
          <input
            type="number"
            name="hundredCPfourty"
            value={form.hundredCPfourty}
            onChange={handleInputChange}
            required
            autoComplete="new-password"
          ></input>
          <label>100% CP @ 39:</label>
          <input
            type="number"
            name="hundredCPthirtynine"
            value={form.hundredCPthirtynine}
            onChange={handleInputChange}
            required
            autoComplete="new-password"
          ></input>
          <ButtonSubmit type="submit">ADD</ButtonSubmit>
        </Form>
      </Container>
      <Container>
        <Link to="/">
          <Container2>
            <Button>HOME</Button>
          </Container2>
        </Link>
      </Container>
    </div>
  );
}
