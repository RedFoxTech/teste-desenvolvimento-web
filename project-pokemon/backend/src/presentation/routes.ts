import express, { Request, Response } from "express";
import cors from "cors";
import { GetPokemonsEndPoint } from "./endpoints/getPokemons";
import { GetPokemonByIdEndPoint } from "./endpoints/getPokemonById";
import { QuantityOfPageEndPoint } from "./endpoints/quantityOfPage";
import { GetPokemonByNameEndPoint } from "./endpoints/getPokemonByName";

const app = express();

app.use(cors());
app.use(express.json()); 

app.post('/pokemons', GetPokemonsEndPoint)
app.get('/pages', QuantityOfPageEndPoint)
app.get('/pokemon/:id', GetPokemonByIdEndPoint)
app.get('/pokemons/:nameOfPokemon', GetPokemonByNameEndPoint)

export default app;
