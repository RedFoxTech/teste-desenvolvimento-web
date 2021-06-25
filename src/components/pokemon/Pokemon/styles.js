import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 540px;
  background-color: ${({ theme }) => {
    return theme.colors.white;
  }};
  border-radius: ${({ theme }) => {
    return theme.border;
  }};
  color: ${({ theme }) => {
    return theme.colors.black;
  }};
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  background-color: ${({ theme }) => {
    return theme.colors.gray1;
  }};
  border-top-left-radius: ${({ theme }) => {
    return theme.border;
  }};
  border-top-right-radius: ${({ theme }) => {
    return theme.border;
  }};
`;

export const Title = styled.h2`
  color: ${({ theme }) => {
    return theme.colors.black;
  }};
  font-family: 'Roboto', sans-serif;
  font-size: ${({ theme }) => {
    return theme.font.normal;
  }};
  margin: 0;
  padding: 0;
`;

export const Id = styled.div`
  width: 60px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => {
    return theme.colors.gray2;
  }};
  border-top-left-radius: ${({ theme }) => {
    return theme.border;
  }};
  font-family: 'Roboto', sans-serif;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 360px;
  height: 60px;
  margin-bottom: 20px;
  background-color: #bdc3c7;
  border-radius: ${({ theme }) => {
    return theme.border;
  }};
  font-size: ${({ theme }) => {
    return theme.font.normal;
  }};
`;

export const Generation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px;

  h2 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: ${({ theme }) => {
      return theme.font.normal;
    }};
    border-top-left-radius: ${({ theme }) => {
      return theme.border;
    }};
    background-color: #4badc2;
    width: 100%;
    height: 30px;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding: 0;
    text-align: center;
    border: 1px solid #4badc2;
    border-bottom-left-radius: ${({ theme }) => {
      return theme.border;
    }};
  }
`;

export const Lendary = styled(Generation)`
  h2 {
    background-color: #c29a4b;
    border-radius: 0;
    border-top-right-radius: ${({ theme }) => {
      return theme.border;
    }};
  }
  p {
    border: 1px solid #c29a4b;
    border-radius: 0;
    border-bottom-right-radius: ${({ theme }) => {
      return theme.border;
    }};
  }
`;

export const Habitat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;

  h2 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: ${({ theme }) => {
      return theme.font.normal;
    }};
    border-top-left-radius: ${({ theme }) => {
      return theme.border;
    }};
    background-color: #54c24b;
    width: 100%;
    height: 30px;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding: 0;
    text-align: center;
    border: 1px solid #54c24b;
    border-bottom-left-radius: ${({ theme }) => {
      return theme.border;
    }};
  }
`;

export const Type1 = styled(Habitat)`
  h2 {
    background-color: ${({ theme, type1 }) => {
      return theme.typeColors[type1];
    }};
    border-radius: 0;
  }
  p {
    border: 1px solid
      ${({ theme, type1 }) => {
        return theme.typeColors[type1];
      }};
    border-radius: 0;
  }
`;
export const Type2 = styled(Habitat)`
  h2 {
    background-color: ${({ theme, type2 }) => {
      return theme.typeColors[type2];
    }};
    border-radius: 0;
    border-top-right-radius: ${({ theme }) => {
      return theme.border;
    }};
  }
  p {
    border: 1px solid
      ${({ theme, type2 }) => {
        return theme.typeColors[type2];
      }};
    border-radius: 0;
    border-bottom-right-radius: ${({ theme }) => {
      return theme.border;
    }};
  }
`;

export const HP = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;

  h2 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: ${({ theme }) => {
      return theme.font.normal;
    }};
    border-top-left-radius: ${({ theme }) => {
      return theme.border;
    }};
    background-color: #54c24b;
    width: 100%;
    height: 30px;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding: 0;
    text-align: center;
    border: 1px solid #54c24b;
    border-bottom-left-radius: ${({ theme }) => {
      return theme.border;
    }};
  }
`;

export const ATK = styled(HP)`
  h2 {
    background-color: #c2674b;
    border-radius: 0;
  }
  p {
    border: 1px solid #c2674b;
    border-radius: 0;
  }
`;
export const DEF = styled(HP)`
  h2 {
    background-color: #4b90c2;
    border-radius: 0;
  }
  p {
    border: 1px solid #4b90c2;
    border-radius: 0;
  }
`;
export const TOTAL = styled(HP)`
  h2 {
    background-color: #c2a84b;
    border-radius: 0;
    border-top-right-radius: ${({ theme }) => {
      return theme.border;
    }};
  }
  p {
    border: 1px solid #c2a84b;
    border-radius: 0;
    border-bottom-right-radius: ${({ theme }) => {
      return theme.border;
    }};
  }
`;

export const BackButton = styled(Link)`
  width: 400px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  background-color: ${({ theme }) => {
    return theme.colors.btnOrange;
  }};
  font-family: 'Anton', monospace;
  font-size: ${({ theme }) => {
    return theme.font.normal;
  }};
  color: ${({ theme }) => {
    return theme.colors.white;
  }};
  border: none;
  border-radius: ${({ theme }) => {
    return theme.border;
  }};
  text-decoration: none;
  cursor: pointer;
  transition: transform 100ms ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

export const PokemonImage = styled.img`
  width: 250px;
`;
