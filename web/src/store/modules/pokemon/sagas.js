import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { showPokemonsSuccess } from './actions';

import api from '~/services/api';

export function* setPokemons({ payload }) {
  try {
    const { searchInput, page } = payload;

    const response = yield call(api.get, 'pokemons');

    yield put(showPokemonsSuccess(response.data));
  } catch (err) {
    toast.error('Falha ao buscar os pokemons.');
  }
}

export default all([takeLatest('@pokemons/SHOW_ALL_REQUEST', setPokemons)]);
