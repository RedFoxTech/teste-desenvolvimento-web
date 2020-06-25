import express, { Request, Response } from "express";
import cors from 'cors';
import { RegisterPokemonEndpoint } from "./endpoints/registerPokemon";
import { DeletePokemonEndpoint } from "./endpoints/deletePokemon";
import { UpdatePokemonEndpoint } from "./endpoints/updatePokemon";
import { GetAllPokemonsEndpoint } from "./endpoints/getAllPokemons";


const app = express();
app.use(cors());
app.use(express.json());


// Pokemon
app.get("/", GetAllPokemonsEndpoint);
app.post("/register", RegisterPokemonEndpoint);
app.post("/updatePokemon/:id", UpdatePokemonEndpoint);
app.delete("/deletePokemon/:id", DeletePokemonEndpoint);



export default app;
