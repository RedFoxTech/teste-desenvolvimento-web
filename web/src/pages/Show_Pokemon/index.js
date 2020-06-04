import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import history from '~/services/history';

import {
  updatePokemonRequest,
  deletePokemonRequest,
} from '~/store/modules/pokemon/actions';

import { Container, ButtonContainer, FormContainer } from './styles';
import api from '~/services/api';

function Show_Pokemon() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.pokemon);
  const { pokemon_id } = useSelector((state) => state.application);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function loadPokemon() {
      const response = await api.get(`/pokemons/${pokemon_id}`);

      setPokemon(response.data);
    }
    loadPokemon();
  }, [pokemon_id]);

  async function handleSubmit(data) {
    const { name, type_1, type_2 } = data;

    dispatch(
      updatePokemonRequest(
        String(pokemon_id),
        String(name),
        String(type_1),
        String(type_2)
      )
    );
  }

  async function handleDelete() {
    dispatch(deletePokemonRequest(String(pokemon_id)));
  }

  return (
    <Container>
      <Form initialData={pokemon} onSubmit={handleSubmit}>
        <ButtonContainer>
          <button type="button" onClick={() => history.goBack()}>
            VOLTAR
          </button>
          <button type="submit" onClick={handleSubmit}>
            {loading ? 'CARREGANDO' : 'ATUALIZAR'}
          </button>
          <button type="button" onClick={handleDelete}>
            DELETAR
          </button>
        </ButtonContainer>
        <FormContainer>
          <h1>{pokemon.name}</h1>
          <Input label="Nome" name="name" />

          <Input label="Tipo 1" name="type_1" />

          <Input label="Tipo-2" name="type_2" />
        </FormContainer>
      </Form>
    </Container>
  );
}

export default Show_Pokemon;
