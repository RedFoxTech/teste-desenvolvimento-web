// import { Request } from 'supertest'
// import app from '../../App'

import Pokemon from '../../models/Pokemon'

describe('Pokemon Controller Methods', () => {
  const createExample = {
    name: 'valid_name',
    pokedexNumber: 'valid_name',
    imgName: 'valid_imgName',
    generation: 'valid_generation',
    evolutionStage: 'valid_evolutionStage',
    evolved: true,
    familyId: 1,
    crossGen: true,
    type1: 'valid_type1',
    type2: 'valid_type2',
    weather1: 'valid_weather1',
    weather2: 'valid_weather2',
    statTotal: 1,
    atk: 1,
    def: 1,
    sta: 1,
    legendary: true,
    aquireable: 1,
    spawns: true,
    regional: true,
    raidable: 1,
    hatchable: 1,
    shiny: true,
    nest: true,
    new: true,
    notGettable: true,
    futureEvolve: true,
    cp_100_lvl40: 1,
    cp_100_lvl39: 1
  }

  it('should return an error if a required param is null', async () => {
    const newPokemon = await Pokemon.create(createExample)
    expect(newPokemon.id).toBeTruthy()
  })
})
