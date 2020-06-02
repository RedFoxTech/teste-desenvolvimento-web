import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonsModule } from './pokemons/pokemons.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

console.log(process.env.MYMONGODB)
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MYMONGODB),
    PokemonsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
