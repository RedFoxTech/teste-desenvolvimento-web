const { Router } = require("express");
const Pokemon = require("../models/Pokemon");

module.exports = {
  async index(req, res) {
    const pokemons = await Pokemon.find();
    return res.json(pokemons);
  },

  async destroy(req, res) {
    const { id } = req.params;
    const search = await Pokemon.where("id_pokemon", id);

    if (search != "") {
      await Pokemon.where("id_pokemon", id).remove();
      return res
        .status(200)
        .json({ Sucess: `Pokemon com o id:${id} foi removido com sucesso!` });
    } else {
      return res
        .status(400)

        .json({ Error: `Pokemon com o id:${id} não existe!` });
    }
  },

  async update(req, res) {
    const {
      id_pokemon,
      img_pokemon,
      name_pokemon,
      generation,
      evolution_stage,
      type_1,
      type_2,
      weather,
      ATK,
      DEF,
    } = req.body;

    let pokemon = await Pokemon.findOne({ id_pokemon });
    if (pokemon) {
      pokemon = await Pokemon.update({
        img_pokemon,
        name_pokemon,
        generation,
        evolution_stage,
        type_1,
        type_2,
        weather,
        ATK,
        DEF,
      });
      return res.status(200).json({
        Sucess: `Pokemon com o id:${id_pokemon} alterado com sucesso!`,
      });
    }
    return res
      .status(400)
      .json({ Error: `Pokemon com o id:${id_pokemon} não existe!` });
  },

  async store(req, res) {
    const {
      id_pokemon,
      img_pokemon,
      name_pokemon,
      generation,
      evolution_stage,
      type_1,
      type_2,
      weather,
      ATK,
      DEF,
    } = req.body;

    let pokemon = await Pokemon.findOne({ id_pokemon });
    if (!pokemon) {
      pokemon = await Pokemon.create({
        id_pokemon,
        img_pokemon,
        name_pokemon,
        generation,
        evolution_stage,
        type_1,
        type_2,
        weather,
        ATK,
        DEF,
      });
    }
    return res.json(pokemon);
  },
};
