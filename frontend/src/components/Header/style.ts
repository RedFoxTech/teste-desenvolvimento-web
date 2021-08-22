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
  // Small devices (landscape phones, 320px and up)
  @media (min-width: 320px) {
    justify-content: center;
    margin-bottom: 20px;
  }
  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) { 
    justify-content: center;
    margin-bottom: 20px;
  }
  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) { 
    justify-content: flex-start;
    margin-bottom: 0px;
  }
  // X-Large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) { 
    justify-content: flex-start;
    margin-bottom: 0px;
  }
  // XX-Large devices (larger desktops, 1400px and up)
  @media (min-width: 1400px) { 
    justify-content: flex-start;
    margin-bottom: 0px;
  }
`