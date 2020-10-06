import { Pokemon } from '@src/models/pokemon'

describe('Pokemon functional tests', () => {
  it('should return a list of pokemons', async () => {
    const response = await global.testRequest.get('/pokemons')

    expect(response.status).toBe(200)
  })

  it('should return success when trying to create a new pokemon', async () => {
    const defaultPokemon = {
      Name: 'Pokemon'
    }

    const response = await global.testRequest
      .post('/pokemons')
      .send(defaultPokemon)

    expect(response.status).toBe(201)
    expect(response.body).toEqual(expect.objectContaining(defaultPokemon))
  })

  it('should be able to delete a pokemon', async () => {
    const defaultPokemon = {
      Name: 'Pokemon'
    }

    const pokemon = await new Pokemon(defaultPokemon)
    console.log(pokemon._id)

    const response = await global.testRequest.delete(`/pokemons/${pokemon._id}`)

    expect(response.status).toBe(200)
  })
})
