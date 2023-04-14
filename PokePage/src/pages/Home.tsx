import { Outlet } from 'react-router-dom'
import { Container } from '@mui/system'
import { Grid } from '@mui/material'
import { Header } from '../components/Header'
import { PokeCard } from '../components/PokeCard'
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
  }


  const pokeFilter = (name: string) => {
    var filteredPokemons = []

    if (name === "") {
      getPokemons()
    }

    for (var i in pokemons) {
      if (pokemons[i].data.name.includes(name)) {
        filteredPokemons.push(pokemons[i])
      }
      else if (pokemons[i].data.types[0].type.name.includes(name)) {
        filteredPokemons.push(pokemons[i])
      }
      else if (pokemons[i].data.types[1] && pokemons[i].data.types[1].type.name.includes(name)) {
        filteredPokemons.push(pokemons[i])
      }
      else if (pokemons[i].data.id.toString().includes(name)) {
        filteredPokemons.push(pokemons[i])
      }
    }
    setPokemons(filteredPokemons)
  }

  return (
    <div>
      <Header pokeFilter={pokeFilter} />
      <Container >
        <Grid container>
          {pokemons && pokemons.map((pokemon, key) => (

            <Grid item xs={12} sm={6} md={4} lg={3} key={key}>
              <PokeCard name={pokemon?.name} imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon?.imageUrl}.png`} types={[pokemon.data.Type1, pokemon.data.Type2]} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Outlet />
    </div >
  )
}
