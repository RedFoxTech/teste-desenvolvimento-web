const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

// Conexão com mongoDB, através de um Cluster 

mongoose.connect('mongodb+srv://redfox:redfox@cluster0-pnzvf.mongodb.net/pokemons?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(error => handleError(error));

// Middleware que analisa as requisições en Json
app.use(cors('http://localhost:3000'));
app.use(express.json());
app.use(routes);

// Porta na qual a aplicação poderá ser acessada

app.listen(process.env.PORT || 3333);