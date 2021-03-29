import { Box, Grid } from "@material-ui/core";
import { useEffect, useState } from "react";

import ContainerComponent from "../../components/Container";

import API from "../../services/api";
import useTokenStore from "../../hooks/useTokenStore";
import GoBackDashBoardHeader from "../../components/GoBackDashBoardHeader";
import { useLocation } from "react-router-dom";
import CardViewPokemon from "../../components/CardViewPokemon";

function DashBoardViewPokemon() {
  const location = useLocation();
  const { getUserToken } = useTokenStore();
  const [ pokemon, setPokemon ] = useState([]);

  const pokemonId = location.state.id;
 
  const pokemonName = location.state.name;
  const token = getUserToken();

  useEffect(() => {
    (async () => {
      const { data } = await API.get(`/session/pokemon/${pokemonId}`, 
        { headers: { Authorization: `Bearer ${token}`}});
      const { pokemon } = data;
      setPokemon(pokemon);
    })()
  }, [])
  
  return (
    <>
      <GoBackDashBoardHeader/>
      <Box bgcolor="dark.main" minHeight="100vh" display="flex" flexDirection="column" justifyContent='center' alignItems='center'>    
        <ContainerComponent>
          <section className="maxWidthItem" style={{ paddingTop: '3rem'}}>
            <Grid container spacing={3}>
              {pokemon.length > 0 && (
                <Grid key={pokemon.pokemon_number} item xs={12}>
                  <Box>
                    <CardViewPokemon
                      data={pokemon}
                      name={pokemonName}
                    />
                  </Box>
                </Grid>
              )}
            </Grid>
          </section>
        </ContainerComponent>
      </Box>
    </>
  )
}

export default DashBoardViewPokemon;