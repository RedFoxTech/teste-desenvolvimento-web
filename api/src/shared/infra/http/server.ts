import dotenv from 'dotenv'
import express from 'express';
import cors from 'cors';

import { initConnection } from  '../typeorm';

import ImportPokemonsService from '../../../modules/pokemons/services/ImportPokemonsService';

import routes from './routes';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3333;

app.use(cors());

app.use(routes);

app.listen(async () => {
    await initConnection();

    const importPokemonService = new ImportPokemonsService();

    await importPokemonService.importFromXlsx("pokemon-go.xlsx");
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});