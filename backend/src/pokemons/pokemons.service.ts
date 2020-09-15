import { Injectable, UnprocessableEntityException, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PokemonRepository } from './pokemons.repository';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon } from './pokemon.entity';
import { FindPokemonsQueryDto } from './dto/find-pokemons-query.dto';

@Injectable()
export class PokemonsService {
    constructor(
        @InjectRepository(PokemonRepository)
        private pokemonRepository: PokemonRepository,
      ) {}


      async createPokemon(createPokemonDto: CreatePokemonDto): Promise<Pokemon> {
        
          return this.pokemonRepository.createUser(createPokemonDto);
        
      }

      async findPokemonById(pokemonId: string): Promise<Pokemon> {
        const pokemon = await this.pokemonRepository.findOne(pokemonId, {
          select: ['id', 'name', 'pokedexName'],
        });
    
        if (!pokemon) throw new NotFoundException('Pokemon não encontrado');
    
        return pokemon;
      }

      async findPokemons(
        queryDto: FindPokemonsQueryDto,
      ): Promise<{ pokemons: Pokemon[]; total: number }> {
        const pokemons = await this.pokemonRepository.findPokemons(queryDto);
        return pokemons;
      }

      async updatePokemon(updatePokemonDto: UpdatePokemonDto, id: string): Promise<Pokemon> {
        const pokemon = await this.findPokemonById(id);
        const { name, pokedexName } = updatePokemonDto;
        pokemon.name = name ? name : pokemon.name;
        pokemon.pokedexName = pokedexName ? pokedexName : pokemon.pokedexName;
        try {
          await pokemon.save();
          return pokemon;
        } catch (error) {
          throw new InternalServerErrorException(
            'Erro ao salvar os dados no banco de dados',
          );
        }
      }

      async deletePokemon(pokemonId: string) {
        const result = await this.pokemonRepository.delete({ id: pokemonId });
        if (result.affected === 0) {
          throw new NotFoundException(
            'Não foi encontrado um pokemon com o ID informado',
          );
        }
      }
}
