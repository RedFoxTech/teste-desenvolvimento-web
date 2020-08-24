import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonRepository } from './pokemons.repository';
import { PokemonsService } from './pokemons.service';
import { PokemonsController } from './pokemons.controller';

@Global()
@Module({
    imports: [TypeOrmModule.forFeature([PokemonRepository])],
    providers: [PokemonsService],
    controllers: [PokemonsController],
})
export class PokemonsModule {}
