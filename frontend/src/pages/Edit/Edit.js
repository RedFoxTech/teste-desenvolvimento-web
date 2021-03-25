import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import api from '../../services/api';

import { Header, DivContainer, FormGroup, Input, Button } from './Style';

const Edit = (props) => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    api.get(`/pokemon/${props.match.params.id}`).then((response) => {
      setPokemon(response.data);
      console.log(response.data);
    });
  }, []);

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setPokemon({ ...pokemon, [name]: value });
  };

  const handlePokemon = async (event) => {
    event.preventDefault();
    console.log(pokemon);
    await api
      .put(`/pokemon/${pokemon.id}`, pokemon)
      .then((response) => {
        console.log(response.data);
        swal({
          icon: 'success',
          title: 'Sucesso!',
          text: 'Pokemon atualizado com sucesso.',
        }).then(function () {
          window.location = '/';
        });
      })
      .catch((error) => {
        console.log(error);
        swal({
          icon: 'error',
          title: 'Erro!',
          text: 'Pokemon já atualizado ou falha ao enviar cadastro.',
        });
      });
  };

  return (
    <>
      <main id="Edit-page">
        <Header>
          <h1>Atualize o Pokemon</h1>
        </Header>
        <DivContainer>
          <FormGroup onSubmit={handlePokemon}>
            <Input
              name="name"
              required
              placeholder="Name"
              onChange={handleInputChange}
              defaultValue={pokemon.name}
            />
            <Input
              name="pokedex_number"
              required
              placeholder="Pokedex number"
              onChange={handleInputChange}
              defaultValue={pokemon.pokedex_number}
            />
            <Input
              name="generation"
              placeholder="Generation"
              onChange={handleInputChange}
              defaultValue={pokemon.generation}
              required
            />
            <Input
              name="evolution_stage"
              placeholder="Evolution stage"
              required
              onChange={handleInputChange}
              defaultValue={pokemon.evolution_stage}
            />
            <Input
              name="evolved"
              placeholder="Evolved"
              required
              onChange={handleInputChange}
              defaultValue={pokemon.evolved}
            />
            <Input
              name="family_id"
              placeholder="Family id"
              required
              onChange={handleInputChange}
              defaultValue={pokemon.family_id}
            />
            <Input
              name="type1"
              placeholder="Type1"
              required
              onChange={handleInputChange}
              defaultValue={pokemon.type1}
            />
            <Input
              name="type2"
              placeholder="Type2"
              required
              onChange={handleInputChange}
              defaultValue={pokemon.type2}
            />
            <Input
              name="weather1"
              placeholder="Weather1"
              required
              onChange={handleInputChange}
              defaultValue={pokemon.weather1}
            />
            <Input
              name="weather2"
              placeholder="Weather2"
              required
              onChange={handleInputChange}
              defaultValue={pokemon.weather2}
            />
            <Input
              name="stat_total"
              placeholder="Stat total"
              required
              onChange={handleInputChange}
              defaultValue={pokemon.stat_total}
            />
            <Input
              name="atk"
              placeholder="Atk"
              required
              onChange={handleInputChange}
              defaultValue={pokemon.atk}
            />
            <Input
              name="def"
              placeholder="Def"
              required
              onChange={handleInputChange}
              defaultValue={pokemon.def}
            />
            <Input
              name="sta"
              placeholder="Sta"
              required
              onChange={handleInputChange}
              defaultValue={pokemon.sta}
            />
            <Button type="submit">Atualizar Pokemon</Button>
          </FormGroup>
        </DivContainer>
      </main>
    </>
  );
};

export default Edit;
