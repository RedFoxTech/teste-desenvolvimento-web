import { all } from 'redux-saga/effects';

import pokemon from './pokemon/sagas';

export default function* rootSaga() {
  return yield all([pokemon]);
}
