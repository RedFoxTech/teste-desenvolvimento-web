import supertest, * as request from 'supertest'
import app from '../../App'
import Pokemons from '../../models/Pokemon'
import { resolve } from 'path'
import { deleteImage } from '../helpers'

beforeEach(async () => {
  await Pokemons.destroy({ truncate: true, force: true })
})

const testImage = resolve(__dirname, '..', '..', '..', 'temp', 'uploads', 'test_image.jpg')
const createExample = {
  name: 'valid_name',
  pokedexNumber: 'valid_number',
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

describe('Pokemon Add Methods', () => {
  it('should return an error if name is undefined', async () => {
    const response = await request.agent(app)
      .post('/pokemons')
      .field('pokedexNumber', createExample.pokedexNumber)
    expect(response.status).toBe(400)
    expect(response.body).toEqual({ message: 'O atributo name não foi enviado' })
  })

  it('should return an error if a required param is null', async () => {
    const response = await request.agent(app)
      .post('/pokemons')
      .field('name', createExample.name)
      .field('pokedexNumber', createExample.pokedexNumber)
    expect(response.status).toBe(400)
  })

  it('should create a Pokemon on database', async () => {
    const response:supertest.Response = await request.agent(app)
      .post('/pokemons')
      .set('Content-Type', 'multipart/form-data')
      .attach('img', testImage)
      .field('pokedexNumber', createExample.pokedexNumber)
      .field('name', createExample.name)
      .field('generation', createExample.generation)
      .field('evolutionStage', createExample.evolutionStage)
      .field('evolved', createExample.evolved)
      .field('familyId', createExample.familyId)
      .field('crossGen', createExample.crossGen)
      .field('type1', createExample.type1)
      .field('type2', createExample.type2)
      .field('weather1', createExample.weather1)
      .field('weather2', createExample.weather2)
      .field('atk', createExample.atk)
      .field('def', createExample.def)
      .field('sta', createExample.sta)
      .field('legendary', createExample.legendary)
      .field('aquireable', createExample.aquireable)
      .field('spawns', createExample.spawns)
      .field('regional', createExample.regional)
      .field('raidable', createExample.raidable)
      .field('hatchable', createExample.hatchable)
      .field('shiny', createExample.shiny)
      .field('nest', createExample.nest)
      .field('new', createExample.new)
      .field('notGettable', createExample.notGettable)
      .field('futureEvolve', createExample.futureEvolve)
      .field('cp_100_lvl40', createExample.cp_100_lvl40)
      .field('cp_100_lvl39', createExample.cp_100_lvl39)
    expect(response.status).toBe(200)
    deleteImage(response.body.imgName)
  })
})

describe('Pokemon get methods', () => {
  beforeEach(async () => {
    const response:supertest.Response = await request.agent(app)
      .post('/pokemons')
      .set('Content-Type', 'multipart/form-data')
      .attach('img', testImage)
      .field('pokedexNumber', createExample.pokedexNumber)
      .field('name', createExample.name)
      .field('generation', createExample.generation)
      .field('evolutionStage', createExample.evolutionStage)
      .field('evolved', createExample.evolved)
      .field('familyId', createExample.familyId)
      .field('crossGen', createExample.crossGen)
      .field('type1', createExample.type1)
      .field('type2', createExample.type2)
      .field('weather1', createExample.weather1)
      .field('weather2', createExample.weather2)
      .field('atk', createExample.atk)
      .field('def', createExample.def)
      .field('sta', createExample.sta)
      .field('legendary', createExample.legendary)
      .field('aquireable', createExample.aquireable)
      .field('spawns', createExample.spawns)
      .field('regional', createExample.regional)
      .field('raidable', createExample.raidable)
      .field('hatchable', createExample.hatchable)
      .field('shiny', createExample.shiny)
      .field('nest', createExample.nest)
      .field('new', createExample.new)
      .field('notGettable', createExample.notGettable)
      .field('futureEvolve', createExample.futureEvolve)
      .field('cp_100_lvl40', createExample.cp_100_lvl40)
      .field('cp_100_lvl39', createExample.cp_100_lvl39)
    deleteImage(response.body.imgName)
  })

  it('should return all Pokemons', async () => {
    const response = await request.agent(app)
      .get('/pokemons')
      .send()
    expect(response.status).toBe(200)
    expect(response.body[0].name).toBeTruthy()
  })

  it('should return a Pokemon by name', async () => {
    const response = await request.agent(app)
      .get(`/pokemons?name=${createExample.name}`)
      .send()
    expect(response.status).toBe(200)
    expect(response.body.id).toBeTruthy()
    expect(response.body.name).toEqual(createExample.name)
  })

  it('should return a Pokemon by pokedexNumber', async () => {
    const response = await request.agent(app)
      .get(`/pokemons?pokedex_number=${createExample.pokedexNumber}`)
      .send()
    expect(response.status).toBe(200)
    expect(response.body.pokedexNumber).toEqual(createExample.pokedexNumber)
    expect(response.body.id).toBeTruthy()
  })

  it('should return a Pokemon Array by pokemonType2', async () => {
    const response = await request.agent(app)
      .get(`/pokemons?type1=${createExample.type1}`)
      .send()
    expect(response.status).toBe(200)
    expect(response.body.pokedexNumber).not.toBe(null)
  })

  it('should return a Pokemon Array by pokemonType2', async () => {
    const response = await request.agent(app)
      .get(`/pokemons?type1=${createExample.type1}`)
      .send()
    expect(response.status).toBe(200)
    expect(response.body.pokedexNumber).not.toBe(null)
  })
})

describe('Pokemon update methods', () => {
  it('should update the params', async () => {
    const response:supertest.Response = await request.agent(app)
      .post('/pokemons')
      .set('Content-Type', 'multipart/form-data')
      .attach('img', testImage)
      .field('pokedexNumber', createExample.pokedexNumber)
      .field('name', createExample.name)
      .field('generation', createExample.generation)
      .field('evolutionStage', createExample.evolutionStage)
      .field('evolved', createExample.evolved)
      .field('familyId', createExample.familyId)
      .field('crossGen', createExample.crossGen)
      .field('type1', createExample.type1)
      .field('type2', createExample.type2)
      .field('weather1', createExample.weather1)
      .field('weather2', createExample.weather2)
      .field('atk', createExample.atk)
      .field('def', createExample.def)
      .field('sta', createExample.sta)
      .field('legendary', createExample.legendary)
      .field('aquireable', createExample.aquireable)
      .field('spawns', createExample.spawns)
      .field('regional', createExample.regional)
      .field('raidable', createExample.raidable)
      .field('hatchable', createExample.hatchable)
      .field('shiny', createExample.shiny)
      .field('nest', createExample.nest)
      .field('new', createExample.new)
      .field('notGettable', createExample.notGettable)
      .field('futureEvolve', createExample.futureEvolve)
      .field('cp_100_lvl40', createExample.cp_100_lvl40)
      .field('cp_100_lvl39', createExample.cp_100_lvl39)
    deleteImage(response.body.imgName)
    const insertedPokemon = await Pokemons.findOne({ where: { id: response.body.id } })
    Object.assign(insertedPokemon, { name: 'new_name' })
    await insertedPokemon?.save()
    expect(insertedPokemon?.name).toBe('new_name')
  })
})

describe('Pokemon delete methods', () => {
  it('should delete the Pokemon', async () => {
    const response:supertest.Response = await request.agent(app)
      .post('/pokemons')
      .set('Content-Type', 'multipart/form-data')
      .attach('img', testImage)
      .field('pokedexNumber', createExample.pokedexNumber)
      .field('name', createExample.name)
      .field('generation', createExample.generation)
      .field('evolutionStage', createExample.evolutionStage)
      .field('evolved', createExample.evolved)
      .field('familyId', createExample.familyId)
      .field('crossGen', createExample.crossGen)
      .field('type1', createExample.type1)
      .field('type2', createExample.type2)
      .field('weather1', createExample.weather1)
      .field('weather2', createExample.weather2)
      .field('atk', createExample.atk)
      .field('def', createExample.def)
      .field('sta', createExample.sta)
      .field('legendary', createExample.legendary)
      .field('aquireable', createExample.aquireable)
      .field('spawns', createExample.spawns)
      .field('regional', createExample.regional)
      .field('raidable', createExample.raidable)
      .field('hatchable', createExample.hatchable)
      .field('shiny', createExample.shiny)
      .field('nest', createExample.nest)
      .field('new', createExample.new)
      .field('notGettable', createExample.notGettable)
      .field('futureEvolve', createExample.futureEvolve)
      .field('cp_100_lvl40', createExample.cp_100_lvl40)
      .field('cp_100_lvl39', createExample.cp_100_lvl39)
    deleteImage(response.body.imgName)
    const insertedPokemon = await Pokemons.findOne({ where: { id: response.body.id } })
    const deleteRequest = await request.agent(app)
      .delete(`/pokemons/${insertedPokemon?.id}`)
    expect(deleteRequest.status).toBe(200)
    expect(deleteRequest.body).toEqual({ message: 'Pokemon excluido com sucesso' })
  })
})
