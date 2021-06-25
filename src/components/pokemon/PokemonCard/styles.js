import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  transition: transform 100ms ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 300px;
  margin: 25px 15px;
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
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
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
  background-color: ${({ theme }) => {
    return theme.colors.gray2;
  }};
  border-top-left-radius: ${({ theme }) => {
    return theme.border;
  }};
  font-family: 'Roboto', sans-serif;
`;

export const Type = styled.div`
  width: 60px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${({ theme, type }) => {
    return theme.typeColors[type];
  }};
  border-top-right-radius: ${({ theme }) => {
    return theme.border;
  }};
  font-family: 'Roboto', sans-serif;
`;

export const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
`;
