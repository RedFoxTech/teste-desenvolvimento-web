import React from 'react';
import { useDispatch } from 'react-redux';
import { DebounceInput } from 'react-debounce-input';
import { MdSearch, MdAddBox } from 'react-icons/md';
import { BsFilter } from 'react-icons/bs';
import history from '~/services/history';

import { setSearchInput } from '~/store/modules/application/actions';

import {
  Container,
  Left,
  InputContainer,
  FilterContainer,
  ButtonContainer,
} from './styles';

function OptionsBar() {
  const dispatch = useDispatch();

  function handleInputChange(event) {
    dispatch(setSearchInput(event.target.value));
  }

  return (
    <Container>
      <Left>
        <InputContainer>
          <DebounceInput
            type="text"
            debounceTimeout={600}
            placeholder="Procure por um pokemon..."
            onChange={handleInputChange}
          />
          <MdSearch size={30} color="#fff" />
        </InputContainer>

        <FilterContainer>
          <span>Filtro</span>
          <BsFilter size={24} color="#999" />
        </FilterContainer>
      </Left>

      <ButtonContainer onClick={() => history.push('new')}>
        <MdAddBox size={24} color="#fff" />
        <span>Adicionar</span>
      </ButtonContainer>
    </Container>
  );
}

export default OptionsBar;
