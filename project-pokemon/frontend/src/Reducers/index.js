import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import pokemon from './pokemon'

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    pokemon,
  });