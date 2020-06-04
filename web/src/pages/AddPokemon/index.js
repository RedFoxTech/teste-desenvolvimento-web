import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import history from '~/services/history';

import schema from '~/validations/pokemon/pokemon';
import { newPokemonRequest } from '~/store/modules/pokemon/actions';

import { Container, ButtonContainer, FormContainer } from './styles';

function AddPokemon() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.pokemon);

  async function handleSubmit(data) {
    const { name, type_1, type_2 } = data;

    try {
      await schema.validate({ name, type_1, type_2 }, { abortEarly: true });
      dispatch(newPokemonRequest(String(name), String(type_1), String(type_2)));
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        toast.error('Campos inválidos!');
      }
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <ButtonContainer>
          <button type="button" onClick={() => history.goBack()}>
            VOLTAR
          </button>
          <button type="submit">{loading ? 'CARREGANDO' : 'ADICIONAR'}</button>
        </ButtonContainer>
        <FormContainer>
          <h1>Novo Pokemon</h1>
          <Input label="Nome" name="name" placeholder="Nome do Pokemon" />

          <Input label="Tipo 1" name="type_1" placeholder="Tipo primário" />

          <Input label="Tipo-2" name="type_2" placeholder="Tipo secundário" />
        </FormContainer>
      </Form>
    </Container>
  );
}

export default AddPokemon;
