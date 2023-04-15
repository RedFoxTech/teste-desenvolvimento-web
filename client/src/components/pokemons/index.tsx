import * as Styled from "./styles";
import { Cards } from "./cards";
import { useState } from "react";
import { useApi } from "../../providers/api";
import { Pagination } from "../pagination";

export const Pokemons = () => {
  const { pokemonsData } = useApi();

  const [pageNumber, setPageNumber] = useState(0);

  const pokemonsPerPage = 6;
  const viewedPokemons = pageNumber * pokemonsPerPage;

  const displayPokemons = pokemonsData.slice(
    viewedPokemons,
    viewedPokemons + pokemonsPerPage
  );
  const pageCount = Math.ceil(pokemonsData.length / pokemonsPerPage);

  const switchPage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <Styled.Main>
        <Styled.PokemonSection>
          {displayPokemons
            ? displayPokemons.map((data, index) => (
                <Cards
                  key={index}
                  id={data._id}
                  name={data.name}
                  pokedexNumber={data.pokedexNumber}
                  type1={data.type1}
                  type2={data.type2}
                  weather1={data.weather1}
                  atk={data.atk}
                  def={data.def}
                  sta={data.sta}
                  statTotal={data.statTotal}
                />
              ))
            : null}
        </Styled.PokemonSection>

        <Styled.PaginationSection>
          <Pagination switchPage={switchPage} pageCount={pageCount} />
        </Styled.PaginationSection>
      </Styled.Main>
    </>
  );
};
