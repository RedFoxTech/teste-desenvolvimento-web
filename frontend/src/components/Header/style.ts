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
  width: 120px;
  height: auto;
`

export const Nav = styled.nav`
  display: flex;
`