import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PokemonsService } from './pokemons.service';
import { PokemonsActions } from './pokemons.actions';
import { PokemonsController } from './pokemons.controller';

import { Pokemon } from '../../shared/database/entities/pokemon';

@Module({
  imports: [TypeOrmModule.forFeature([Pokemon])],
  providers: [PokemonsService, PokemonsActions],
  controllers: [PokemonsController],
})
export class PokemonsModule {}
