import { MongooseModule } from '@nestjs/mongoose';
import { PokemonService } from './shared/pokemon.service';
import { PokemonsController } from './pokemons.controller';
import { Module } from '@nestjs/common';
import { PokemonSchema } from './schemas/pokemon.schema';


@Module({
    imports: [
      MongooseModule.forFeature([{ name: 'Pokemon', schema: PokemonSchema }])
    ],
    controllers: [PokemonsController],
    providers: [PokemonService],
  })
export class PokemonsModule {}
