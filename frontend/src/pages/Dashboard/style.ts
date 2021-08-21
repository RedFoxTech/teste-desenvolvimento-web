import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { theme } from '../../global/theme';

export const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${theme.colors.card_two};
  padding: 100px 20px;
`

export const SectionPokemons = styled.section``

export const ColumnPokemon = styled.div`
  flex: 1;
  padding: 20px;
  // Small devices (landscape phones, 320px and up)
  @media (min-width: 320px) {
    max-width: 100%;
  }
  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) { 
    max-width: 100%;
  }
  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) { 
    max-width: calc(100% / 4);
  }
  // X-Large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) { 
    max-width: calc(100% / 4);
  }
  // XX-Large devices (larger desktops, 1400px and up)
  @media (min-width: 1400px) { 
    max-width: calc(100% / 4);
  }
`

export const CenterPokemon = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

export const ButtonLoadMorePokemons = styled.button`
  background-color: ${theme.colors.secondary};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-family: ${theme.fonts.text1};
  color: ${theme.colors.white};
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
`

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-right: 5px;
  border: solid 2px ${theme.colors.card_one};
  border-radius: 5px;
  font-family: ${theme.fonts.text1};
  color: ${theme.colors.card_one};
  font-weight: 500;
  font-size: 15px;
`

export const SearchSelect = styled.select`
  width: 100%;
  padding: 10px;
  margin-right: 5px;
  border: solid 2px ${theme.colors.card_one};
  border-radius: 5px;
  font-family: ${theme.fonts.text1};
  color: ${theme.colors.card_one};
  font-weight: 500;
  font-size: 15px;
`

export const SearchOption = styled.option``