import { EntityRepository, Repository } from 'typeorm';
import { Pokemon } from './pokemon.entity';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import {
    ConflictException,
    InternalServerErrorException,
  } from '@nestjs/common';
import { FindPokemonsQueryDto } from './dto/find-pokemons-query.dto';

@EntityRepository(Pokemon)
export class PokemonRepository extends Repository<Pokemon> {

    async createUser(
        createUserDto: CreatePokemonDto,
      ): Promise<Pokemon> {
        const { name, pokedexName, imgName, generation, evolutionStage, evolved, familyID, crossGen,
            type1, type2, weather1, weather2, statTotal, atk, def, sta, legendary, aquireable, 
            spawns, regional, raidable, hatchable, shiny, nest, vnew, notGettable, futureEvolve,
            hundredPerCpAt40, hundredPerCpAt39 } = createUserDto;
    
        const pokemon = this.create();
            pokemon.name = name;
            pokemon.pokedexName = pokedexName;
            pokemon.imgName = imgName;
            pokemon.generation = generation;
            pokemon.evolutionStage = evolutionStage;
            pokemon.evolved = evolved;
            pokemon.familyID = familyID;
            pokemon.crossGen = crossGen;
            pokemon.type1 = type1;
            pokemon.type2 = type2;
            pokemon.weather1 = weather1;
            pokemon.weather2 = weather2;
            pokemon.statTotal = statTotal;
            pokemon.atk = atk;
            pokemon.def = def;
            pokemon.sta = sta;
            pokemon.legendary = legendary;
            pokemon.aquireable = aquireable;
            pokemon.spawns = spawns;
            pokemon.regional = regional;
            pokemon.raidable = raidable;
            pokemon.hatchable = hatchable;
            pokemon.shiny = shiny;
            pokemon.nest = nest;
            pokemon.vnew = vnew;
            pokemon.notGettable = notGettable;
            pokemon.futureEvolve = futureEvolve;
            pokemon.hundredPerCpAt40 = hundredPerCpAt40;
            pokemon.hundredPerCpAt39 = hundredPerCpAt39;
            
        try {
          await pokemon.save()
          return pokemon;
        } catch (error) {
          if (error.code.toString() === '23505') {
            throw new ConflictException('Pokemon ja cadastrado na base');
          } else {
            throw new InternalServerErrorException(
              'Erro ao salvar os dados do pokemon no banco de dados',
            );
          }
        }
      }
    
      async findPokemons(
        queryDto: FindPokemonsQueryDto,
      ): Promise<{ pokemons: Pokemon[]; total: number }> {
        queryDto.page = queryDto.page < 1 ? 1 : queryDto.page;
        queryDto.limit = queryDto.limit > 100 ? 100 : queryDto.limit;
    
        const { name, pokedexName} = queryDto;
        const query = this.createQueryBuilder('pokemon');
    
        if (pokedexName) {
          query.andWhere('pokemon.pokedexName ILIKE :pokedexName', { pokedexName: `%${pokedexName}%` });
        }
    
        if (name) {
          query.andWhere('pokemon.name ILIKE :name', { name: `%${name}%` });
        }
    
        query.skip((queryDto.page - 1) * queryDto.limit);
        query.take(+queryDto.limit);
        query.orderBy(queryDto.sort ? JSON.parse(queryDto.sort) : undefined);
        query.select(['pokemon.name', 'pokemon.pokedexName']);
    
        const [pokemons, total] = await query.getManyAndCount();
    
        return { pokemons, total };
      }



}
