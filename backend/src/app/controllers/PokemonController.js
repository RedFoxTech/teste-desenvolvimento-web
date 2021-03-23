const Pokemon = require('../models/Pokemon');
// const File = require('../models/File');

class PokemonController {
  async show(req,res){
    const pokemons = await Pokemon.findAll()
    return res.json(pokemons)
  }

  async index(req,res){
    const {id} = req.params
    const pokemon = await Pokemon.findOne({
      where:{id: id}
    })

    return res.json(pokemon)
  }

  async store(req, res) {
    const { name, family_id, type, atk, def, sta, evolution_stage } = req.body
    let atkInt = parseInt(atk) 
    let defInt = parseInt(def) 
    let staInt = parseInt(sta) 
    console.log('entrou aqui')
    console.log(req.body)
    const sta_total = atkInt + defInt + staInt

    await Pokemon.create({
      name,
      family_id, 
      type,
      atk:atkInt,
      def:defInt,
      sta:staInt,
      evolution_stage,
      sta_total
    });
    return res.json({
      name,
      family_id, 
      type,
      atk,
      def,
      sta,
      evolution_stage,
      sta_total
    });
  }
}

module.exports = new PokemonController()