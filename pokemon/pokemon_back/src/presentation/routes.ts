import express, { Request, Response } from "express";
import cors from 'cors';
import { RegisterPokemonEndpoint } from "./endpoints/registerPokemon";


const app = express();
app.use(cors());
app.use(express.json()); // Linha mágica (middleware)


// Pokemon
app.post("/register", RegisterPokemonEndpoint);

export default app;
