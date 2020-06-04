import React from 'react';
import { useDispatch } from 'react-redux';
import { DebounceInput } from 'react-debounce-input';
import { MdSearch, MdAddBox } from 'react-icons/md';
import history from '~/services/history';

import { setSearchInput } from '~/store/modules/application/actions';

import { Container, InputContainer, ButtonContainer } from './styles';

function OptionsBar() {
  const dispatch = useDispatch();

  function handleInputChange(event) {
    dispatch(setSearchInput(event.target.value));
  }

  return (
    <Container>
      <InputContainer>
        <DebounceInput
          type="text"
          debounceTimeout={600}
          placeholder="Procure por um pokemon..."
          onChange={handleInputChange}
        />
        <MdSearch size={30} color="#fff" />
      </InputContainer>

      <ButtonContainer onClick={() => history.push('new')}>
        <MdAddBox size={24} color="#fff" />
        <span>ADICIONAR</span>
      </ButtonContainer>
    </Container>
  );
}

export default OptionsBar;
