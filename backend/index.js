const customExpress = require('./config/custom-express');
const connection = require('./infra/connection');
const pokemons = require('./infra/dbPokemons');


connection.connect(error => {
    if(error){
        console.log(error)
    }else{
        console.log('conectado ao BD')
        pokemons.init(connection)
        

        const app = customExpress()
        app.listen(3000, () => console.log('SERVER ON'))
    }
})





