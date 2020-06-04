import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import {
  newPokemonSuccess,
  updatePokemonSuccess,
  deletePokemonSuccess,
} from './actions';

import api from '~/services/api';

export function* addPokemon({ payload }) {
  try {
    const { name, type_1, type_2 } = payload;

    const response = yield call(api.post, '/pokemons', {
      name,
      type_1,
      type_2,
    });

    yield put(newPokemonSuccess(response.data));
    history.push('/');
    toast.success('Pokemon cadastrado!');
  } catch (err) {
    toast.error('Falha ao adicionar pokemon!');
  }
}

export function* updatePokemon({ payload }) {
  try {
    const { id, name, type_1, type_2 } = payload;

    yield call(api.put, `/pokemons/${id}`, {
      name,
      type_1,
      type_2,
    });

    yield put(updatePokemonSuccess());
    history.push('/');
    toast.success('Pokemon atualizado!');
  } catch (err) {
    toast.error('Falha ao atualizar pokemon!');
  }
}

export function* deletePokemon({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `/pokemons/${id}`);

    yield put(deletePokemonSuccess());
    history.push('/');
    toast.success('Pokemon deletado!');
  } catch (err) {
    toast.error('Falha ao deletar pokemon!');
  }
}

export default all([
  takeLatest('@pokemon/NEW_REQUEST', addPokemon),
  takeLatest('@pokemon/UPDATE_REQUEST', updatePokemon),
  takeLatest('@pokemon/DELETE_REQUEST', deletePokemon),
]);
