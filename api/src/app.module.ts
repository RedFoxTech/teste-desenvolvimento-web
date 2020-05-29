import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonsController } from './pokemons/pokemons.controller';

@Module({
  imports: [],
  controllers: [AppController, PokemonsController],
  providers: [AppService],
})
export class AppModule {}
