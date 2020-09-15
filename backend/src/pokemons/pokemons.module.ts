import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonRepository } from './pokemons.repository';
import { PokemonsService } from './pokemons.service';
import { PokemonsController } from './pokemons.controller';
import { PassportModule } from '@nestjs/passport';

// @Global()
@Module({
    imports: [TypeOrmModule.forFeature([PokemonRepository]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    ],
    providers: [PokemonsService],
    controllers: [PokemonsController],
})
export class PokemonsModule {}
