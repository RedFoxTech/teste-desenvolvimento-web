import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import history from '~/services/history';

import { Container, ButtonContainer, FormContainer } from './styles';

function AddPokemon() {
  function handleSubmit() {}

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <ButtonContainer>
          <div>
            <button type="button">VOLTAR</button>
            <button type="submit">ADICIONAR</button>
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
