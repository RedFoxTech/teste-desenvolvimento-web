const pokemons = require('../models/pokemons')

module.exports = app => {
    
    app.get('/', (req, res) => {
        pokemons.list(res)
    });

    app.post('/createpokemon', (req, res) => {
        const pokemon = req.body

        pokemons.add(pokemon)
        res.send('CreatePokemon')
    })
    app.get('/pokemon/:id', (req, res) => {
        const id = req.params.id;
        pokemon.findById(id, (err, pokemon) => {
            res.set("Access-Control-Allow-Origin", "*");
            res.json(pokemon);
        })
    });

    app.patch('/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const values = req.body

        pokemons.updated(id, values, res)
    })


}


