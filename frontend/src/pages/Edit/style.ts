import styled from 'styled-components';
import { theme } from '../../global/theme';
import { 
  FaArrowLeft 
} from 'react-icons/fa';

export const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${theme.colors.card_two};
  padding: 100px 20px;
`

export const SectionPokemons = styled.section``

export const ButtonGoBack = styled(FaArrowLeft)`
  font-size: 30px;
  color: ${theme.colors.white};
  cursor: pointer;
`

export const Title = styled.h1`
  font-family: ${theme.fonts.text1};
  color: ${theme.colors.white};
  font-weight: 500;
  font-size: 30px;
  margin-bottom: 20px;
`

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

export const Form = styled.form``

export const Label = styled.label`
  font-family: ${theme.fonts.text1};
  color: ${theme.colors.white};
  font-weight: 500;
  font-size: 15px;
`

export const Input = styled.input`
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

export const Select = styled.select`
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

export const Option = styled.option``

export const Center = styled.div`
  display: flex;
  justify-content: center;
`

export const ButtonAdd = styled.button`
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