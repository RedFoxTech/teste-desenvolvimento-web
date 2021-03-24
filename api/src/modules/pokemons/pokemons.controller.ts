import {
  Controller,
  Body,
  UseInterceptors,
  UploadedFile,
  Query,
  Get,
  Post,
  Put,
  Delete,
  ParseIntPipe,
  Param,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { ApiTags } from '@nestjs/swagger';

import { PokemonsActions } from './pokemons.actions';
import { CreatePokemonDTO } from './dto/createPokemon.dto';
import { UpdatePokemonDTO } from './dto/updatePokemon.dto';
import { imageSettings } from './pokemon.storage';

@ApiTags('Pokemons')
@Controller('pokemons')
export class PokemonsController {
  constructor(private readonly pokemonsActions: PokemonsActions) {}
  @Post()
  create(@Body() createPokemonDTO: CreatePokemonDTO) {
    return this.pokemonsActions.create(createPokemonDTO);
  }

  @Get()
  list(
    @Query('page', ParseIntPipe) page = 1,
    @Query('limit', ParseIntPipe) limit = 10,
  ) {
    return this.pokemonsActions.list(page, limit);
  }

  @Get('/:id')
  show(@Param('id', ParseIntPipe) pokemonId: number) {
    return this.pokemonsActions.show(pokemonId);
  }

  @Put('/:id')
  update(
    @Param('id', ParseIntPipe) pokemonId: number,
    @Body() updatePokemonDTO: UpdatePokemonDTO,
  ) {
    return this.pokemonsActions.update(pokemonId, updatePokemonDTO);
  }

  @Delete('/:id')
  delete(@Param('id', ParseIntPipe) pokemonId: number) {
    return this.pokemonsActions.delete(pokemonId);
  }

  @Post('/:id/image')
  @UseInterceptors(FileInterceptor('image', imageSettings))
  changeImage(
    @Param('id', ParseIntPipe) pokemonId: number,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.pokemonsActions.changeImage(pokemonId, file);
  }
}
