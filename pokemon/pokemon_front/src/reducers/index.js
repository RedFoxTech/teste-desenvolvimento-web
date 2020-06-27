import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import pokemons from "./pokemons"


export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
      pokemons,
  });
