import { 
  useEffect,
  useState
} from 'react';

import {
  useParams,
  useHistory
} from "react-router-dom";

import { 
  Container,
  Row,
  Column
} from '../../global/styles';

import {
  Main,
  SectionPokemons,
  ColumnSingle,
  ColumnSingleTwo,
  Img,
  Name,
  UlPokemon,
  LiPokemon,
  ColumnPokemon,
  Family,
  ButtonGoBack
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

function Single(){
  const { id } = useParams<any>();
  const history = useHistory();
  const [pokemon, setPokemon] = useState<any>(null);
  const [pokemonsFamily, setPokemonsFamily] = useState<any[]>([])
  useEffect(()=>{
    api.get(`/pokemons/${id}`).then(response => {
      setPokemon(response.data);
      api.get(`/pokemons?family_id=${response.data.family_id}`).then(result => {
        const row = [...Array( Math.ceil(result.data.length / 4) )];
        const pokemons = result.data.filter((pokemon: any) => pokemon.name !== response.data.name)
        const pokemonsRows = row.map((row, id) => pokemons.slice(id * 4, id * 4 + 4));
        setPokemonsFamily(pokemonsRows.map((row, id) => (
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
      })
    })
  }, [])
  return (
    <>
      <Header/>
      <Main>
        <SectionPokemons>
          <Container>
            <Row>
              <Column>
                <ButtonGoBack
                  onClick={()=>history.goBack()}
                />
              </Column>
            </Row>
          {
            pokemon &&
            <Row>
              <ColumnSingle>
                <Img
                  url_img_pokemon={pokemon.url_img_pokemon}
                />
              </ColumnSingle>
              <ColumnSingleTwo>
                <Name>
                  {pokemon.name}
                </Name>
                <UlPokemon>
                  <LiPokemon>
                    Pokédex Number: <span>{pokemon.pokedex_number}</span>
                  </LiPokemon>
                  <LiPokemon>
                    Image Name: <span>{pokemon.img_name}</span>
                  </LiPokemon>
                </UlPokemon>
                <UlPokemon>
                  <LiPokemon>
                    Generation: <span>{pokemon.generation}</span>
                  </LiPokemon>
                  <LiPokemon>
                    Evolution Stage: <span>{pokemon.evolution_stage}</span>
                  </LiPokemon>
                </UlPokemon>
                <UlPokemon>
                  <LiPokemon>
                    Evolved: <span>{pokemon.evolved}</span>
                  </LiPokemon>
                  <LiPokemon>
                    Family ID: <span>{pokemon.family_id}</span>
                  </LiPokemon>
                </UlPokemon>
                <UlPokemon>
                  <LiPokemon>
                    Cross Gen: <span>{pokemon.cross_gen}</span>
                  </LiPokemon>
                </UlPokemon>
                <UlPokemon>
                  <LiPokemon>
                    Type 1: <span>{pokemon.type_one}</span>
                  </LiPokemon>
                  <LiPokemon>
                    Type 2: <span>{pokemon.type_two}</span>
                  </LiPokemon>
                </UlPokemon>
                <UlPokemon>
                  <LiPokemon>
                    Weather 1: <span>{pokemon.weather_one}</span>
                  </LiPokemon>
                  <LiPokemon>
                    Weather 2: <span>{pokemon.weather_two}</span>
                  </LiPokemon>
                </UlPokemon>
                <UlPokemon>
                  <LiPokemon>
                    Stat Total: <span>{pokemon.stat_total}</span>
                  </LiPokemon>
                </UlPokemon>
                <UlPokemon>
                  <LiPokemon>
                    Atk: <span>{pokemon.atk}</span>
                  </LiPokemon>
                  <LiPokemon>
                    Def: <span>{pokemon.def}</span>
                  </LiPokemon>
                </UlPokemon>
                <UlPokemon>
                  <LiPokemon>
                    Sta: <span>{pokemon.sta}</span>
                  </LiPokemon>
                  <LiPokemon>
                    Legendary: <span>{pokemon.legendary}</span>
                  </LiPokemon>
                </UlPokemon>
                <UlPokemon>
                  <LiPokemon>
                    Aquireable: <span>{pokemon.aquireable}</span>
                  </LiPokemon>
                  <LiPokemon>
                    Spawns: <span>{pokemon.spawns}</span>
                  </LiPokemon>
                </UlPokemon>
                <UlPokemon>
                  <LiPokemon>
                    Regional: <span>{pokemon.regional}</span>
                  </LiPokemon>
                  <LiPokemon>
                    Raidable: <span>{pokemon.raidable}</span>
                  </LiPokemon>
                </UlPokemon>
                <UlPokemon>
                  <LiPokemon>
                    Hatchable: <span>{pokemon.hatchable}</span>
                  </LiPokemon>
                  <LiPokemon>
                    Shiny: <span>{pokemon.shiny}</span>
                  </LiPokemon>
                </UlPokemon>
                <UlPokemon>
                  <LiPokemon>
                    Nest: <span>{pokemon.nest}</span>
                  </LiPokemon>
                  <LiPokemon>
                    New: <span>{pokemon.is_new}</span>
                  </LiPokemon>
                </UlPokemon>
                <UlPokemon>
                  <LiPokemon>
                    Not Gettable: <span>{pokemon.not_gettable}</span>
                  </LiPokemon>
                  <LiPokemon>
                    Future Evolve: <span>{pokemon.future_evolve}</span>
                  </LiPokemon>
                </UlPokemon>
                <UlPokemon>
                  <LiPokemon>
                    100% CP @ 40: <span>{pokemon.cp_100_40}</span>
                  </LiPokemon>
                  <LiPokemon>
                    100% CP @ 39: <span>{pokemon.cp_100_39}</span>
                  </LiPokemon>
                </UlPokemon>
              </ColumnSingleTwo>
            </Row>
          }
          <Row>
            <Column>
              <Family>
                Pokémon Family
              </Family>
            </Column>
          </Row>
          {
            pokemonsFamily
          }
          </Container>
        </SectionPokemons>
      </Main>
      <Footer/>
    </>
  )
}

export { Single }