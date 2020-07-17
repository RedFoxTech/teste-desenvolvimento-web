const { response } = require("express");
const Pokemon = require('../MODEL/pokemon-model.js');


module.exports = app =>{

    //lista
    app.get('/pokemons', (req, resp) => {
        Pokemon.lista(resp);
    });

    app.get('/pokemons/:id', (req, resp) =>{
        const id = parseInt(req.params.id);
        Pokemon.listaPorId(id, resp);
    })

    //altera
    app.put('/pokemons/:id', (req, resp) =>{
        const id = parseInt(req.params.id);
        const valores = req.body;

        Pokemon.altera(id, valores, resp);
    });

    //adiciona
    app.post('/pokemons', (req, resp) =>{ 
        const pokemon = req.body;
        Pokemon.adicionaPokemon(pokemon, resp);
    });

    //delete
    app.delete('/pokemons/:id', (req, resp) => {
        const id  = parseInt(req.params.id);
        Pokemon.deleta(id, resp);
    });


 
    app.get('/', (req, resp) => {
        resp.send('Main');
    });
};