import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { theme } from '../../global/theme';

export const Card = styled(Link)`
  display: block;
  background-color: ${theme.colors.white};
  text-align: center;
  border-radius: 5px;
  padding: 20px;
  margin-right: 10px;
  width: 100%;
  min-height: 250px;
`
interface IImg {
  url_img_pokemon: string
}

export const Img = styled.div<IImg>`
  background-image: url(${props => props.url_img_pokemon ? props.url_img_pokemon : 'https://extra.globo.com/incoming/19847910-7b9-f63/w488h275-PROP/pokemon.jpg'});
  height: 200px;
  background-size: cover;
  background-position: center;
`

export const UlInfo = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`

export const Name = styled.li`
  font-family: ${theme.fonts.text1};
  color: ${theme.colors.primary};
  font-weight: 500;
  font-size: 20px;
`

export const NumberPokedex = styled.li`
  font-family: ${theme.fonts.text1};
  color: ${theme.colors.primary};
  font-weight: 500;
  font-size: 20px;
`

export const UlAtribuites = styled.ul`
  display: flex;
  margin-top: 10px;
`

export const LiAtk = styled.li`
  font-family: ${theme.fonts.text1};
  color: ${theme.colors.primary};
  font-weight: 500;
  font-size: 15px;
  margin-right: 10px;
`
export const LiDef = styled.li`
  font-family: ${theme.fonts.text1};
  color: ${theme.colors.primary};
  font-weight: 500;
  font-size: 15px;
`

export const Type = styled.li`
  font-family: ${theme.fonts.text1};
  color: ${theme.colors.white};
  background-color: ${theme.colors.grass};
  font-weight: 500;
  font-size: 15px;
  margin-right: 10px;
  padding: 5px;
`