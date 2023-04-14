import { Module } from '@nestjs/common';
import { PokemonController } from './api/pokemon/pokemon.controller';
import { PokemonService } from './api/pokemon/pokemon.service';
import { PrismaModule } from 'src/connections/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PokemonController],
  providers: [PokemonService],
})
export class AppModule {}
