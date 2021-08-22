import { useLocation } from 'react-router-dom';
import {
  Container,
  Row,
  Column
}from '../../global/styles';

import {
  HeaderDiv,
  LogoDiv,
  LogoImg,
  Nav
} from './style';

import { CardNav } from '../CardNav';

import logo from '../../assets/logo.png';
import icon_pokebola from '../../assets/icon-pokebola.png';
import icon_pikachu from '../../assets/icon-pikachu.png';

function Header(){
  const location = useLocation();
  return (
    <HeaderDiv>
      <Container>
        <Row>
          <Column>
            <Nav>
              <CardNav
                to="/"
                img={icon_pokebola}
                title="pokédex"
                isPage={location.pathname == '/' || location.pathname.includes('single') ? true : false}
              />
              <CardNav
                to="/add-pokemon"
                img={icon_pikachu}
                title="add"
                isPage={location.pathname == '/add-pokemon' ? true : false}
              />
            </Nav>
          </Column>
          <Column>
            <LogoDiv
              to="/"
            >
              <LogoImg
                src={logo}
              />
            </LogoDiv>
          </Column>
          <Column>
            
          </Column>
        </Row>
      </Container>
    </HeaderDiv>
  )
}

export { Header }