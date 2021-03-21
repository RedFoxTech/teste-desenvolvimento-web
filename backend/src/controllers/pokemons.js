import firebaseDatabase from '../database/connection';

async function updatePokemon(req, resp) {
    const { id } = req.params;
    const  pokemonUpdateInfos = req.body;

    await firebaseDatabase.ref(`/Pokemons/${id}`).update(pokemonUpdateInfos);

    resp.send({
        message: "Done",
    })
}

export { 
    updatePokemon
}