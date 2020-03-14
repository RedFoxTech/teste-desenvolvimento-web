const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

// Conexão com mongoDB, através de um Cluster 

mongoose.connect('mongodb+srv://redfox:redfox@cluster0-pnzvf.mongodb.net/pokemons?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Middleware que analisa as requisições en Json

app.use(express.json());
app.use(routes);

// Porta na qual a aplicação podera ser acessada

app.listen(3333);