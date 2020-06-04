import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import api from '~/services/api';
import { Container } from './styles';
import Pokemon from './Pokemon';
import { setLength } from '~/store/modules/application/actions';

function PokemonsTable() {
  const [pokemons, setPokemons] = useState([]);
  const { page, searchInput } = useSelector((state) => state.application);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadPokemons() {
      const response = await api.get('pokemons', {
        params: {
          page,
          name: searchInput,
        },
      });

      setPokemons(response.data);
      dispatch(setLength(pokemons.length));
    }

    loadPokemons();
  }, [dispatch, page, pokemons.length, searchInput]);

  return (
    <Container>
      {pokemons.map((pokemon) => (
        <Pokemon key={pokemon.id} info={pokemon} />
      ))}
    </Container>
  );
}

export default PokemonsTable;
