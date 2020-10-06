import React, { useState, useEffect } from "react";
import { Button } from "../ControlPage/style";
import { ButtonSubmit } from "./style";
import { Link } from "react-router-dom";

import { Form, Container, Container2 } from "./style";

export default function Insert() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [img, setImg] = useState("");
  const [generation, setGeneration] = useState("");
  const [evolution, setEvolution] = useState("");
  const [evolved, setEvolved] = useState("");
  const [family, setFamily] = useState("");
  const [gen, setGen] = useState("");
  const [type1, setType1] = useState("");
  const [type2, setType2] = useState("");
  const [weather1, setWeather1] = useState("");
  const [weather2, setWeather2] = useState("");
  const [statTotal, setStatTotal] = useState("");
  const [atk, setAtk] = useState("");
  const [def, setDef] = useState("");
  const [sta, setSta] = useState("");
  const [legendary, setLegendary] = useState("");
  const [aquireable, setAquireable] = useState("");
  const [spawns, setSpawns] = useState("");
  const [regional, setRegional] = useState("");
  const [raidable, setRaidable] = useState("");
  const [hatchable, setHatchable] = useState("");
  const [shiny, setShiny] = useState("");
  const [nest, setNest] = useState("");
  const [New, setNew] = useState("");
  const [notGettable, setNotGettable] = useState("");
  const [futureEvolve, setFutureEvolve] = useState("");
  const [hundredCPfourty, setHundredCPfourty] = useState("");
  const [hundredCPthirtynine, setHundredCPThirtyNine] = useState("");
  const [dados, setDados] = useState({
    name: name,
    number: number,
    imgName: img,
    generation: generation,
    evolutionStage: evolution,
    evolved: evolved,
    familyId: family,
    crossGen: gen,
    type1: type1,
    type2: type2,
    weather1: weather1,
    weather2: weather2,
    statTotal: statTotal,
    atk: atk,
    def: def,
    sta: sta,
    legendary: legendary,
    aquireable: aquireable,
    spawns: spawns,
    regional: regional,
    raidable: raidable,
    hatchable: hatchable,
    shiny: shiny,
    nest: nest,
    new: New,
    notGettable: notGettable,
    futureEvolve: futureEvolve,
    hundredCPfourty: hundredCPfourty,
    hundredCPthirtynine: hundredCPthirtynine,
  });

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleNumber = (e) => {
    setNumber(e.target.value);
  };
  const handleImg = (e) => {
    setImg(e.target.value);
  };
  const handleGeneration = (e) => {
    setGeneration(e.target.value);
  };
  const handleEvolution = (e) => {
    setEvolution(e.target.value);
  };
  const handleEvolved = (e) => {
    setEvolved(e.target.value);
  };
  const handleFamily = (e) => {
    setFamily(e.target.value);
  };
  const handleGen = (e) => {
    setGen(e.target.value);
  };
  const handleType1 = (e) => {
    setType1(e.target.value);
  };
  const handleType2 = (e) => {
    setType2(e.target.value);
  };
  const handleWeather1 = (e) => {
    setWeather1(e.target.value);
  };
  const handleWeather2 = (e) => {
    setWeather2(e.target.value);
  };
  const handleStatTotal = (e) => {
    setStatTotal(e.target.value);
  };
  const handleAtk = (e) => {
    setAtk(e.target.value);
  };
  const handleDef = (e) => {
    setDef(e.target.value);
  };
  const handleSta = (e) => {
    setSta(e.target.value);
  };
  const handleLegendary = (e) => {
    setLegendary(e.target.value);
  };
  const handleAquireable = (e) => {
    setAquireable(e.target.value);
  };
  const handleSpawns = (e) => {
    setSpawns(e.target.value);
  };
  const handleRegional = (e) => {
    setRegional(e.target.value);
  };
  const handleRaidable = (e) => {
    setRaidable(e.target.value);
  };
  const handleHatchable = (e) => {
    setHatchable(e.target.value);
  };
  const handleShiny = (e) => {
    setShiny(e.target.value);
  };
  const handleNest = (e) => {
    setNest(e.target.value);
  };
  const handleNew = (e) => {
    setNew(e.target.value);
  };
  const handleNotGettable = (e) => {
    setNotGettable(e.target.value);
  };
  const handleFutureEvolve = (e) => {
    setFutureEvolve(e.target.value);
  };
  const handleHundredCPfourty = (e) => {
    setHundredCPfourty(e.target.value);
  };
  const handleHundredCPthirtynine = (e) => {
    setHundredCPThirtyNine(e.target.value);
  };

  const data = {
    name: name,
    number: number,
    imgName: img,
    generation: generation,
    evolutionStage: evolution,
    evolved: evolved,
    familyId: family,
    crossGen: gen,
    type1: type1,
    type2: type2,
    weather1: weather1,
    weather2: weather2,
    statTotal: statTotal,
    atk: atk,
    def: def,
    sta: sta,
    legendary: legendary,
    aquireable: aquireable,
    spawns: spawns,
    regional: regional,
    raidable: raidable,
    hatchable: hatchable,
    shiny: shiny,
    nest: nest,
    new: New,
    notGettable: notGettable,
    futureEvolve: futureEvolve,
    hundredCPfourty: hundredCPfourty,
    hundredCPthirtynine: hundredCPthirtynine,
  };

  const addPokemon = (e) => {
    e.preventDefault();

    const newData = { ...dados, data };
    setDados(newData);
    console.log(newData);
  };

  return (
    <div>
      <Container>
        <h1>Add your Pokemon</h1>
      </Container>
      <Container>
        <Form autoComplete="off" onSubmit={addPokemon}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleName}
            required
          ></input>
          <label>Pokedex Number:</label>
          <input
            type="number"
            name="pokedexNumber"
            value={number}
            onChange={handleNumber}
            required
          ></input>
          <label>Img name:</label>
          <input
            type="text"
            name="imgName"
            value={img}
            onChange={handleImg}
            required
          ></input>
          <label>Generation:</label>
          <input
            type="number"
            name="generation"
            value={generation}
            onChange={handleGeneration}
            required
          ></input>
          <label>Evolution Stage:</label>
          <input
            type="number"
            name="evolutionStage"
            value={evolution}
            onChange={handleEvolution}
            required
          ></input>
          <label>Evolved:</label>
          <input
            type="number"
            name="evolved"
            value={evolved}
            onChange={handleEvolved}
            required
          ></input>
          <label>FamilyID:</label>
          <input
            type="number"
            name="familyId"
            value={family}
            onChange={handleFamily}
            required
          ></input>
          <label>Cross Gen:</label>
          <input
            type="number"
            name="crossGen"
            value={gen}
            onChange={handleGen}
            required
          ></input>
          <label> Type 1:</label>
          <input
            type="number"
            name="type1"
            value={type1}
            onChange={handleType1}
            required
          ></input>
          <label>Type 2:</label>
          <input
            type="number"
            name="type2"
            value={type2}
            onChange={handleType2}
            required
          ></input>
          <label>Weather 1:</label>
          <input
            type="text"
            name="weather1"
            value={weather1}
            onChange={handleWeather1}
            required
          ></input>
          <label> Weather 2:</label>
          <input
            type="text"
            name="weather2"
            value={weather2}
            onChange={handleWeather2}
            required
          ></input>
          <label>STAT TOTAL:</label>
          <input
            type="number"
            name="statTotal"
            value={statTotal}
            onChange={handleStatTotal}
            required
          ></input>
          <label>ATK:</label>
          <input
            type="number"
            name="atk"
            value={atk}
            onChange={handleAtk}
            required
          ></input>
          <label>DEF:</label>
          <input
            type="number"
            name="def"
            value={def}
            onChange={handleDef}
            required
          ></input>
          <label>STA:</label>
          <input
            type="number"
            name="sta"
            value={sta}
            onChange={handleSta}
            required
          ></input>
          <label>Legendary:</label>
          <input
            type="number"
            name="legendary"
            value={legendary}
            onChange={handleLegendary}
            required
          ></input>
          <label>Aquireable:</label>
          <input
            type="number"
            name="aquireable"
            value={aquireable}
            onChange={handleAquireable}
            required
          ></input>
          <label>Spawns:</label>
          <input
            type="number"
            name="spawns"
            value={spawns}
            onChange={handleSpawns}
            required
          ></input>
          <label>Regional:</label>
          <input
            type="number"
            name="regional"
            value={regional}
            onChange={handleRegional}
            required
          ></input>
          <label>Raidable:</label>
          <input
            type="number"
            name="raidable"
            value={raidable}
            onChange={handleRaidable}
            required
          ></input>
          <label>Hatchable:</label>
          <input
            type="number"
            name="hatchable"
            value={hatchable}
            onChange={handleHatchable}
            required
          ></input>
          <label>Shiny:</label>
          <input
            type="number"
            name="shiny"
            value={shiny}
            onChange={handleShiny}
            required
          ></input>
          <label>Nest:</label>
          <input
            type="number"
            name="nest"
            value={nest}
            onChange={handleNest}
            required
          ></input>
          <label>New:</label>
          <input
            type="number"
            name="new"
            value={New}
            onChange={handleNew}
            required
          ></input>
          <label>Not-Gettable:</label>
          <input
            type="number"
            name="notGettable"
            value={notGettable}
            onChange={handleNotGettable}
            required
          ></input>
          <label>Future Evolve:</label>
          <input
            type="number"
            name="futureEvolve"
            value={futureEvolve}
            onChange={handleFutureEvolve}
            required
          ></input>
          <label>100% CP @ 40:</label>
          <input
            type="number"
            name="hundredCPfourty"
            value={hundredCPfourty}
            onChange={handleHundredCPfourty}
            required
          ></input>
          <label>100% CP @ 39:</label>
          <input
            type="number"
            name="hundredCPthirtynine"
            value={hundredCPthirtynine}
            onChange={handleHundredCPthirtynine}
            required
          ></input>
          <ButtonSubmit onClick={addPokemon} type="submit">
            ADD
          </ButtonSubmit>
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
