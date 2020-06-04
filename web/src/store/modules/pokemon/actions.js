export function showPokemonsRequest(searchInput, page) {
  return {
    type: '@pokemons/SHOW_ALL_REQUEST',
    payload: { searchInput, page },
  };
}

export function showPokemonsSuccess(data) {
  return {
    type: '@pokemons/SHOW_ALL_SUCCESS',
    payload: { data },
  };
}
