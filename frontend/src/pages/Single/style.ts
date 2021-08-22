import styled from 'styled-components';
import { theme } from '../../global/theme';
import { 
  FaArrowLeft,
  FaTrash,
  FaEdit 
} from 'react-icons/fa';

export const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${theme.colors.card_two};
  padding: 100px 20px;
`

export const SectionPokemons = styled.section``

export const ColumnSingle = styled.div`
  flex: 1;
  margin: 20px;
`

export const ColumnSingleTwo = styled.div`
  flex: 1;
  margin: 20px;
  background-color: ${theme.colors.white};
  padding: 20px;
  border-radius: 5px;
`

interface IImg {
  url_img_pokemon: string
}

export const Img = styled.div<IImg>`
  background-image: url(${props => props.url_img_pokemon ? props.url_img_pokemon : 'https://extra.globo.com/incoming/19847910-7b9-f63/w488h275-PROP/pokemon.jpg'});
  background-size: cover;
  background-position: center;
  background-color: ${theme.colors.white};
  border-radius: 5px;
  // Small devices (landscape phones, 320px and up)
  @media (min-width: 320px) {
    height: 300px;
  }
  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) { 
    height: 300px;
  }
  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) { 
    height: 500px;
  }
  // X-Large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) { 
    height: 500px;
  }
  // XX-Large devices (larger desktops, 1400px and up)
  @media (min-width: 1400px) { 
    height: 500px;
  }
`

export const Name = styled.h1`
  font-family: ${theme.fonts.text1};
  color: ${theme.colors.primary};
  font-weight: 500;
  font-size: 30px;
  margin-bottom: 20px;
`

export const UlPokemon = styled.ul`
  display: flex;
  justify-content: space-between;
`

export const LiPokemon = styled.li`
  font-family: ${theme.fonts.text1};
  color: ${theme.colors.primary};
  font-weight: 500;
  font-size: 20px;
  margin-right: 10px;
  span{
    color: ${theme.colors.secondary}
  }
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

export const Family = styled.h1`
  font-family: ${theme.fonts.text1};
  color: ${theme.colors.white};
  font-weight: 500;
  font-size: 30px;
  margin: 20px 0;
`

export const ButtonGoBack = styled(FaArrowLeft)`
  font-size: 30px;
  color: ${theme.colors.white};
  cursor: pointer;
`

export const ButtonDelete = styled(FaTrash)`
  font-size: 30px;
  color: ${theme.colors.white};
  cursor: pointer;
  margin-left: 20px;
`

export const ButtonEdit = styled(FaEdit)`
  font-size: 30px;
  color: ${theme.colors.white};
  cursor: pointer;
  margin-left: 20px;
`