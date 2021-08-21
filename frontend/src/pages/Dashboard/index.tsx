import {
  useState,
  useEffect
}from 'react';

import { 
  Container,
  Row,
  Column
} from '../../global/styles';

import {
  Main,
  SectionPokemons,
  ColumnPokemon,
  CenterPokemon,
  ButtonLoadMorePokemons,
  SearchInput
}from './style';

import {
  Header
}from '../../components/Header';

import {
  Footer
}from '../../components/Footer';

import {
  CardPokemon
}from '../../components/CardPokemon';

import {
  api
} from '../../services/api';

import { 
  Ring 
} from 'react-spinners-css';

function Dashboard(){
  const [pokemonsRows, setPokemonsRows] = useState<any[]>([]);
  const [pokemons, setPokemons] = useState<any[]>([])
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMorePokemons, setHasMorePokemons] = useState(true);
  const [search, setSearch] = useState('');
  const [type, setType] = useState('');

  useEffect(()=>{ 
    load_pokemons(page, search, pokemons);
  },[])

  function load_pokemons(page: number, event: string, pokemons: any[]){
    setLoading(true);
    api.get(`/pokemons?page=${page}&search=${event}`).then(response => {
      const row = [...Array( Math.ceil((pokemons.length + response.data.length) / 4) )];
      const all_pokemons = [...pokemons, ...response.data ]
      const pokemonsRows = row.map( (row, id) => all_pokemons.slice(id * 4, id * 4 + 4));
      setPokemonsRows(pokemonsRows.map((row, id) => (
        <Row key={id}>    
          { row.map( (pokemon:any) => 
            <ColumnPokemon>
              <CardPokemon
                id={pokemon.id}
                url_img_pokemon={pokemon.url_img_pokemon}
                name={pokemon.name}
                pokedex_number={pokemon.pokedex_number}
                atk={pokemon.atk}
                def={pokemon.def}
                type_one={pokemon.type_one}
                type_two={pokemon.type_two}
              />
            </ColumnPokemon>
          )}
        </Row>))
      );
      setPokemons(pokemons.concat(response.data));
      setPage(page + 1);
      response.data.length === 0 ? setHasMorePokemons(false) : setHasMorePokemons(true);
      setLoading(false);
    })
  }

  function search_pokemon(event:string){
    setPage(1);
    setPokemons([])
    setPokemonsRows([])
    load_pokemons(1, event, []);
  }

  return(
    <>
      <Header/>
      <Main>
        <SectionPokemons>
          <Container>
            <Row>
              <ColumnPokemon>
                <SearchInput
                  placeholder="search pokémon..."
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value);
                    search_pokemon(event.target.value);
                  }}
                />
              </ColumnPokemon>
            </Row>
            {
              pokemonsRows
            }
            {
              hasMorePokemons &&
              <Row>
                <Column>
                  <CenterPokemon>
                    {
                      loading ?
                        <Ring color="#FFF" size={47}/>
                      :
                      <ButtonLoadMorePokemons
                        onClick={()=>load_pokemons(page, search, pokemons)}
                      >
                        Carregar mais
                      </ButtonLoadMorePokemons>
                    }
                  </CenterPokemon>
                </Column>
              </Row>
            }
          </Container>
        </SectionPokemons>
      </Main>
      <Footer/>
    </>
  )
}

export { Dashboard }