import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { theme } from '../../global/theme';

export const HeaderDiv = styled.header`
  background-color: ${theme.colors.white};
  padding: 10px 20px;
`

export const LogoDiv = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LogoImg = styled.img`
  width: 150px;
  height: auto;
`

export const Nav = styled.nav`
  display: flex;
`

export const SearchForm = styled.form`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const SearchInput = styled.input`
  padding: 15px 20px;
  margin-right: 5px;
  border: solid 2px ${theme.colors.card_one};
  border-radius: 5px;
  font-family: ${theme.fonts.text1};
  color: ${theme.colors.card_one};
  font-weight: 500;
  font-size: 15px;
`

export const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
`

export const SearchIcon = styled.img`
  width: 40px;
  height: 40px;
`