'use strict'
const Pokedex = use('App/Models/Pokedex');

class PokedexController {
  async list ({ request }) {
    let { page } = request.get();
    const data = request.only(['type', 'name', 'number']);
    const pokemons = await Pokedex.query()
                            .where(function() {
                              this.where('name', 'like', `%${data.name ? data.name : '' }%`)
                              if(data.type)
                                this.andWhere('type1', data.type)
                              if(data.number)
                                this.andWhere('code', data.number)
                            }).paginate(page);

    return pokemons;
  }

}

module.exports = PokedexController
