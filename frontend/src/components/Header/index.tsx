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
  Nav,
  SearchForm,
  SearchInput,
  SearchButton,
  SearchIcon
} from './style';

import { CardNav } from '../CardNav';

import logo from '../../assets/logo.png';
import icon_button_search from '../../assets/icon-button-search.png';
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
                isPage={location.pathname == '/' ? true : false}
              />
              <CardNav
                to="/"
                img={icon_pikachu}
                title="adicionar"
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
            <SearchForm>
              <SearchInput
                placeholder="Pesquisar..."
              />
              <SearchButton>
                <SearchIcon
                  src={icon_button_search}
                  alt="button-search"
                />
              </SearchButton>
            </SearchForm>
          </Column>
        </Row>
      </Container>
    </HeaderDiv>
  )
}

export { Header }