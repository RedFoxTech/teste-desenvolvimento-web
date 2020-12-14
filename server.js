require("dotenv").config();
const cors = require('cors');

// inportando rotas
const PokemonRouter = require('./routes/PokemonRouter');

const path = require('path');
const express = require('express');

const app = express();

app.use(express.json());
app.use(cors());

// configurando rotas
app.use('/pokemons', PokemonRouter)

app.listen(process.env.HTTP_PORT);