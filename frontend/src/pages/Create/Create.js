import React, { useState } from 'react';
import swal from 'sweetalert';
import api from '../../services/api';

import { Header, DivContainer, FormGroup, Input, Button } from './Style';

const Create = () => {
  const [pokemon, setPokemon] = useState([]);

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setPokemon({ ...pokemon, [name]: value });
  };

  const handlePokemon = async (event) => {
    event.preventDefault();
    console.log(pokemon);
    await api
      .post('/pokemon', pokemon)
      .then((response) => {
        console.log(response.data);
        swal({
          icon: 'success',
          title: 'Sucesso!',
          text: 'Pokemon cadastrado com sucesso.',
        }).then(function () {
          window.location = '/';
        });
      })
      .catch((error) => {
        console.log(error);
        swal({
          icon: 'error',
          title: 'Erro!',
          text: 'Pokemon já cadastrado ou falha ao enviar cadastro.',
        });
      });
  };

  return (
    <>
      <main id="Create-page">
        <Header>
          <h1>Cadastre um novo Pokemon</h1>
        </Header>
        <DivContainer>
          <FormGroup onSubmit={handlePokemon}>
            <Input
              name="name"
              required
              placeholder="Name"
              onChange={handleInputChange}
            />
            <Input
              name="pokedex_number"
              required
              placeholder="Pokedex number"
              onChange={handleInputChange}
            />
            <Input
              name="generation"
              placeholder="Generation"
              onChange={handleInputChange}
              required
            />
            <Input
              name="evolution_stage"
              placeholder="Evolution stage"
              required
              onChange={handleInputChange}
            />
            <Input
              name="evolved"
              placeholder="Evolved"
              required
              onChange={handleInputChange}
            />
            <Input
              name="family_id"
              placeholder="Family id"
              required
              onChange={handleInputChange}
            />
            <Input
              name="type1"
              placeholder="Type1"
              required
              onChange={handleInputChange}
            />
            <Input
              name="type2"
              placeholder="Type2"
              required
              onChange={handleInputChange}
            />
            <Input
              name="weather1"
              placeholder="Weather1"
              required
              onChange={handleInputChange}
            />
            <Input
              name="weather2"
              placeholder="Weather2"
              required
              onChange={handleInputChange}
            />
            <Input
              name="stat_total"
              placeholder="Stat total"
              required
              onChange={handleInputChange}
            />
            <Input
              name="atk"
              placeholder="Atk"
              required
              onChange={handleInputChange}
            />
            <Input
              name="def"
              placeholder="Def"
              required
              onChange={handleInputChange}
            />
            <Input
              name="sta"
              placeholder="Sta"
              required
              onChange={handleInputChange}
            />
            <Button type="submit">Salvar Pokemon</Button>
          </FormGroup>
        </DivContainer>
      </main>
    </>
  );
};

export default Create;
