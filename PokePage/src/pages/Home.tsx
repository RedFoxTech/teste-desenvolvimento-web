import { Outlet } from 'react-router-dom'
import { Container } from '@mui/system'
import { Grid } from '@mui/material'
import { Header } from '../components/Header'
import PokeCard from '../components/PokeCard'
import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react'

export function Home() {
  interface Pokemon {
    data: any
    name: string;
    imageUrl: string;
  }
  
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    getPokemons()
  }, [])

  const getPokemons = () => {
    var endpoints = []
    for(var i = 1; i <= 9; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }
    axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
    .then((responses) => {
      const pokemonsData = responses.map((response) => {
        return {
          name: response.data.name,
          imageUrl: response.data.sprites.front_default,
          data: response.data,
        }
      })
      setPokemons(pokemonsData)
    })
    .catch((error: AxiosError) => console.log(error));
  }

  const pokeFilter = (name: string) => {
    var filteredPokemons = []

    if(name===""){
      getPokemons()
    }

    for(var i in pokemons) {
      if(pokemons[i].data.name.includes(name)) {
        filteredPokemons.push(pokemons[i])
      }
      else if(pokemons[i].data.types[0].type.name.includes(name)) {
        filteredPokemons.push(pokemons[i])
      }
      else if(pokemons[i].data.types[1] && pokemons[i].data.types[1].type.name.includes(name)) {
        filteredPokemons.push(pokemons[i])
      }
      else if(pokemons[i].data.id.toString().includes(name)) {
        filteredPokemons.push(pokemons[i])
      }
    }
    setPokemons(filteredPokemons)
  }

  return (
    <div>
      <Header pokeFilter={pokeFilter}/>
      <Container >
        <Grid container>
          {pokemons.map((pokemon, key) => (
            <Grid  item xs={12} sm={6} md={4} lg={3} key={key}>
              <PokeCard name={pokemon.data.name} imageUrl={pokemon.data.sprites.front_default} types={pokemon.data.types}/>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Outlet />
    </div>
  )
}
