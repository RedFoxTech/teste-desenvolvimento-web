import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/connections/prisma/prisma.service';

@Injectable()
export class PokemonService {
  constructor(private readonly prisma: PrismaService) {}

  getHello(): string {
    return 'Hello';
  }

  findOne(id: string) {
    return this.prisma.pokemonGo.findFirst({
      where: {
        id,
      },
    });
  }

  findAll() {
    return this.prisma.pokemonGo.findMany();
  }

  update(id: string, data: any) {
    return this.prisma.pokemonGo.update({
      where: {
        id,
      },
      data,
    });
  }

  delete(id: string) {
    return this.prisma.pokemonGo.delete({
      where: {
        id,
      },
    });
  }
}
