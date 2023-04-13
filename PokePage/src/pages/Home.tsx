import { Outlet } from 'react-router-dom'
import { Container } from '@mui/system'
import { Grid } from '@mui/material'
import { Header } from '../components/Header'
import PokeCard from '../components/PokeCard'
import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react'

export function Home() {
  const [pokemons, setPokemons] = useState<{ name: string }[]>([]);

  useEffect(() => {
    getPokemons()
  }, [])

  const getPokemons = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=6')
  .then((response) => setPokemons(response.data.results))
  .catch((error: AxiosError) => console.log(error));
  }

  return (
    <>
      <Header />
      <Container >
        <Grid container>
          {pokemons.map((pokemon) => (
            <Grid  item xs={3}>
              <PokeCard name={pokemon.name} key={pokemon.name} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Outlet />
    </>
  )
}
