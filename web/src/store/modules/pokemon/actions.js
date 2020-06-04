export function newPokemonRequest(name, type_1, type_2) {
  return {
    type: '@pokemon/NEW_REQUEST',
    payload: { name, type_1, type_2 },
  };
}

export function newPokemonSuccess(data) {
  return {
    type: '@pokemon/NEW_SUCCESS',
    payload: { data },
  };
}

export function updatePokemonRequest(id, name, type_1, type_2) {
  return {
    type: '@pokemon/UPDATE_REQUEST',
    payload: { id, name, type_1, type_2 },
  };
}

export function updatePokemonSuccess() {
  return {
    type: '@pokemon/UPDATE_SUCCESS',
  };
}

export function deletePokemonRequest(id) {
  return {
    type: '@pokemon/DELETE_REQUEST',
    payload: { id },
  };
}

export function deletePokemonSuccess() {
  return {
    type: '@pokemon/DELETE_SUCCESS',
  };
}
