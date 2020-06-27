import express, { Request, Response } from "express";
import cors from 'cors';
import { RegisterPokemonEndpoint } from "./endpoints/registerPokemon";
import { DeletePokemonEndpoint } from "./endpoints/deletePokemon";
import { UpdatePokemonEndpoint } from "./endpoints/updatePokemon";
import { GetAllPokemonsEndpoint } from "./endpoints/getAllPokemons";
import { GetPokemonsByNameOrPokedexIDEndpoint } from "./endpoints/getPokemonsByNameOrPokedexID";




const app = express();
app.use(cors());
app.use(express.json());


// Pokemon
app.get("/list", GetAllPokemonsEndpoint);
app.get("/search",GetPokemonsByNameOrPokedexIDEndpoint)
app.post("/register", RegisterPokemonEndpoint);
app.post("/updatePokemon/:id", UpdatePokemonEndpoint);
app.delete("/deletePokemon/:id", DeletePokemonEndpoint);




export default app;
