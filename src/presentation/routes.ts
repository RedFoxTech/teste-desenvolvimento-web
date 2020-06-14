import express, { Response, Request } from "express";
import dotenv from "dotenv";
import { PokemonController } from '../controller/PokemonController'

dotenv.config();

const cors = require("cors")

export const app = express();
app.use(cors());

app.use(express.json());

app.get("/PokemonGo", new PokemonController().getAllPokemons);
app.post(`/Pokemons/filter`, new PokemonController().pokemonFilter);
app.delete(`/Pokemons/deletePokemon`, new PokemonController().deletePokemon);
