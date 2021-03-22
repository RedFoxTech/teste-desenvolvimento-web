import firebaseDatabase from '../database/connection';

async function index(req, resp) {
    const PokemonsList = [];  

    await firebaseDatabase.ref(`/Pokemons`).once('value', ( pokemonsDatabase) => {    
        let pokemonRow = undefined;

        for( pokemonRow in pokemonsDatabase.val() ) {

            if(pokemonRow === "Row"){
                // Não fazer nada caso a condição seja verdadeira
            } else {
                // Pegando objeto conforme seu numero da linha/id no banco de dados
                const pokemonObj = pokemonsDatabase.val()[`${pokemonRow}`];
                PokemonsList.push(pokemonObj);
            }
        }
    })

    resp.send(PokemonsList);

}

async function updatePokemon(req, resp) {
    const { id } = req.params;
    const  pokemonUpdateInfos = req.body;

    await firebaseDatabase.ref(`/Pokemons/${id}`).update(pokemonUpdateInfos);

    resp.send({
        message: "Done",
    })
}

async function deletePokemon(req, resp) {
    const { id } = req.params;
    await firebaseDatabase.ref(`/Pokemons/${id}`).remove();

    resp.send({
        message: "Done"
    });
}

async function getPokemonData(req, resp) { 
    const { id } = req.params;
    
    firebaseDatabase.ref(`/Pokemons/${id}`).on('value', ( pokemonDatabase ) => {
        const pokemonObjectReturn = pokemonDatabase.val();
        
        if( pokemonObjectReturn === null ) return resp.sendStatus(404)
        resp.send(pokemonObjectReturn);
    })
}

async function createPokemon(req, resp) { 
    const { newPokemonObj } = req.body;

    await firebaseDatabase.ref(`/Pokemons/${newPokemonObj.Row}`).set(newPokemonObj);
    return resp.send({
        message:"Done!"
    })
   
    
}
export { 
    index,
    updatePokemon,
    deletePokemon,
    getPokemonData,
    createPokemon
}