import { Box, Grid, Typography } from "@material-ui/core";
import Pagination from '@material-ui/lab/Pagination'
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import CardPokemon from "../../components/CardPokemon";

import DashboardWrapper from "../../components/DashBoardWrapper";
import FilterPokemons from "../../components/FilterPokemons";
import { FilterPokemonsContext } from "../../contexts/FilterPokemonsContext";

import useTokenStore from "../../hooks/useTokenStore";
import API from "../../services/api";
import getPageValue from "../../utils/getMaterialUiPageValue";
import useStyles from "./styles";

function DashBoard() {
  const classes = useStyles();
  const { queries } = useContext(FilterPokemonsContext);

  const history = useHistory();
  const [ pokemons, setPokemons ] = useState([]);
  const [ pages, setPages ] = useState(0);
 
  const { getUserToken } = useTokenStore();
  const token = getUserToken();

  async function getPokemonsData(page, withPage = false) {
    const { data } = !withPage 
      ? await API.get(`/session/pokemons?${queries}`, { headers: { Authorization: `Bearer ${token}`}})
      : await API.get(`/session/pokemons?page=${page}&${queries}`, { headers: { Authorization: `Bearer ${token}`}});

    const { totalPages, pokemons } = data.pokemons;
   
    setPokemons(pokemons);
    setPages(totalPages);
  }

  async function handlePagination(event) {
    const page = getPageValue(event.target.getAttribute("aria-label"));
    await getPokemonsData(page, true);
  }

  async function handleDeletePokemon(id) {
    try {
      const response = await API.delete(`/session/drop/${id}`, { headers: { Authorization: `Bearer ${token}`}});
      await getPokemonsData();

      if (response.status === 200) {
        toast.success('Pokemon removido com sucesso!');
      }
    } catch (err) {
      console.log(err);
      toast.error('Houve um erro inesperado.');
    }
  }

  function handleUpdatePokemonImage(id, name) {
    history.push({
      pathname: '/updateimage',
      state: { id, name }
    });
  }

  function handleUpdatePokemon(id, name) {
    history.push({
      pathname: '/updatepokemon',
      state: { id, name }
    });
  }

  function handleViewPokemon(id, name) {
    history.push({
      pathname: '/viewpokemon',
      state: { id, name }
    });
  }

  useEffect(() => {
    (async () => {
      await getPokemonsData();
    })()
  }, [])

  useEffect(() => {
    (async () => {
      await getPokemonsData();
    })()
  }, [queries])


  return (
    <DashboardWrapper>
      <FilterPokemons />
      <section style={{ paddingTop: '3rem'}}>
        <Grid container spacing={3}>
          { pokemons.length > 0 ? (
            pokemons.map((pokemon, index) => (
              <Grid key={pokemon.pokemon_number} item xs={12} sm={6} md={4} lg={3}>
                <Box>
                  <CardPokemon 
                    name={pokemon.name}
                    image={`${process.env.REACT_APP_URL_API}/images/${pokemon.image_name}`}
                    handleDelete={async () => await handleDeletePokemon(pokemon.pokemon_number)}
                    handleUpdateImage={() => handleUpdatePokemonImage(pokemon.pokemon_number, pokemon.name)}
                    handleUpdatePokemon={() => handleUpdatePokemon(pokemon.pokemon_number, pokemon.name)}
                    handleViewPokemon={() => handleViewPokemon(pokemon.pokemon_number, pokemon.name)}
                  />
                </Box>
              </Grid>
            ))) : (
              <Box minHeight="100vh" display="flex" justifyContent="center" alignItems="center">
                <Typography className={classes.titleNotPoke} variant="h4" component="h2" color="secondary">
                  Ainda não há pokemons cadastrados.
                </Typography>
              </Box>
          )}
        </Grid>

        { pokemons.length > 0 && ( 
          <Pagination 
            count={pages}
            variant="outlined"
            color="primary"
            size="large" 
            hidePrevButton 
            hideNextButton
            className={classes.pagination}
            onChange={handlePagination}
          />
        )}
      </section>
    </DashboardWrapper>
  )
}

export default DashBoard;