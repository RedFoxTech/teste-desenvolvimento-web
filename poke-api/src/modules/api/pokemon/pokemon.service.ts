import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/connections/prisma/prisma.service';

@Injectable()
export class PokemonService {
  constructor(private readonly prisma: PrismaService) {}

  getHello(): string {
    return 'Hello';
  }

  findOne(id: number) {
    return this.prisma.pokemonGo.findFirst({
      where: {
        Row: id,
      },
    });
  }

  findAll() {
    return this.prisma.pokemonGo.findMany();
  }

  update(id: number, data: any) {
    return this.prisma.pokemonGo.update({
      where: {
        Row: id,
      },
      data,
    });
  }

  delete(id: number) {
    return this.prisma.pokemonGo.delete({
      where: {
        Row: id,
      },
    });
  }
}
