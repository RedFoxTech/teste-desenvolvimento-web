const { Router } = require("express");
const Pokemon = require("../models/Pokemon");

module.exports = {
  async index(req, res) {
    const { id_pokemon, name_pokemon, type_1 } = req.query;

    const pokemons = await Pokemon.find({
      id_pokemon: {
        $eq: id_pokemon,
      },
      name_pokemon: {
        $eq: name_pokemon,
      },
      type_1: {
        $eq: type_1,
      },
    });
    return res.json(pokemons);
  },
};
