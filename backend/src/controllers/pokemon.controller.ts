import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Pokemon} from '../models';
import {PokemonRepository} from '../repositories';

export class PokemonController {
  constructor(
    @repository(PokemonRepository)
    public pokemonRepository : PokemonRepository,
  ) {}

  @post('/pokemon')
  @response(200, {
    description: 'Pokemon model instance',
    content: {'application/json': {schema: getModelSchemaRef(Pokemon)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pokemon, {
            title: 'NewPokemon',
            exclude: ['id'],
          }),
        },
      },
    })
    pokemon: Omit<Pokemon, 'id'>,
  ): Promise<Pokemon> {
    return this.pokemonRepository.create(pokemon);
  }

  @get('/pokemon/count')
  @response(200, {
    description: 'Pokemon model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Pokemon) where?: Where<Pokemon>,
  ): Promise<Count> {
    return this.pokemonRepository.count(where);
  }

  @get('/pokemon')
  @response(200, {
    description: 'Array of Pokemon model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Pokemon, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Pokemon) filter?: Filter<Pokemon>,
  ): Promise<Pokemon[]> {
    return this.pokemonRepository.find(filter);
  }

  @patch('/pokemon')
  @response(200, {
    description: 'Pokemon PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pokemon, {partial: true}),
        },
      },
    })
    pokemon: Pokemon,
    @param.where(Pokemon) where?: Where<Pokemon>,
  ): Promise<Count> {
    return this.pokemonRepository.updateAll(pokemon, where);
  }

  @get('/pokemon/{id}')
  @response(200, {
    description: 'Pokemon model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Pokemon, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Pokemon, {exclude: 'where'}) filter?: FilterExcludingWhere<Pokemon>
  ): Promise<Pokemon> {
    return this.pokemonRepository.findById(id, filter);
  }

  @patch('/pokemon/{id}')
  @response(204, {
    description: 'Pokemon PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pokemon, {partial: true}),
        },
      },
    })
    pokemon: Pokemon,
  ): Promise<void> {
    await this.pokemonRepository.updateById(id, pokemon);
  }

  @put('/pokemon/{id}')
  @response(204, {
    description: 'Pokemon PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() pokemon: Pokemon,
  ): Promise<void> {
    await this.pokemonRepository.replaceById(id, pokemon);
  }

  @del('/pokemon/{id}')
  @response(204, {
    description: 'Pokemon DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.pokemonRepository.deleteById(id);
  }
}
