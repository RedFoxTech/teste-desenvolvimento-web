import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import history from '~/services/history';

import schema from '~/validations/pokemon/Add';
import { newPokemonRequest } from '~/store/modules/pokemon/actions';

import { Container, ButtonContainer, FormContainer } from './styles';

function AddPokemon() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.pokemon);

  async function handleSubmit(data) {
    const { name, type_1, type_2 } = data;

    schema.isValid({ name, type_1, type_2 }).then((valid) => {
      if (valid) {
        dispatch(
          newPokemonRequest(String(name), String(type_1), String(type_2))
        );
      } else {
        toast.error('Dados inválidos!');
      }
    });
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <ButtonContainer>
          <div>
            <button type="button" onClick={() => history.goBack()}>
              VOLTAR
            </button>
            <button type="submit" onClick={handleSubmit}>
              {loading ? 'CARREGANDO' : 'ADICIONAR'}
            </button>
          </div>
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
