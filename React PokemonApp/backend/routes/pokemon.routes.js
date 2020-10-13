module.exports = app => {
    const pokemons = require("../controllers/pokemon.controller");

    var router = require("express").Router();

    //Cria um novo Pokemon

    router.post("/", pokemons.create);

    // Entrega todos os pokemons 

    router.get("/", pokemons.findAll);

    //Entrega todos os pokemons que foram cadastrados

    router.get("/cacados", pokemons.findAllPublished);

    //Entrega o único pokemon de id

    router.get("/:id", pokemons.findOne);

    //Atualiza a Pokemon com id

    router.put("/:id", pokemons.update);

    // Deletar o Pokemon com id 

    router.delete("/:id", pokemons.delete);

    // Deletar todo os pokemons 

    router.delete("/", pokemons.deleteAll);
    app.use('/api/pokemons', router);
};