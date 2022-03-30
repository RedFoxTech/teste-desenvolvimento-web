import { POKEMONS_PER_PAGE } from '../../utils/constants';
import Cards from '../cards/cards';
import Pagination from '@mui/material/Pagination';
import { Content } from "../../Pages/Home/style";

interface Pokemon {
  Name: string,
  Pokedex_Number: number,
  Type_1: string,
  Type_2: string,
  STAT_TOTAL: string,
  ATK: string,
  DEF: string,
  STA: string,
}

const pokemons = ({ pokemons, page, totalPages, handleClick }) => {
  const startIndex = (page - 1) * POKEMONS_PER_PAGE;
  const selectedPokemons = pokemons.slice(startIndex, startIndex + POKEMONS_PER_PAGE);
  return <>
    <Content>
      {
        selectedPokemons.map((pokemon: Pokemon) => (
          <Cards pokemon={pokemon} />
        ))
      }
    </Content>
    <Pagination count={totalPages} page={page} onChange={(event, page) => handleClick(page)} />
  </>
}


export default pokemons
