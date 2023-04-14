import { Controller, Delete, Get, Put } from '@nestjs/common';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  async findAll() {
    const result = await this.pokemonService.findAll();
    return result;
  }

  @Get(':id')
  async findOne(id: number) {
    const result = await this.pokemonService.findOne(id);
    return result;
  }

  @Put(':id')
  async update(id: number, data: any) {
    const result = await this.pokemonService.update(id, data);
    return result;
  }

  @Delete(':id')
  async delete(id: number) {
    const result = await this.pokemonService.delete(id);
    return result;
  }
}
