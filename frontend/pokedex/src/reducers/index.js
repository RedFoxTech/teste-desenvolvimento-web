import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import pokemons from "./reducer"

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    pokemons
  });