import { useApi } from "../../../providers/api";
import { IPokemonsProps } from "./interfaces";
import * as Styled from "./styles";
import * as BsIcons from "react-icons/bs";

export const Cards = ({
  id,
  name,
  pokedexNumber,
  type1,
  type2,
  weather1,
  atk,
  def,
  sta,
  statTotal,
}: IPokemonsProps) => {
  const { pokemonsData } = useApi();

  return (
    <>
      <Styled.CardSection>
        <Styled.TitleSection>
          <Styled.NameBox>{name}</Styled.NameBox>
          <Styled.ExcludeBox>
            <BsIcons.BsTrash3Fill />
          </Styled.ExcludeBox>
        </Styled.TitleSection>
        <Styled.ContentSection>
          <ul>
            <li>Number: {pokedexNumber}</li>
            <li>Type1: {type1}</li>
            <li>Type2: {type2}</li>
            <li>Weather1: {weather1}</li>
            <li>ATK: {atk}</li>
            <li>DEF: {def}</li>
            <li>STA: {sta}</li>
            <li>Stat Total: {statTotal}</li>
          </ul>
        </Styled.ContentSection>
      </Styled.CardSection>
    </>
  );
};
