import { Outlet } from 'react-router-dom'
import { Container } from '@mui/system'
import { Grid } from '@mui/material'
import { Header } from '../components/Header'
import PokeCard from '../components/PokeCard'

export function Home() {
  return (
    <>
      <Header />
      <Container >
        <Grid container>
          <Grid  item xs={3}>
            <PokeCard />
          </Grid>
          <Grid  item xs={3}>
            <PokeCard />
          </Grid>
          <Grid  item xs={3}>
            <PokeCard />
          </Grid>
          <Grid  item xs={3}>
            <PokeCard />
          </Grid>
        </Grid>
      </Container>

      <Outlet />
    </>
  )
}
