import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { theme } from '../../global/theme';

interface ICard{
  isPage: boolean
}

export const Card = styled(Link)<ICard>`
  background-color: ${props => props.isPage ? theme.colors.secondary : theme.colors.primary};
  text-align: center;
  width: 80px;
  height: 80px;
  border-radius: 5px;
  padding: 15px 10px;
  margin-right: 10px;
  transition: all 0.2s;
  &:hover{
    background-color: ${theme.colors.card_two};
  }
`
export const Img = styled.img`
  width: 30px;
  height: 30px;
`

export const Title = styled.h1`
  font-family: ${theme.fonts.text1};
  color: ${theme.colors.white};
  font-weight: 500;
  font-size: 12px;
`