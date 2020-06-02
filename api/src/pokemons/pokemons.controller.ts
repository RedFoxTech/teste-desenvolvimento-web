import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { PokemonService } from './shared/pokemon.service';
import { Pokemon } from './shared/pokemon';

@Controller('pokemons')
export class PokemonsController {

  constructor(
    private pokemonService: PokemonService
  ) { }

  @Get()
  async getAll(): Promise<Pokemon[]> {
    return this.pokemonService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Pokemon> {
    return this.pokemonService.getById(id);
  }

  @Post()
  async create(@Body() pokemon: Pokemon): Promise<Pokemon> {
    return this.pokemonService.create(pokemon);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() pokemon: Pokemon): Promise<Pokemon> {
    return this.pokemonService.update(id, pokemon);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    this.pokemonService.delete(id);
  }
}
