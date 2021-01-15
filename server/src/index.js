//Criando inicialização do servidor
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express ();
app.use(express.json());
app.use(routes);

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

//Conectando com o banco de dados
mongoose.connect('mongodb+srv://crimson:0iwdYxxQpr2H7ahE@cluster0.xkpwq.mongodb.net/pokedex?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

app.listen(3333);
//Recebendo mensagem de confirmação
console.log('Server running...');
