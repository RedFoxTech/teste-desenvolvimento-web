import { Outlet } from 'react-router-dom'
import { Container } from '@mui/system'
import { Grid } from '@mui/material'
import { Header } from '../components/Header'
import { PokeCard } from '../components/PokeCard'
import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react'

export function Home() {
  interface Pokemon {
    PokedexNumber: number;
    data: any;
    name: string;
    imageUrl: string;
  }

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    getPokemons()
  }, [])

  const getPokemons = async () => {
    const result = await axios.get('http://localhost:8090/pokemon');
    let pokemons = result.data;

    pokemons = pokemons.map((pokemon: any) => {
      const { Name, ImgName, ...otherInfo } = pokemon;
      const pokemonParsed = {
        data: otherInfo,
        name: Name,
        imageUrl: ImgName,
      }
      console.log('i', pokemonParsed);
      return pokemonParsed;
    })

    console.log(pokemons);
    setPokemons(pokemons);
    setFilteredPokemons(pokemons);
  }

  const pokeFilter = (name: string) => {
    var filteredPokemons = []

    if (name === "") {
      setFilteredPokemons(pokemons);
    } else {
      for (var i in pokemons) {
        if (pokemons[i].name.toLocaleLowerCase().includes(name.toLocaleLowerCase())) {
          filteredPokemons.push(pokemons[i])
        }
        else if(pokemons[i].data.PokedexNumber.toString().includes(name)){
          filteredPokemons.push(pokemons[i])
        }
        else if(pokemons[i].data.Type1.toLocaleLowerCase().includes(name.toLocaleLowerCase())){
          filteredPokemons.push(pokemons[i])
        }
        else if(pokemons[i].data.Type2.toLocaleLowerCase().includes(name.toLocaleLowerCase())){
          filteredPokemons.push(pokemons[i])
        }
      }
      setFilteredPokemons(filteredPokemons);
    }
  }

  return (
    <div>
      <Header pokeFilter={pokeFilter} />
      <Container >
        <Grid container>
          {filteredPokemons && filteredPokemons.map((pokemon, key) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={key}>
              <PokeCard name={pokemon?.name} imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon?.imageUrl}.png`} pokeNumber={pokemon?.data.PokedexNumber}/>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Outlet />
    </div >
  )
}
