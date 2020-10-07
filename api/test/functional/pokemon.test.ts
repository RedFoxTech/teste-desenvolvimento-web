import { Pokemon } from '@src/models/pokemon'

describe('Pokemon functional tests', () => {
  beforeEach(async () => {
    await Pokemon.deleteMany({})
  })

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

    const response = await global.testRequest.delete(`/pokemons/${pokemon._id}`)

    expect(response.status).toBe(200)
  })

  it('should return a validation error when a fild is missing', async () => {
    const defaultPokemon = {
      'Pokedex Number': 1
    }

    const response = await global.testRequest.post('/pokemons').send(defaultPokemon)

    expect(response.status).toBe(400)
    expect(response.body).toEqual({
      message: 'Pokemon validation failed: Name: Path `Name` is required.'
    })
  })

  it('should return a validation error when trying to delete a pokemon', async () => {
    const response = await global.testRequest.delete('/pokemons/invalid-id')

    expect(response.status).toBe(400)
    expect(response.body).toEqual({
      message: 'Cast to ObjectId failed for value "invalid-id" at path "_id" for model "Pokemon"'
    })
  })

  it('Should return 400 when the Pokemon Name already exists', async () => {
    const defaultPokemon = {
      Name: 'Pokemon'
    }
    await global.testRequest.post('/pokemons').send(defaultPokemon)
    const response = await global.testRequest.post('/pokemons').send(defaultPokemon)

    expect(response.status).toBe(400)
    expect(response.body).toEqual({
      message:
        'Pokemon validation failed: Name: already exists in the database.'
    })
  })
})
