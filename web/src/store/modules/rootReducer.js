import { combineReducers } from 'redux';

import pokemon from './pokemon/reducer';
import application from './application/reducer';

export default combineReducers({
  pokemon,
  application,
});
