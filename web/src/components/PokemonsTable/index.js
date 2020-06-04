import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import api from '~/services/api';
import { Container } from './styles';
import Pokemon from './Pokemon';
import { setLength } from '~/store/modules/application/actions';
import PokemonSkeleton from './PokemonSkeleton';

function PokemonsTable() {
  const [pokemons, setPokemons] = useState([]);
  const { page, searchInput } = useSelector((state) => state.application);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadPokemons() {
      setLoading(true);
      try {
        const response = await api.get('pokemons', {
          params: {
            page,
            name: searchInput,
          },
        });
        setPokemons(response.data);
        setLoading(false);
        dispatch(setLength(pokemons.length));
      } catch (err) {
        toast.error('Erro com o servidor.');
      }
    }

    loadPokemons();
  }, [dispatch, page, pokemons.length, searchInput, setLoading]);

  return (
    <>
      {loading ? (
        <PokemonSkeleton />
      ) : (
        <Container>
          {pokemons.map((pokemon) => (
            <Pokemon key={pokemon.id} info={pokemon} />
          ))}
        </Container>
      )}
    </>
  );
}

export default PokemonsTable;
